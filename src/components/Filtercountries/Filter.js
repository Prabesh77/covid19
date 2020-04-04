import React from "react";
import Union from "../../Union.svg";

const Filter = ({ country, setCountry }) => {
  const searchHandler = e => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <form action="" className="filter-form">
        <input
          type="text"
          value={country}
          placeholder="Search Country"
          onChange={searchHandler}
        />
        <button className="search-btn">
          <img src={Union} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Filter;
