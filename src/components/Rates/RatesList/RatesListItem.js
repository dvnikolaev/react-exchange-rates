import React from "react";
import { connect } from "react-redux";
import { selectBaseRate } from "../../../store/actions";

const RatesListItem = ({ baseRate, name, value, selectBaseRate }) => {
  const renderClassNameActive =
    name === baseRate ? "rates-list__button--active" : "";

  return (
    <li className="rates-list__item">
      <button
        className={`rates-list__button ${renderClassNameActive}`}
        onClick={() => selectBaseRate(name)}
      >
        <span>{name}</span>
        <span>{value}</span>
      </button>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    baseRate: state.rates.baseRate,
  };
};

export default connect(mapStateToProps, { selectBaseRate })(RatesListItem);
