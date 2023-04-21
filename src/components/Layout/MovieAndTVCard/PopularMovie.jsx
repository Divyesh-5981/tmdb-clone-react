import React, { useState, useEffect } from "react";
import FilterMovie from "./FilterMovie";
import MoviesList from "./MoviesList";
import InfiniteScroll from "react-infinite-scroll-component";

const initialState = { moviesOrTVShowList: [], page: 1, isLoad: false };

function PopularMovie({ API }) {
  const [state, setState] = useState(initialState);

  const [sortIsOpen, setSortIsOpen] = useState(true);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [whereToWatchIsOpen, setWhereToWatchIsOpen] = useState(false);

  const fetchmoviesOrTVShowList = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setState((prevState) => {
        return prevState.page === 1
          ? { ...prevState, moviesOrTVShowList: [...data.results] }
          : {
              ...prevState,
              moviesOrTVShowList: [
                ...prevState.moviesOrTVShowList,
                ...data.results,
              ],
            };
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchmoviesOrTVShowList(`${API}&page=${state.page}`);
  }, [state.page]);

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={state?.moviesOrTVShowList?.length}
        next={
          state.isLoad &&
          (() => setState((prev) => ({ ...prev, page: prev.page + 1 })))
        }
        hasMore={true}
      >
        <div className="movies-div">
          <div className="title">
            <h2>Popular Movies</h2>
          </div>
          <div className="content-wrapper">
            <FilterMovie
              sortIsOpen={sortIsOpen}
              setSortIsOpen={setSortIsOpen}
            />
            <MoviesList
              state={state}
              setState={setState}
              isLoad={state.isLoad}
            />
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default PopularMovie;
