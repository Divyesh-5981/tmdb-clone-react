import React from "react";
import dummyImage from "../../../../../assets/images/dummy_image.svg";

function CastCard({ cast }) {
  const castImage =
    cast.profile_path === null
      ? dummyImage
      : `https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`;
  return (
    <>
      <div className="single-cast-card">
        <div className="cast-img-div">
          <img src={castImage} alt="cast Image" />
        </div>
        <p className="cast-original-name">{cast.original_name}</p>
        <p className="cast-character-name">{cast.character}</p>
      </div>
    </>
  );
}

export default CastCard;
