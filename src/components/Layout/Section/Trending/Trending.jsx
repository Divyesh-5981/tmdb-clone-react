import React, { useState } from "react";
import Movie from "./Movie/Movie";
import { useGlobalContext } from "../../../../context";

function Trending() {
  const [trendingToday, setTrendingToday] = useState(true);
  const [trendingWeek, setTrendingWeek] = useState(false);

  const { trendingMovies, getTrendingMoviesByWeek, getTrendingMoviesByToday } =
    useGlobalContext();

  return (
    <div className="trending-div">
      <div className="trending-title-div">
        <h2>Trending</h2>
        <div className="trending-selector">
          <h3 className={`${trendingToday && "active-trending "}`}>
            <a
              href="#"
              className={`${trendingToday && "active-link"}`}
              onClick={(e) => {
                e.preventDefault();
                setTrendingToday(true);
                setTrendingWeek(false);
                getTrendingMoviesByToday();
              }}
            >
              Today
            </a>
          </h3>
          <h3 className={`${trendingWeek && "active-trending "}`}>
            <a
              className={`${trendingWeek && "active-link"}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setTrendingWeek(true);
                setTrendingToday(false);
                getTrendingMoviesByWeek();
              }}
            >
              This Week
            </a>
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
