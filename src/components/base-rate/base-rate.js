import React from "react";

import "./base-rate.css";
import Card from "../../ui/Card/Card";
import Header from "./base-rate-header";

const BaseRate = () => {
  return (
    <Card className="card--dark card__base">
      <Header />
      <span className="base__value">1</span>
    </Card>
  );
};

export default BaseRate;
