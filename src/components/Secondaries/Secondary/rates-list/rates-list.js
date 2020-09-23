import React from "react";
import { connect } from "react-redux";

import { useClickOutside } from "../../../../services/hooks";
import RatesListItem from "./rates-list-item";

const RatesList = ({ rates, isShowList, setIsShowList, index }) => {
  let domNode = useClickOutside(() => {
    setIsShowList(false);
  });
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
  return (
    <ul className="secondary-list" ref={domNode}>
      {renderRatesListItem}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    rates: Object.keys(state.rates.rates).filter((rate) => {
      return !state.rates.secondaryRates.includes(rate);
    }),
  };
};

export default connect(mapStateToProps)(RatesList);
