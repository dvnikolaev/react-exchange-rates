import React from "react";
import { connect } from "react-redux";

import RatesListItem from "./rates-list-item";

const RatesList = ({ rate, rates, isShowList, setIsShowList, index }) => {
  if (!isShowList) {
    return null;
  }

  const renderRatesListItem = rates.map((name) => {
    return (
      <RatesListItem
        name={name}
        key={name}
        setIsShowList={setIsShowList}
        index={index}
      />
    );
  });
  return <ul className="secondary-list">{renderRatesListItem}</ul>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    rates: Object.keys(state.rates.rates).filter(
      (rate) => rate !== ownProps.rate
    ),
  };
};

export default connect(mapStateToProps)(RatesList);
