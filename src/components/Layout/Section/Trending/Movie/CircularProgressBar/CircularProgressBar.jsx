import { Circle } from "rc-progress";

import React from "react";

// calculate Movie Vote
const calcMovieVote = (vote) => {
  const voteAvg = Number(vote).toFixed(1);
  let percentage = voteAvg * 10;
  return (percentage = percentage === 0 ? "NR" : percentage);
};

// make strokeColor based on percentage
const makeStrokeColor = (percentage) => {
  if (percentage >= 70 && percentage <= 100) return "#21d07a";
  else if (percentage >= 40 && percentage <= 69) return "#d2d531";
  else return "#db2360";
};

function CircularProgressBar({ movieVote, scale }) {
  return (
    <div className={`circular-div ${scale === "true" && "scale-div"}`}>
      <Circle
        className="circular-progress"
        strokeColor={makeStrokeColor(calcMovieVote(movieVote))}
        strokeWidth={8}
        trailColor="#1d4028"
        trailWidth={8}
        percent={calcMovieVote(movieVote) !== "NR" && calcMovieVote(movieVote)}
      />
      <span className={`${scale === "true" && "large-span-font"}`}>
        {calcMovieVote(movieVote)}
        {calcMovieVote(movieVote) !== "NR" && (
          <sup className={`${scale === "true" && "large-sup-font"}`}>%</sup>
        )}
      </span>
    </div>
  );
}

export default CircularProgressBar;
