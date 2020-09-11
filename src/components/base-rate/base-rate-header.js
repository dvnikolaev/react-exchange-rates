import React from "react";
import { connect } from "react-redux";

const Header = ({ baseRate }) => {
  return (
    <header className="card-header">
      <span className="base__subheader">Курс</span>
      <h2 className="base__name">{baseRate}</h2>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    baseRate: state.rates.baseRate,
  };
};

export default connect(mapStateToProps)(Header);
