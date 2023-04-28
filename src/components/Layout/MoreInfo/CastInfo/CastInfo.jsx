import React, { useState, useEffect, useRef } from "react";
import CastCard from "./CastCard/CastCard";
import SocialInfo from "../SocialInfo/SocialInfo";
import RecommandedCard from "../Recommanded/RecommandedCard";
import dummyImage from "../../../../assets/images/recommendation_dummy_poster.svg";
import { selectPosterPath } from "../../../../Helpers/Helper";

// const API =
//   "https://api.themoviedb.org/3/movie/868759/recommendations?api_key=700a119d738aa19bfa6867998fafed10";

// https://api.themoviedb.org/3/tv/203504?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb

// https://api.themoviedb.org/3/movie/868759/keywords?api_key=700a119d738aa19bfa6867998fafed10

const initialState = {
  status: "",
  language: "",
  budget: "",
  revenue: "",
  originalName: "",
  network: "",
  type: "",
};

function CastInfo({ type, id, title }) {
  const [castInfo, setCastInfo] = useState([]);
  const [isScrollCast, setIsScrollCast] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [recommandationList, setRecommandationList] = useState([]);
  const [seasons, setSeasons] = useState({});
  const [movieDetails, setMovieDetails] = useState(initialState);
  const [keywords, setKeywords] = useState([]);

  const scrollDiv = useRef();
  const scroll = useRef();

  const fetchCastDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCastInfo([...data.cast]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetails((prevState) => {
        return {
          ...prevState,
          status: data.status,
          language: new Intl.DisplayNames(["en"], { type: "language" }).of(
            data.original_language
          ),
          budget: data.budget,
          revenue: data.revenue,
          originalName: data.original_name ? data.original_name : "",
          network: data?.networks ? data.networks[0].logo_path : "",
          type: data.type ? data.type : "",
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecommandationList = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Recommandation API", data);
      setRecommandationList([...data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSeasons = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Current Seasons", data);
      setSeasons(data.seasons[data.seasons.length - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchKeywords = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("keywords", data);
      setKeywords(type === "movie" ? [...data?.keywords] : [...data?.results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeasons(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, [type, id]);

  useEffect(() => {
    fetchRecommandationList(
      `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, [type, id]);

  useEffect(() => {
    fetchCastDetails(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, [type, id]);

  useEffect(() => {
    fetchMovieDetails(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb`
    );
  }, [type, id]);

  useEffect(() => {
    fetchKeywords(
      `https://api.themoviedb.org/3/${type}/${id}/keywords?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, [type, id]);

  return (
    <>
      {console.log("RecommandedList", recommandationList)}
      {console.log("Current Season", seasons)}
      {console.log("cast", castInfo)}
      {console.log("Keywords", keywords)}
      {console.log("Movie Details", movieDetails)}
      <div className="left-info-div">
        <div className="white-column-div">
          <section
            className={`cast-section should-fade ${
              isScrollCast ? "is-not-fading" : "is-fading"
            }`}
          >
            <h3>{type === "movie" ? "Top Billed Cast" : "Series Cast"}</h3>
            {castInfo.length > 0 ? (
              <>
                <div
                  className="cast-scroller-div"
                  ref={scroll}
                  onScroll={() => {
                    const scrollPoint = scroll.current.scrollLeft;
                    if (scrollPoint >= 0 && scrollPoint <= 50)
                      setIsScrollCast(false);
                    else setIsScrollCast(true);
                  }}
                >
                  {castInfo.slice(0, 9).map((cast) => {
                    return <CastCard cast={cast} />;
                  })}
                </div>
                <p>
                  <a href="#">Full Cast & Crew</a>
                </p>
              </>
            ) : (
              <p style={{ paddingTop: "10px" }}>
                We don't have any cast added to this Show. You can help by
                adding some!
              </p>
            )}
          </section>

          {/* current season section starts from here and iw would be display if type is tv*/}
          {type == "tv" && (
            <section className="current-season">
              <h3>Current Season</h3>
              <div className="season-card">
                <div className="flex">
                  <div
                    className={`season-poster ${
                      !selectPosterPath(seasons.poster_path) && "poster-flex"
                    }`}
                  >
                    <img
                      className={
                        !selectPosterPath(seasons.poster_path) && "addWidth"
                      }
                      src={
                        selectPosterPath(seasons.poster_path)
                          ? `https://www.themoviedb.org/t/p/w130_and_h195_bestv2/${seasons.poster_path}`
                          : dummyImage
                      }
                      alt="Current Season Image"
                    />
                  </div>
                  {seasons && (
                    <div className="season-content">
                      <h2>{seasons.name}</h2>
                      <h4>
                        {seasons.air_date?.slice(0, 4)} |{" "}
                        {seasons.episode_count} Episodes
                      </h4>
                      <p>{seasons.overview}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
          {/* current season section end from here */}

          {/* Social Info Section starts from here */}
          <section className="social-section">
            <SocialInfo type={type} id={id} title={title} />
          </section>
          {/* Social Info Section ends from here */}
          {/* <section className="media-section"></section> */}
          {/* Recommandation section starts from here */}
          <section className="recommandation-section">
            <h3>Recommendations</h3>
            {recommandationList.length > 0 ? (
              <>
                <div
                  className={`recommandation-container should-fade ${
                    isScroll ? "is-not-fading" : "is-fading"
                  }`}
                >
                  <div
                    className="scroller"
                    ref={scrollDiv}
                    onScroll={() => {
                      const scrollPoint = scrollDiv.current.scrollLeft;
                      if (scrollPoint >= 0 && scrollPoint <= 50)
                        setIsScroll(false);
                      else setIsScroll(true);
                    }}
                  >
                    {recommandationList.map((item) => {
                      return <RecommandedCard item={item} />;
                    })}
                  </div>
                </div>
              </>
            ) : (
              `We don't have enough data to suggest any movies based on ${title}. You can help by rating movies you've seen.`
            )}
          </section>
          {/* Recommandation section ends from here */}
        </div>
      </div>

      {/* Keywords section starts from here */}
      <div className="right-info-div">
        <section className="keyword-section">
          {console.log("yes tv keywords", keywords)}
          <div className="facts-column">
            {movieDetails.originalName != "" && (
              <p>
                <strong>Original Name</strong>
                {movieDetails.originalName}
              </p>
            )}
            <p>
              <strong>Status</strong>
              {movieDetails.status}
            </p>
            {/* network and types for the TV show */}
            {movieDetails.network != "" && (
              <p>
                <strong>Network</strong>
                <img
                  style={{ width: "104px" }}
                  src={`https://www.themoviedb.org/t/p/h30${movieDetails.network}`}
                  alt="Network Channel Name"
                />
              </p>
            )}
            {movieDetails.type != "" && (
              <p>
                <strong>Type</strong>
                {movieDetails.type}
              </p>
            )}
            {/* network and types for the TV show */}
            <p>
              <strong>Original Language</strong>
              {movieDetails.language}
            </p>
            {movieDetails.budget != undefined &&
              movieDetails.revenue != undefined && (
                <>
                  <p>
                    <strong>Budget</strong>
                    {movieDetails.budget != 0
                      ? "$" + movieDetails.budget + ".00"
                      : "-"}
                  </p>
                  <p style={{ margin: "0" }}>
                    <strong>Revenue</strong>
                    {movieDetails.revenue != 0
                      ? "$" + movieDetails.revenue + ".00"
                      : "-"}
                  </p>
                </>
              )}
          </div>
          <div className="keyword-column">
            <h4>Keywords</h4>
            <ul>
              {keywords.length > 0
                ? keywords.map((keyword) => (
                    <li>
                      <a>{keyword.name}</a>
                    </li>
                  ))
                : "No keywords have been added."}
            </ul>
          </div>
        </section>
      </div>
      {/* Keywords section ends from here*/}
    </>
  );
}

export default CastInfo;
