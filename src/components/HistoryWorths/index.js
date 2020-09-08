import React from "react";
import { connect } from 'react-redux';

import "../../assets/stylesheets/HistoryWorths.css"
import Card from "../Card";
import MonthsList from './MonthsList'

const HistoryWorths = ({ baseRate }) => {
  return (
    <Card className="history-worths">
      <h2 className="history__header">Курс {baseRate} за предыдущие месяцы</h2>
      <MonthsList />
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    baseRate: state.rates.baseRate
  }
}

export default connect(mapStateToProps)(HistoryWorths);
