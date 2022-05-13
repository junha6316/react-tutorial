import { useQuery } from 'react-query';
import {
  useRouteMatch,
  useLocation,
  useParams,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { fetchCoinDetail, fetchCoinPriceDetail } from '../apis';
import {
  Container,
  Header,
  Loader,
  Title,
  OverviewItem,
  Description,
  Overview,
  Tab,
  Tabs,
} from '../components';

import Chart from './Chart';
import Price from './Price';
import {
  CoinDetailParams,
  RouteState,
  ICoinDetail,
  ICoinPriceDetail,
} from './type/CoinDetailResponse';
import { Helmet } from 'react-helmet';
import GoBackBtn from './GoBackBtn';

function Coin() {
  const { coinId } = useParams<CoinDetailParams>();
  const { state } = useLocation<RouteState>();

  const priceMatch = useRouteMatch('/:coinId/price');
  const chartMatch = useRouteMatch('/:coinId/chart');

  const { isLoading: infoLoading, data: infoData } = useQuery<ICoinDetail>(
    ['info', coinId],
    () => fetchCoinDetail(coinId),
  );
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<ICoinPriceDetail>(['tickers', coinId], () =>
      fetchCoinPriceDetail(coinId),
    );

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? 'Loading...' : infoData?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? 'Loading...' : infoData?.name}
        </Title>
      </Header>
      <GoBackBtn />
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? 'Yes' : 'No'}</span>
            </OverviewItem>
          </Overview>

          <Description>{infoData?.description}</Description>

          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/${coinId}/price`}>
              <Price />
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
export default Coin;
