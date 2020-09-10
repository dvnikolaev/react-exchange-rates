import React from "react";
import { connect } from "react-redux";
import { setSecondaryRates } from "../../../store/actions";

const RatesListItem = ({
  name,
  setIsShowList,
  secondaryRates,
  index,
  setSecondaryRates,
}) => {
  const setSecondaryRate = () => {
    secondaryRates[index] = name;
    setSecondaryRates(secondaryRates);
    setIsShowList(false);
  };

  return (
    <li className="secondary-list__item">
      <button className="secondary-list__button" onClick={setSecondaryRate}>
        {name}
      </button>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    secondaryRates: state.rates.secondaryRates,
  };
};

export default connect(mapStateToProps, { setSecondaryRates })(RatesListItem);
