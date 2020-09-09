import React from "react";

import MonthsListItem from "./MonthsListItem";
import { getMonthsName } from "../../../services/";

const MonthList = ({ activeMonth, setActiveMonth }) => {
  const monthsNames = [
    getMonthsName(new Date().getMonth() - 4),
    getMonthsName(new Date().getMonth() - 3),
    getMonthsName(new Date().getMonth() - 2),
    getMonthsName(new Date().getMonth() - 1),
  ];

  const renderListItem = monthsNames.map((name, index) => {
    return (
      <MonthsListItem
        name={name}
        key={name}
        index={index}
        activeMonth={activeMonth}
        setActiveMonth={(id) => setActiveMonth(id)}
      />
    );
  });

  return <ul className="months-list">{renderListItem}</ul>;
};

export default MonthList;
