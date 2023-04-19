import React from "react";
import Chevron from "../../../assets/images/chevron_right.svg";
function PopularMovie() {
  return (
    <div className="container">
      <div className="movies-div">
        <div className="title">
          <h2>Popular Movies</h2>
        </div>
        <div className="content-wrapper">
          <div className="search-movies-div">
            <div className="sort-div border-color-shadow">
              <div className="name">
                <h2>Sort</h2>
                <img src={Chevron} alt="chevron image" />
              </div>
              <div className="more-info-div">
                <h3>Sort Results By</h3>
              </div>
            </div>
            <div className="filter-div border-color-shadow mt">
              <div className="name">
                <h2>Filters</h2>
                <img src={Chevron} alt="chevron image" />
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
          <div className="movies-list-div"></div>
        </div>
      </div>
    </div>
  );
}

export default PopularMovie;
