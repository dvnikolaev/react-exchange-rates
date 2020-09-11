import React from "react";
import { connect } from 'react-redux';

import Card from "../../../ui/Card/Card";
import Header from './secondary-header';

const Secondary = ({rate, index, value}) => {
  const renderValue = () => {
    if (!value) {
      return null;
    }
    return (<span className="secondary__value" title={value.toFixed(2)}>{value.toFixed(2)}</span>)
  }
  return (
    <Card className="secondary card--light">
      <Header rate={rate} index={index}/>
      {renderValue()}
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.rates.rates[ownProps.rate]
  }
}

export default connect(mapStateToProps)(Secondary);
