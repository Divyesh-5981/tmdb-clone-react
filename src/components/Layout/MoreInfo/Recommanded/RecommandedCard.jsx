import React from "react";
import dateIcon from "../../../../assets/images/date_icon.svg";
import favIcon from "../../../../assets/images/favourite_icon.svg";
import watchListIcon from "../../../../assets/images/bookmark_icon.svg";
import starIcon from "../../../../assets/images/star_rating_icon.svg";

function RecommandedCard() {
  return (
    <>
      <div className="mini-card">
        <div className="image-content">
          <img
            src="https://www.themoviedb.org/t/p/w250_and_h141_face/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg"
            alt=""
          />
          <div className="meta">
            <div className="release-date">
              <img src={dateIcon} alt="date Icon" className="date-img" />
              <span>02/15/2023</span>
              <div className="action-img">
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
          <a className="name-href" href="#">
            <bdi title="Ant-Man and the Wasp: Quantumania">
              Ant-Man and the Wasp: Quantumania
            </bdi>
          </a>
          <span className="vote-average">65%</span>
        </div>
      </div>
    </>
  );
}

export default RecommandedCard;
