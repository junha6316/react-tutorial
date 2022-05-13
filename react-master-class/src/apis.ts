import { urls } from './constants';

export function fetchCoins() {
  return fetch(urls.coinList).then((response) => response.json());
}

export function fetchCoinDetail(coinId: string) {
  return fetch(urls.coinDetail(coinId)).then((response) => response.json());
}

export function fetchCoinPriceDetail(coinId: string) {
  return fetch(urls.coinPriceDetail(coinId)).then((response) =>
    response.json(),
  );
}

export function fetchCoinHistory(coinId: string) {
  const end = Math.floor(Date.now() / 1000);
  const start = end - 3600 * 24 * 7 * 2;
  return fetch(urls.priceHistory(coinId, start, end)).then((response) =>
    response.json(),
  );
}
