import React from "react";
import Movie from "../Section/Trending/Movie/Movie";

function MoviesList({ state, setState, isLoad }) {
  const loadHandler = (e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, isLoad: true }));
    setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
  };
  return (
    <div className="movies-list-div">
      {/* show movie card */}
      {state?.moviesOrTVShowList?.map((movie) => {
        return <Movie movie={movie} key={movie.id} addCard="true"></Movie>;
      })}
      <div className="load-more-div">
        <button
          className="load-btn"
          onClick={(e) => {
            loadHandler(e);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default MoviesList;
