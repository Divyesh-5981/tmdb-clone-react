import React from "react";
import { Link } from "react-router-dom";
import {
  formatDate,
  generateMovieImage,
  getURL,
} from "../../../../../Helpers/Helper";
import CircularProgressBar from "./CircularProgressBar/CircularProgressBar";

function Movie({ movie, addCard }) {
  return (
    <div className={`single-movie ${addCard ? "add-border" : ""}`}>
      <Link to={getURL(movie)}>
        <div className="movie-img-div">
          <img
            loading="lazy"
            className={`movie-img${addCard ? " add-height" : ""}`}
            src={generateMovieImage(movie, addCard)}
            alt="movie"
          />
        </div>
      </Link>
      <div className={`movie-content-div${addCard ? " remove-height" : ""}`}>
        <CircularProgressBar movieVote={movie.vote_average} />
        <Link to={getURL(movie)} className="hover-moviename">
          {movie?.title ? movie.title : movie.name}
        </Link>
        <p>
          {movie?.release_date
            ? formatDate(new Date(movie.release_date), false)
            : formatDate(new Date(movie.first_air_date), false)}
        </p>
      </div>
    </div>
  );
}

export default Movie;
/* `${
  movie?.poster_path
  ? "https://image.tmdb.org/t/p/original" + movie.poster_path
  : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
  ? "https://www.themoviedb.org/t/p/w220_and_h330_face" +
    movie.poster_path
  : ""
}` */
