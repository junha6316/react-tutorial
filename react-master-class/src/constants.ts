export const urls = {
  coinList: 'https://api.coinpaprika.com/v1/coins',
  coinDetail: (coinId: string) =>
    `https://api.coinpaprika.com/v1/coins/${coinId}`,
  coinPriceDetail: (coinId: string) =>
    `https://api.coinpaprika.com/v1/tickers/${coinId}`,
};
