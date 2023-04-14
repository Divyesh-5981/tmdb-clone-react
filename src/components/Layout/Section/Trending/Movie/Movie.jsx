import React from "react";

function dateFormater(date) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var day = date.getDate();
  // get month from 0 to 11
  var month = date.getMonth();
  // conver month digit to month name
  month = months[month];
  var year = date.getFullYear();

  // show date in two digits
  if (day < 10) {
    day = "0" + day;
  }

  // now we have day, month and year
  // arrange them in the format we want
  return month + " " + day + ", " + year;
}

function Movie({ movie }) {
  return (
    <div className="single-movie">
      <div className="movie-img-div">
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="movie"
        />
      </div>
      <div className="movie-content-div">
        <a href="#">{movie?.title ? movie.title : movie.name}</a>
        <p>
          {movie?.release_date
            ? dateFormater(new Date(movie.release_date))
            : dateFormater(new Date(movie.first_air_date))}
        </p>
      </div>
    </div>
  );
}

export default Movie;
