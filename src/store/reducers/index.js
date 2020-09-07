import { combineReducers } from 'redux';

import ratesReducer from './rates';

export default combineReducers({
  rates: ratesReducer
})