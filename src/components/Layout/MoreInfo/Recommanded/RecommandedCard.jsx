import React from "react";
import { Link } from "react-router-dom";
import dateIcon from "../../../../assets/images/date_icon.svg";
import favIcon from "../../../../assets/images/favourite_icon.svg";
import watchListIcon from "../../../../assets/images/bookmark_icon.svg";
import starIcon from "../../../../assets/images/star_rating_icon.svg";
import {
  formatDate,
  selectPosterPath,
  getDate,
  checkDate,
} from "../../../../Helpers/Helper";
import dummyImg from "../../../../assets/images/recommendation_dummy_poster.svg";

function RecommandedCard({ item }) {
  return (
    <>
      {console.log("RecommandedMOvie Date", item)}
      <div className="mini-card">
        <div
          className={`image-content ${
            selectPosterPath(item.backdrop_path) === false && "border-div"
          }`}
        >
          <Link
            to={`/${item.media_type}/${item.id}`}
            className={!selectPosterPath(item.backdrop_path) && "dummy-poster"}
          >
            <img
              src={
                selectPosterPath(item.backdrop_path)
                  ? `https://www.themoviedb.org/t/p/w250_and_h141_face${item?.backdrop_path}`
                  : dummyImg
              }
              alt="movie poster"
            />
          </Link>
          <div className="meta">
            <div className="release-date">
              <img src={dateIcon} alt="date Icon" className="date-img" />
              <span>
                {checkDate(item) !== "false" &&
                  getDate(new Date(item.release_date || item.first_air_date))}
              </span>
              <div
                className={`action-img ${
                  item.release_date === "" ||
                  (item.first_air_date === "" && "ml")
                }`}
              >
                <img src={favIcon} alt="fav Icon" className="black-color" />
                <img
                  src={watchListIcon}
                  alt="Watch List Icon"
                  className="black-color"
                />
                <img
                  src={starIcon}
                  alt="star rating icon"
                  className="black-color"
                />
              </div>
            </div>
            <span></span>
          </div>
        </div>
        <div className="info-div-recommand">
          <Link className="name-href" to={`/${item.media_type}/${item.id}`}>
            <bdi title={item.title || item.original_name}>
              {item.title || item.original_name}
            </bdi>
          </Link>
          <span className="vote-average">
            {item.vote_average.toFixed(1) * 10}%
          </span>
        </div>
      </div>
    </>
  );
}

export default RecommandedCard;
