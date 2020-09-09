import React, { useState } from "react";

import MonthsListItem from "./MonthsListItem";
import { getMonthsName } from "../../../services/";

const MonthList = () => {
  const [activeMonth, setActiveMonth] = useState(3);

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
        setActiveMonth={setActiveMonth}
      />
    );
  });

  return <ul className="months-list">{renderListItem}</ul>;
};

export default MonthList;
