import React from "react";

import "../assets/stylesheets/Main.css";
import BaseRate from "./Base/BaseRate";
import HistoryWorths from "./HistoryWorths";

const Main = () => {
  return (
    <main className="page-main">
      <BaseRate />
      <HistoryWorths />
    </main>
  );
};

export default Main;
