const BASE_URL = `https://api.coinpaprika.com/v1`;

export const urls = {
  coinList: `${BASE_URL}/coins`,
  coinDetail: (coinId: string) => `${BASE_URL}/coins/${coinId}`,
  coinPriceDetail: (coinId: string) => `${BASE_URL}/tickers/${coinId}`,
  priceHistory: (coinId: string, start: number, end: number) =>
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${start}&end=${end}`,
};
