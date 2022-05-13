import { urls } from './constants';

export function fetchCoins() {
  return fetch(urls.coinList).then((response) => response.json());
}
