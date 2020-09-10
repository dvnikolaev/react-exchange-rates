import React, { useEffect } from "react";
import { connect } from "react-redux";

import "../assets/stylesheets/Main.css";
import { fetchRates } from "../store/actions";
import BaseRate from "./Base/BaseRate";
import HistoryWorths from "./HistoryWorths";
import Rates from "./Rates";

const Main = ({ fetchRates }) => {
  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <main className="page-main">
      <BaseRate />
      <HistoryWorths />
      <Rates />
    </main>
  );
};

export default connect(null, { fetchRates })(Main);
