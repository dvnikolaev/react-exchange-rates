import { FETCH_RATES, FETCH_HISTORY_WORTHS } from "./types";
import { getRatesForLastFourMonths } from "../../services";

export const fetchRates = (id) => {
  return {
    type: FETCH_RATES,
    payload: id,
  };
};

export const fetchHistoryWorths = (baseRate) => async (dispatch) => {
  const historyWorths = await getRatesForLastFourMonths(baseRate);

  dispatch({
    type: FETCH_HISTORY_WORTHS,
    payload: historyWorths,
  });
};
