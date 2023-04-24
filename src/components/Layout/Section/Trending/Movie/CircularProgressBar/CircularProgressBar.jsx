import { Circle } from "rc-progress";

import React from "react";

// calculate Movie Vote
const calcMovieVote = (vote) => {
  const voteAvg = vote.toFixed(1);
  let percentage = voteAvg * 10;
  return (percentage = percentage === 0 ? "NR" : percentage);
};

// make strokeColor based on percentage
const makeStrokeColor = (percentage) => {
  if (percentage >= 70 && percentage <= 100) return "#21d07a";
  else if (percentage >= 40 && percentage <= 69) return "#d2d531";
  else return "#db2360";
};

function CircularProgressBar({ movieVote }) {
  return (
    <div className="circular-div">
      <Circle
        className="circular-progress"
        strokeColor={makeStrokeColor(calcMovieVote(movieVote))}
        strokeWidth={8}
        trailColor="#1d4028"
        trailWidth={8}
        percent={calcMovieVote(movieVote) !== "NR" && calcMovieVote(movieVote)}
      />
      <span>
        {calcMovieVote(movieVote)}
        {calcMovieVote(movieVote) !== "NR" && <sup>%</sup>}
      </span>
    </div>
  );
}

export default CircularProgressBar;
