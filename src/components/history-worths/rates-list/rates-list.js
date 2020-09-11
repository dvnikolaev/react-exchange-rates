import React from "react";
import { connect } from "react-redux";

import RatesListItem from "./rates-list-item";

const RatesList = ({ activeMonth, secondaryRates, historyWorths }) => {
  let rates;
  if (historyWorths.length) {
    rates = secondaryRates.map((rate) => {
      return {
        rate,
        value: historyWorths[activeMonth][rate],
      };
    });
  }
  
  const renderListItem = () => {
    if (!rates) {
      return null;
    }

    return rates.map((rate,i) => {
      return (
        <RatesListItem key={i} name={rate.rate} value={rate.value.toFixed(2)}/>
      );
    });
  }

  return (
    <ul className="history-list">
      {renderListItem()}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    secondaryRates: state.rates.secondaryRates,
    historyWorths: state.rates.historyWorths,
  };
};

export default connect(mapStateToProps)(RatesList);
