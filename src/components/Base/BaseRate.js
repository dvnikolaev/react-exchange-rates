import React from "react";

import "../../assets/stylesheets/BaseRate.css";
import Card from "../Card";
import Header from "./Header";

const BaseRate = () => {
  return (
    <Card className="card--dark card__base">
      <Header />
      <span className="base__value">1</span>
    </Card>
  );
};

export default BaseRate;
