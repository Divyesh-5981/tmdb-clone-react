import React, { useState } from "react";
import DropDown from "../UI/DropDown";
import Chevron from "../../../assets/images/chevron_right.svg";

const popularitySort = [
  { label: "Popularity Descending", value: "Popularity Descending" },
  { label: "Popularity Ascending", value: "Popularity Ascending" },
  { label: "Rating Descending", value: "Rating Descending" },
  { label: "Rating Ascending", value: "Rating Ascending" },
  { label: "Release Date Descending", value: "Release Date Descending" },
  { label: "Release date Ascending", value: "Release date Ascending" },
  { label: "Title (A-Z)", value: "Title (A-Z)" },
  { label: "Title (Z-A)", value: "Title (Z-A)" },
];

function Sort() {
  const [sortIsOpen, setSortIsOpen] = useState(true);

  return (
    <div className="sort-div border-color-shadow">
      <div
        className="name"
        onClick={() => {
          setSortIsOpen(!sortIsOpen);
        }}
      >
        <h2>Sort</h2>
        <img
          className={`${!sortIsOpen && "closed"}`}
          src={Chevron}
          alt="chevron image"
        />
      </div>
      {sortIsOpen && (
        <div className="more-info-div">
          <h3>Sort Results By</h3>
          <DropDown popularitySort={popularitySort}></DropDown>
        </div>
      )}
    </div>
  );
}

export default Sort;
