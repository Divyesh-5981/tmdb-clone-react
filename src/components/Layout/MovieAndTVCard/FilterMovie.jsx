import React, { useState } from "react";
import Sort from "./Sort";
import Filter from "./Filter";
import WhereToWatch from "./WhereToWatch";

function FilterMovie() {
  return (
    <div className="search-movies-div">
      <Sort />
      <Filter />
      <WhereToWatch />
      <div className="search-div"></div>
    </div>
  );
}

export default FilterMovie;
