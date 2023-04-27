import React, { useState, useEffect } from "react";
import { formatDate, getAvatarPath } from "../../../../Helpers/Helper";
import starIcon from "../../../../assets/images/star_rating_icon.svg";

// const API =
//   "https://api.themoviedb.org/3/movie/868759/reviews?api_key=700a119d738aa19bfa6867998fafed10";

function SocialInfo({ type, id, title }) {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async (url) => {
    try {
      const results = await fetch(url);
      const data = await results.json();
      setReviews(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchReviews(
      `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, [type, id]);

  return (
    <div className="review-div">
      <div className="menu">
        <h3 className="title-heading">Social</h3>
        <h3 className="review-heading">
          Reviews <span>{reviews.length}</span>
        </h3>
      </div>
      {reviews.length > 0 ? (
        <div className="content">
          <div className="review-container">
            <div className="card">
              <div className="grouped">
                <div className="avatar">
                  <img
                    src={`https://secure.gravatar.com/avatar${getAvatarPath(
                      reviews[0].author_details.avatar_path
                    )}?s=64`}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="info">
                  <div className="rating-wrapper">
                    <h3>
                      A review by{" "}
                      {reviews[0].author
                        ? reviews[0].author
                        : reviews[0]?.author_details.name}
                    </h3>
                    <div className="rounded-rating">
                      <img
                        src={starIcon}
                        alt="star rating icon"
                        style={{ filter: "invert(0)" }}
                      />
                      <span>{`${
                        reviews[0].author_details.rating
                          ? reviews[0].author_details.rating + ".0"
                          : 0
                      }`}</span>
                    </div>
                  </div>
                  <h5 className="h5">
                    Written by <span>{reviews[0].author}</span> on{" "}
                    {formatDate(
                      new Date(reviews[0].created_at.slice(0, 10)),
                      false
                    )}
                  </h5>
                </div>
              </div>
              <div className="teaser">
                <p className="spoiler-para">
                  {`${reviews[0].content.length > 600}`
                    ? `${reviews[0].content.substring(0, 600)}...`
                    : `${reviews[0].content}`}
                </p>
              </div>
            </div>
          </div>
          {/* <p className="read-button">Read All Reviews</p> */}
        </div>
      ) : (
        `We dont have any reviews for ${title}. Would you like to write one`
      )}
    </div>
  );
}

export default SocialInfo;
