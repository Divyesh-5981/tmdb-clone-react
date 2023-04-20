import React, { useState, useEffect } from "react";
import DropDown from "../UI/DropDown";
import Chevron from "../../../assets/images/chevron_right.svg";
import Movie from "../Section/Trending/Movie/Movie";

const POPULARMOVIEAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=700a119d738aa19bfa6867998fafed10";

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

const initialState = { popularMovies: [], page: 1, isLoad: false };

function PopularMovie() {
  const [state, setState] = useState(initialState);

  const [sortIsOpen, setSortIsOpen] = useState(true);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [whereToWatchIsOpen, setWhereToWatchIsOpen] = useState(false);

  const loadHandler = (e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
  };

  useEffect(() => {
    const fetchPopularMovies = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState((prevState) => ({
          ...prevState,
          popularMovies: data.results,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularMovies(`${POPULARMOVIEAPI}&page=${state.page}`);
  }, []);

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
          <div className="movies-list-div">
            {/* show movie card */}
            {state.popularMovies.map((movie) => {
              return (
                <Movie movie={movie} key={movie.id} addCard="true"></Movie>
              );
            })}
            <div className="load-more-div">
              <button className="load-btn" onClick={(e) => loadHandler(e)}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularMovie;
