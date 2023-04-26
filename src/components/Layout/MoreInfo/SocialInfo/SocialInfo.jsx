import React from "react";

function SocialInfo() {
  return (
    <div className="review-div">
      <div className="menu">
        <h3 className="title-heading">Social</h3>
        <h3 className="review-heading">
          Reviews <span>2</span>
        </h3>
      </div>
      <div className="content">
        <div className="review-container">
          <div className="card">
            <div className="grouped">
              <div className="avatar">
                <img
                  src="https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg?s=64"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="info">
                <div className="rating-wrapper">
                  <h3>A review by MSB</h3>
                  <div className="rounded-rating">
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-67a24f6d4324aa644c594653e762b1c0de2b3e1ce0852171cfa49cc2650de374.svg"
                      alt=""
                    />
                    <span>2.0</span>
                  </div>
                </div>
                <h5 className="h5">
                  Written by <span>MSB</span> on Apr 22, 2023
                </h5>
              </div>
            </div>
            <div className="teaser">
              <p className="spoiler-para">
                FULL SPOILER-FREE REVIEW @
                https://insessionfilm.com/movie-review-ghosted/
              </p>
              <p>
                "Ghosted is a tremendous catastrophe. When the only memorable
                moments of the entire film are the myriad cameos totally
                disconnected from the story itself, little else can be said
                about it. Visual effects, action, and script are a seriously
                shocking mess, to the point of affecting the performances and
                chemistry of a renowned cast. One of the worst editing works in
                recent years. One of the most prominent, frustrating wastes of
                talent in front of and behind the camera. Very far from the “so
                bad it’s good” status."
              </p>
            </div>
          </div>
        </div>
        {/* <p className="read-button">Read All Reviews</p> */}
      </div>
    </div>
  );
}

export default SocialInfo;
