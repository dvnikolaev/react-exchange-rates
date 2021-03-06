import React, { useState } from "react";

import RatesList from "./rates-list/rates-list";

const Header = ({ rate, index }) => {
  const [isShowList, setIsShowList] = useState(false);
  return (
    <header className="card-header">
      <h2 className="secondary__header">{rate}</h2>
      <button
        className="secondary__button"
        onClick={() => setIsShowList(!isShowList)}
        aria-label="show-rates-list"
      >
        <i className="fas fa-chevron-down"></i>
      </button>
      <RatesList
        rate={rate}
        isShowList={isShowList}
        setIsShowList={setIsShowList}
        index={index}
      />
    </header>
  );
};

export default Header;
