import React from "react";

const RatesListItem = ({ name, value }) => {
  return (
    <li className="history-list__item">
      <span>{name}</span>
      <span>{value}</span>
    </li>
  );
};

export default RatesListItem;
