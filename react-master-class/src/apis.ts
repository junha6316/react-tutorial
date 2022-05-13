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
