import React from "react";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="rates__search"
      placeholder="Поиск..."
    />
  );
};

export default Search;
