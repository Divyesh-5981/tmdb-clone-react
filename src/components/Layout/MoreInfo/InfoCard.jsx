import React, { useEffect, useState } from "react";
import CircularProgressBar from "../Section/Trending/Movie/CircularProgressBar/CircularProgressBar";
import CastInfo from "./CastInfo/CastInfo";
import {
  formatDate,
  toHours,
  generateGenreName,
  findOriginCountry,
  getStreamingLogo,
  getStreamingChannelName,
} from "../../../Helpers/Helper";
import { useParams } from "react-router-dom";
import playIcon from "../../../assets/images/play_icon.svg";
import thumbnailIcon from "../../../assets/images/thumbnail_icon.svg";
import favouriteIcon from "../../../assets/images/favourite_icon.svg";
import bookmarkIcon from "../../../assets/images/bookmark_icon.svg";
import starIcon from "../../../assets/images/star_rating_icon.svg";

// const API =
//   "https://api.themoviedb.org/3/movie/{movie_id}?api_key=700a119d738aa19bfa6867998fafed10&language=en-US";

// const API =
//   "https://api.themoviedb.org/3/tv/{tv_id}?api_key=700a119d738aa19bfa6867998fafed10&language=en-US";

// const VIDEOAPI =
//   "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=700a119d738aa19bfa6867998fafed10&language=en-US";

// https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US

const initialState = {
  posterPath: "",
  title: "",
  releasedDate: "",
  backdrop: "",
  genres: [],
  runTime: "",
  country: "",
  tagLine: "",
  overView: "",
  voteAvg: "",
  videoKey: "",
  providers: {},
  providerChannelLogoPath: "",
  providerStreamingChannel: "",
};

function InfoCard() {
  const [cardInfo, setCardInfo] = useState(initialState);

  const { type, id } = useParams();

  const fetchInfo = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status_code !== 34) {
        setCardInfo((prevState) => {
          return {
            ...prevState,
            posterPath: data.poster_path,
            backdrop: data.backdrop_path,
            title: data.original_title ? data.original_title : data.name,
            year: data.release_date
              ? data.release_date?.substring(0, 4)
              : data?.last_air_date?.substring(0, 4),
            releasedDate: data.release_date
              ? data.release_date
              : data?.last_air_date,
            genres: data.genres,
            runTime: data.runtime
              ? toHours(data.runtime)
              : toHours(data.episode_run_time),
            country: findOriginCountry(data),
            tagLine: data?.tagline,
            overView: data?.overview,
            voteAvg: data?.vote_average,
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideo = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCardInfo((prev) => {
        return {
          ...prev,
          videoKey: data?.results[0] === null ? null : data?.results[0]?.key,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProviders = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCardInfo((prev) => {
        return {
          ...prev,
          providers: data?.results?.IN ? data.results.IN : null,
          providerChannelLogoPath: getStreamingLogo(data?.results?.IN),
          getStreamingChannelName: getStreamingChannelName(data?.results?.IN),
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=700a119d738aa19bfa6867998fafed10`
    );
    fetchVideo(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=700a119d738aa19bfa6867998fafed10`
    );
    fetchProviders(
      `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, [type, id]);

  return (
    <>
      {console.log(cardInfo)}
      {/* {console.log(cardInfo)}
      {console.log("providers is available", cardInfo.providers)}
      {console.log(
        "provider channel logo path",
        cardInfo.providerChannelLogoPath
      )} */}

      {/* header of moreinfo starts from here */}
      {/* <div className="info-nav">
        <nav>
          <ul className="info-ul">
            <li className="active">
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">Fandom</a>
            </li>
            <li>
              <a href="#">Share</a>
            </li>
          </ul>
        </nav>
      </div> */}
      {/* header of moreinfo ends from here*/}

      {/* poster image and info starts from here */}
      <div
        className="backdrop-div"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${cardInfo.backdrop})`,
        }}
      >
        <div className="more-info-poster-div">
          <div className="container mt-0">
            <div className="more-info-wrapper">
              <section className="poster-content">
                <div className="poster-wrapper">
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${cardInfo.posterPath}`}
                    alt="image"
                  />
                  {cardInfo.providers && (
                    <div className="ott-offer">
                      <div className="text-wrapper">
                        <div className="button">
                          <div className="provider">
                            {cardInfo.providerChannelLogoPath != "" ? (
                              <img
                                src={`https://image.tmdb.org/t/p/original${cardInfo.providerChannelLogoPath}`}
                                alt="provider channel"
                              />
                            ) : (
                              cardInfo.providerStreamingChannel
                            )}
                          </div>
                          <div className="text">
                            <h4>Now Streaming</h4>
                            <h3>Watch Now</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="content-wrappers">
                  <div className="header-content">
                    <div className="title-info">
                      <h2>
                        {cardInfo.title}
                        <span>{` (${cardInfo.year})`}</span>
                      </h2>
                      <div className="facts">
                        <span className="release">
                          {`${formatDate(
                            new Date(cardInfo.releasedDate),
                            true
                          )}(${cardInfo.country})`}
                        </span>
                        <span className="genres before">
                          {generateGenreName(cardInfo.genres)}
                        </span>
                        {cardInfo.runTime != "m" && (
                          <span className="runtime before">
                            {cardInfo.runTime}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="score-info">
                      <CircularProgressBar
                        movieVote={cardInfo.voteAvg}
                        scale="true"
                      />
                      <div className="user-score">
                        User <br /> Score
                      </div>
                      {/* buttons starts from here */}
                      <div className="add-to-list-btn action-btns">
                        <img src={thumbnailIcon} alt="thumbnail icon" />
                      </div>
                      <div className="fav-btn action-btns">
                        <img src={favouriteIcon} alt="favourite icon" />
                      </div>
                      <div className="bookmark-btn action-btns">
                        <img src={bookmarkIcon} alt="bookmark icon" />
                      </div>
                      <div className="star-btn action-btns">
                        <img src={starIcon} alt="star icon" />
                      </div>
                      {/* buttons ends from here */}
                      {cardInfo.videoKey && (
                        <div className="play-div">
                          <a
                            href={`https://www.youtube.com/watch?v=${cardInfo.videoKey}`}
                          >
                            <img src={playIcon} alt="" />
                            <span>Play Trailer</span>
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="overview-info">
                      {cardInfo.tagLine && (
                        <h3 className="tagline">{cardInfo.tagLine}</h3>
                      )}
                      <h3 className="overview">Overview</h3>
                      <p>{cardInfo.overView}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* poster image and info ends from here */}

      {/* Cast Section starts from here */}
      <div className="container remove-mt">
        <div className="div-content-wrapper">
          <CastInfo title={cardInfo.title} type={type} id={id} />
        </div>
      </div>
      {/* Cast Section ends from here */}
    </>
  );
}

export default InfoCard;
