import { useParams } from 'react-router-dom';

interface CoinDetailParams {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<CoinDetailParams>();

  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
