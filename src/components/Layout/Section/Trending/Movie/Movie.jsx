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
        <CircularProgressBar movieVote={movie.vote_average} scale="false" />
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
