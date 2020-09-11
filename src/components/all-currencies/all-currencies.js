import React, { useState } from "react";

import "./rates.css";
import Card from "../../ui/Card/Card";
import Search from "./Search";
import RatesList from "./rates-list/rates-list";

const Rates = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Card className="rates card--light">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <RatesList searchValue={searchValue}/>
    </Card>
  );
};

export default Rates;
