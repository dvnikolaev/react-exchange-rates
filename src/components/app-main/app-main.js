import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./app-main.css";
import { fetchRates } from "../../store/actions";
import BaseRate from "../base-rate/base-rate";
import HistoryWorths from "../history-worths/history-worths";
import Rates from "../all-currencies/all-currencies";
import Secondaries from "../Secondaries/secondary-currencies";

const Main = ({ fetchRates, baseRate }) => {
  useEffect(() => {
    fetchRates();
  }, [baseRate]);

  return (
    <main className="page-main">
      <BaseRate />
      <HistoryWorths />
      <Rates />
      <Secondaries />
    </main>
  );
};

const mapStateToProps = state => {
  return {
    baseRate: state.rates.baseRate
  }
}

export default connect(mapStateToProps, { fetchRates })(Main);
