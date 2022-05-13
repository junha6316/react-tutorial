import { useEffect, useState } from 'react';
import {
  useRouteMatch,
  useLocation,
  useParams,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
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
import { apis } from '../constants';
import Chart from './Chart';
import Price from './Price';
import {
  CoinDetailParams,
  RouteState,
  ICoinDetail,
  ICoinPriceDetail,
} from './type/CoinDetailResponse';

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<CoinDetailParams>();
  const { state } = useLocation<RouteState>();

  const priceMatch = useRouteMatch('/:coinId/price');
  const chartMatch = useRouteMatch('/:coinId/chart');

  const [coinDetail, setCoinDetail] = useState<ICoinDetail>();
  const [coinPriceDetail, setCoinPriceDetail] = useState<ICoinPriceDetail>();

  useEffect(() => {
    (async () => {
      const coinInfo: ICoinDetail = await (
        await fetch(apis.coninDetail(coinId))
      ).json();
      const priceInfo: ICoinPriceDetail = await (
        await fetch(apis.coinPriceDetail(coinId))
      ).json();

      setCoinDetail(coinInfo);
      setCoinPriceDetail(priceInfo);
      setLoading(false);
    })();
  }, [coinId]); // hook 성능을 위해 dependency에 추가
  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? 'Loading...' : coinDetail?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{coinDetail?.rank}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Symbol:</span>
              <span>${coinDetail?.symbol}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Open Source:</span>
              <span>{coinDetail?.open_source ? 'Yes' : 'No'}</span>
            </OverviewItem>
          </Overview>

          <Description>{coinDetail?.description}</Description>

          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{coinPriceDetail?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{coinPriceDetail?.max_supply}</span>
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
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
export default Coin;
