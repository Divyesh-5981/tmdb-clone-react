import React from "react";
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

function FilterMovie({ sortIsOpen, setSortIsOpen }) {
  return (
    <div className="search-movies-div">
      <div className="sort-div border-color-shadow">
        <div className="name">
          <h2>Sort</h2>
          <img
            className={`${!sortIsOpen && "closed"}`}
            src={Chevron}
            alt="chevron image"
            onClick={() => {
              setSortIsOpen(!sortIsOpen);
            }}
          />
        </div>
        {sortIsOpen && (
          <div className="more-info-div">
            <h3>Sort Results By</h3>
            <DropDown popularitySort={popularitySort}></DropDown>
          </div>
        )}
      </div>
      <div className="filter-div border-color-shadow mt">
        <div className="name">
          <h2>Filters</h2>
          <img src={Chevron} alt="chevron image" />
        </div>
        <div className="filter">
          <h3>Show Me</h3>
          <label>
            <input
              type="radio"
              value="0"
              name="showme"
              id="everything"
              className="radio-input"
              checked
            />
            <label htmlFor="everything" className="ml">
              Everything
            </label>
          </label>
          <label>
            <input
              type="radio"
              value="1"
              name="showme"
              id="not_seen"
              className="radio-input"
            />
            <label htmlFor="not_seen" className="ml">
              Movies I Haven't Seen
            </label>
          </label>
          <label>
            <input
              type="radio"
              value="2"
              name="showme"
              id="seen"
              className="radio-input"
            />
            <label htmlFor="seen" className="ml">
              Movies I Have Seen
            </label>
          </label>
        </div>
      </div>
      <div className="where-to-watch-div border-color-shadow mt">
        <div className="name">
          <h2>Where To Watch</h2>
          <img src={Chevron} alt="chevron image" />
        </div>
      </div>
      <div className="search-div"></div>
    </div>
  );
}

export default FilterMovie;
