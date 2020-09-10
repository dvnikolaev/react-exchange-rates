import React from "react";
import { connect } from "react-redux";

import "../../assets/stylesheets/Secondaries.css";
import Secondary from "./Secondary";

const Secondaries = ({ secondaryRates }) => {
  const renderSecondary = secondaryRates.map((rate,index) => {
    return <Secondary rate={rate} key={index} index={index}/>;
  });

  return (
    <div className="secondaries">
      {renderSecondary}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    secondaryRates: state.rates.secondaryRates,
  };
};

export default connect(mapStateToProps)(Secondaries);
