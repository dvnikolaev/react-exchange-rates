import React, { useState } from "react";

import "../../assets/stylesheets/Rates.css";
import Card from "../Card";
import Search from "./Search";
import RatesList from "./RatesList";

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
