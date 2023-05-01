import React, { useState, useEffect } from "react";

// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

function Genres() {
  const [genres, setGenres] = useState([]);
  const [selectedGenresId, setSelectedGenresId] = useState([]);

  const fetchGenres = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGenres(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, []);

  return (
    <div className="filter">
      <h3 className="genres-heading">Genres</h3>
      <ul className="genres-nav">
        {console.log("array is ", selectedGenresId)}
        {genres.map((genre) => {
          return (
            <>
              <li
                className={
                  selectedGenresId.includes(genre.id) ? "active-genre" : ""
                }
                key={genre.id}
                onClick={() => {
                  setSelectedGenresId((prevState) => [...prevState, genre.id]);
                }}
              >
                {genre.name}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Genres;
