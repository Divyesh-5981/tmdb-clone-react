import React, { useState } from "react";
import Chevron from "../../../assets/images/chevron_right.svg";
import Availability from "./Availability";
import ReleaseDate from "./ReleaseDate";
import Genres from "./Genres";

function Filter() {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [showMe, setShowMe] = useState(0);

  return (
    <div className="filter-div border-color-shadow mt">
      <div className="name" onClick={() => setFilterIsOpen(!filterIsOpen)}>
        <h2>Filters</h2>
        <img
          src={Chevron}
          alt="chevron image"
          className={`${!filterIsOpen && "closed"}`}
        />
      </div>
      {filterIsOpen && (
        <>
          {/* Show ME Div starts from here */}
          <div className="filter">
            <h3>Show Me</h3>
            <label>
              <input
                type="radio"
                value="0"
                name="showme"
                id="everything"
                className="radio-input"
                onChange={(e) => {
                  setShowMe(Number(e.target.value));
                }}
                //   checked={`${isChecked === 0}` ? true : false}
                checked={showMe === 0 ? "checked" : ""}
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
                onChange={(e) => {
                  setShowMe(Number(e.target.value));
                }}
                //   checked={`${isChecked === 1}` ? true : false}
                checked={showMe === 1 ? "checked" : ""}
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
                onChange={(e) => {
                  setShowMe(Number(e.target.value));
                }}
                //   checked={`${isChecked === 2}` ? true : false}
                checked={showMe === 2 ? "checked" : ""}
              />
              <label htmlFor="seen" className="ml">
                Movies I Have Seen
              </label>
            </label>
          </div>
          {/* Show Me Div ends from here */}

          {/* Availabilities div starts from here */}
          <Availability />
          {/* Availabilities div ends from here */}

          {/* Release Date Section starts from here */}
          <ReleaseDate />
          {/* Release Date Section ends from here */}

          {/* Genres Section starts from here */}
          <Genres />
          {/* Genres Section ends from here */}
        </>
      )}
    </div>
  );
}

export default Filter;
