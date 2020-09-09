import React from "react";

const MonthsListItem = ({ name, index, activeMonth, setActiveMonth }) => {
  const renderClassNameActive = () => {
    return index === activeMonth ? "months-list__button--active" : "";
  };

  return (
    <li className="months-list__item">
      <button
        className={`months-list__button ${renderClassNameActive()}`}
        onClick={() => setActiveMonth(index)}
      >
        {name}
      </button>
    </li>
  );
};

export default MonthsListItem;
