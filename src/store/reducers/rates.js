import { FETCH_RATES } from "../actions/types";

const INITIAL_STATE = {
  baseRate: 'USD',
  rates: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RATES: {
      return { ...state, rates: action.payload };
    }
    default:
      console.log(3231);
      return state;
  }
};
