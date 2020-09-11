import React from "react";
import { connect } from "react-redux";

import RatesListItem from "./rate-list-item";

const RatesList = ({ rates, searchValue }) => {
  const renderRatesListItem = Object.keys(rates)
    .filter((rate) => rate.includes(searchValue.toUpperCase()))
    .map((rate) => {
      return <RatesListItem key={rate} name={rate} value={rates[rate].toFixed(2)} />;
    });

  return <ul className="rates-list">{renderRatesListItem}</ul>;
};

const mapStateToProps = (state) => {
  return {
    rates: state.rates.rates,
  };
};

export default connect(mapStateToProps)(RatesList);
