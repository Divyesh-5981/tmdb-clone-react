import React, { useState, useEffect, useRef } from "react";
import CastCard from "./CastCard/CastCard";
import SocialInfo from "../SocialInfo/SocialInfo";
import RecommandedCard from "../Recommanded/RecommandedCard";

function CastInfo({ type, id }) {
  const [castInfo, setCastInfo] = useState([]);
  const [isScroll, setIsScroll] = useState(false);

  const scrollDiv = useRef();
  const scroll = useRef();

  const fetchCastDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCastInfo([...data.cast]);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCastDetails(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, []);

  return (
    <>
      <div className="left-info-div">
        <div className="white-column-div">
          <section
            className={`cast-section should-fade ${
              isScroll ? "is-not-fading" : "is-fading"
            }`}
          >
            <h3>{type === "movie" ? "Top Billed Cast" : "Series Cast"}</h3>
            <div
              className="cast-scroller-div"
              ref={scroll}
              onScroll={() => {
                const scrollPoint = scroll.current.scrollLeft;
                console.log("scroll is : ", scrollPoint);
                if (scrollPoint >= 0 && scrollPoint <= 50) setIsScroll(false);
                else setIsScroll(true);
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
          {/* Social Info Section starts from here */}
          <section className="social-section">
            <SocialInfo />
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
                <RecommandedCard />
                <RecommandedCard />
                <RecommandedCard />
                <RecommandedCard />
                <RecommandedCard />
                <RecommandedCard />
                <RecommandedCard />
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
