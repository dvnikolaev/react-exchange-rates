import React from "react";

import "../assets/stylesheets/Card.css";

const Card = ({ className, children }) => {
  const renderClassName = className ? className : '';

  return <article className={`card ${renderClassName}`}>{children}</article>;
};

export default Card;
