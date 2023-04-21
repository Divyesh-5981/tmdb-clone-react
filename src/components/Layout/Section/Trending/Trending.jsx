import React, { useState, useRef } from "react";
import Movie from "./Movie/Movie";
import { useGlobalContext } from "../../../../context";

function Trending() {
  const [trendingToday, setTrendingToday] = useState(true);
  const [trendingWeek, setTrendingWeek] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const scrollDiv = useRef();

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
      <div
        className={`trending-movies-container should-fade ${
          isScroll ? "is-not-fading" : "is-fading"
        }`}
      >
        <div
          ref={scrollDiv}
          className="trending-movie"
          onScroll={() => {
            const scrollPoint = scrollDiv.current.scrollLeft;
            if (scrollPoint >= 0 && scrollPoint <= 50) setIsScroll(false);
            else setIsScroll(true);
          }}
        >
          {trendingMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Trending;
