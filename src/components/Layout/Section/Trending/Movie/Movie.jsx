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
  console.log(movie.poster_path);
  return (
    <div className="single-movie">
      <div className="movie-img-div">
        <img
          loading="lazy"
          className="movie-img"
          // src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          src={`${
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original" + movie.poster_path
              : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
          }`}
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