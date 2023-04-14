import React from "react";
import Movie from "./Movie/Movie";
import { useGlobalContext } from "../../../../context";

function Trending() {
  const state = useGlobalContext();
  const { trendingMovies } = state;

  return (
    <div className="trending-div">
      <div className="trending-title-div">
        <h2>Trending</h2>
        <div className="trending-selector">
          <h3 className="active-trending">
            <a href="#" className="active-link">
              Today
            </a>
          </h3>
          <h3>
            <a href="#">This Week</a>
          </h3>
        </div>
      </div>
      <div className="trending-movies-container">
        <div className="trending-movie">
          {trendingMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Trending;
