import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./history-worths.css";
import { fetchHistoryWorths } from "../../store/actions";
import Card from "../../ui/Card/Card";
import MonthsList from "./months-list/months-list";
import RatesList from "./rates-list/rates-list";

const HistoryWorths = ({ baseRate, fetchHistoryWorths }) => {
  const [activeMonth, setActiveMonth] = useState(3);

  useEffect(() => {
    fetchHistoryWorths(baseRate);
  }, [baseRate]);

  return (
    <Card className="history-worths card--light">
      <h2 className="history__header">Курс {baseRate} за предыдущие месяцы</h2>
      <MonthsList activeMonth={activeMonth} setActiveMonth={setActiveMonth} />
      <RatesList activeMonth={activeMonth} />
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    baseRate: state.rates.baseRate,
  };
};

export default connect(mapStateToProps, { fetchHistoryWorths })(HistoryWorths);
