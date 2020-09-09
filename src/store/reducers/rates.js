import { FETCH_RATES } from "../actions/types";

const INITIAL_STATE = {
  baseRate: 'USD',
  secondaryRates: ["RUB", "EUR", "CHF","JPY"],
  rates: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RATES: {
      return { ...state, rates: action.payload };
    }
    default:
      return state;
  }
};
