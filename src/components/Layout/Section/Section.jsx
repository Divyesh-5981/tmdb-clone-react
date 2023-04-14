import React from "react";
import Trending from "./Trending/Trending";

function Section() {
  return (
    <div className="container">
      <section>
        <div className="hero-div">
          <div className="title-div">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className="search-div">
            <form action="#">
              <input
                className="search-input"
                type="text"
                placeholder="Search for a movie, tv show, person......"
              />
              <input className="submit-input" type="submit" value="Search" />
            </form>
          </div>
        </div>
        <Trending></Trending>
      </section>
    </div>
  );
}

export default Section;
