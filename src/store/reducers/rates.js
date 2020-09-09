import { FETCH_RATES, FETCH_HISTORY_WORTHS } from "../actions/types";

const INITIAL_STATE = {
  baseRate: 'USD',
  secondaryRates: ["RUB", "EUR", "CHF","JPY"],
  historyWorths: [],
  rates: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RATES: {
      return { ...state, rates: action.payload };
    }
    case FETCH_HISTORY_WORTHS: {
      return {...state, historyWorths: action.payload}
    }
    default:
      return state;
  }
};
