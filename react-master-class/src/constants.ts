export const urls = {
  coinList: 'https://api.coinpaprika.com/v1/coins',
  coninDetail: (coinId: string) =>
    `https://api.coinpaprika.com/v1/coins/${coinId}`,
  coinPriceDetail: (coinId: string) =>
    `https://api.coinpaprika.com/v1/tickers/${coinId}`,
};
