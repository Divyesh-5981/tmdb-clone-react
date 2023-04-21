import React, { useState, useRef } from "react";
import Movie from "../Trending/Movie/Movie";
import { useGlobalContext } from "../../../../context";

function Popular() {
  const [popularOnTV, setPopularOnTV] = useState(true);
  const [popularOnTheater, setPopularOnTheater] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const scrollDiv = useRef();

  const { popularMovies, getPopularByOnTv, getPopularByTheater } =
    useGlobalContext();

  return (
    <div className="popular-div">
      <div className="popular-title-div">
        <h2>What's Popular</h2>
        <div className="popular-selector">
          <h3 className={`${popularOnTV && "active-popular "}`}>
            <a
              href="#"
              className={`${popularOnTV && "active-link"}`}
              onClick={(e) => {
                e.preventDefault();
                setPopularOnTV(true);
                setPopularOnTheater(false);
                getPopularByOnTv();
              }}
            >
              On TV
            </a>
          </h3>
          <h3 className={`${popularOnTheater && "active-popular "}`}>
            <a
              className={`${popularOnTheater && "active-link"}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPopularOnTV(false);
                setPopularOnTheater(true);
                getPopularByTheater();
              }}
            >
              In Theaters
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
          {popularMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Popular;
