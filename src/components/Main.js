import React, { useEffect } from "react";
import { connect } from "react-redux";

import "../assets/stylesheets/Main.css";
import { fetchRates } from "../store/actions";
import BaseRate from "./Base/BaseRate";
import HistoryWorths from "./HistoryWorths";
import Rates from "./Rates";
import Secondaries from "./Secondaries";

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
