import { FETCH_RATES } from './types';

export const fetchRates = (id) => {
  return {
    type: FETCH_RATES,
    payload: id
  }
}