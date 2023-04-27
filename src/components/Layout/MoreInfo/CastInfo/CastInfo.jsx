import React, { useState, useEffect, useRef } from "react";
import CastCard from "./CastCard/CastCard";
import SocialInfo from "../SocialInfo/SocialInfo";
import RecommandedCard from "../Recommanded/RecommandedCard";
import dummyImage from "../../../../assets/images/dummy_image.svg";
import { selectPosterPath } from "../../../../Helpers/Helper";
// const API =
//   "https://api.themoviedb.org/3/movie/868759/recommendations?api_key=700a119d738aa19bfa6867998fafed10";

// https://api.themoviedb.org/3/tv/203504?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb

function CastInfo({ type, id, title }) {
  const [castInfo, setCastInfo] = useState([]);
  const [isScrollCast, setIsScrollCast] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [recommandationList, setRecommandationList] = useState([]);
  const [seasons, setSeasons] = useState({});

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

  return (
    <>
      {console.log("RecommandedList", recommandationList)}
      {console.log("Current Season", seasons)}
      <div className="left-info-div">
        <div className="white-column-div">
          <section
            className={`cast-section should-fade ${
              isScrollCast ? "is-not-fading" : "is-fading"
            }`}
          >
            <h3>{type === "movie" ? "Top Billed Cast" : "Series Cast"}</h3>
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
          </section>

          {/* current season section starts from here and iw would be display if type is tv*/}
          {type == "tv" && (
            <section className="current-season">
              <h3>Current Season</h3>
              <div className="season-card">
                <div className="flex">
                  <div className="season-poster">
                    <img
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
                  if (scrollPoint >= 0 && scrollPoint <= 50) setIsScroll(false);
                  else setIsScroll(true);
                }}
              >
                {recommandationList.map((item) => {
                  return <RecommandedCard item={item} />;
                })}
              </div>
            </div>
          </section>
          {/* Recommandation section ends from here */}
        </div>
      </div>
      <div className="right-info-div"></div>
    </>
  );
}

export default CastInfo;
