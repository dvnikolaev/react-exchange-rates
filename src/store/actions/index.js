import { FETCH_RATES, FETCH_HISTORY_WORTHS, SELECT_BASE_RATE, SET_SECONDARY_RATES } from "./types";
import { getRatesForLastFourMonths } from "../../services";
import axios from "axios";

export const fetchRates = () => async (dispatch, getState) => {
  const { data: { rates } } = await axios.get(
    `https://api.exchangerate.host/latest?base=${getState().rates.baseRate}`
  );

  dispatch({
    type: FETCH_RATES,
    payload: rates
  })
};

export const fetchHistoryWorths = (baseRate) => async (dispatch) => {
  const historyWorths = await getRatesForLastFourMonths(baseRate);

  dispatch({
    type: FETCH_HISTORY_WORTHS,
    payload: historyWorths,
  });
};

export const selectBaseRate = (rate) => {
  return {
    type: SELECT_BASE_RATE,
    payload: rate
  }
}

export const setSecondaryRates = rates => {
  return {
    type: SET_SECONDARY_RATES,
    payload: [...rates]
  }
}
