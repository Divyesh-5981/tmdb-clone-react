import React, { useEffect, useState } from "react";
import { formatDate } from "../../../Helpers/Helper";
import { useParams } from "react-router-dom";

// const API =
//   "https://api.themoviedb.org/3/movie/{movie_id}?api_key=700a119d738aa19bfa6867998fafed10&language=en-US";

// const API =
//   "https://api.themoviedb.org/3/tv/{tv_id}?api_key=700a119d738aa19bfa6867998fafed10&language=en-US";

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
};

// below function generate genre name based on movie or tv object
const generateGenreName = (genres) => {
  let genreName = "";

  genres.filter((genre) => {
    genreName = genreName + "," + genre.name;
  });

  return genreName.replace(",", "");
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
              ? data.release_date.substring(0, 4)
              : data?.last_air_date.substring(0, 4),
            releasedDate: data.release_date
              ? data.release_date
              : data?.last_air_date,
            genres: data.genres,
            runTime: data.runtime
              ? data.runtime + "m"
              : data.episode_run_time + "m",
            country: data?.production_companies
              ? data?.production_companies[0].origin_country
              : data?.origin_country[0],
            tagLine: data?.tagLine,
            overView: data?.overview,
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=700a119d738aa19bfa6867998fafed10&language=en-US`
    );
  }, []);

  return (
    <>
      {console.log(cardInfo)}
      {/* header of moreinfo starts from here */}
      <div className="info-nav">
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
      </div>
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
                </div>
                <div className="content-wrappers">
                  <div className="header-content">
                    <div className="title-info">
                      <h2>
                        {cardInfo.title}
                        <span>{`(${cardInfo.year})`}</span>
                      </h2>
                    </div>
                    <div className="score-info"></div>
                    <div className="overview-info"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* poster image and info ends from here */}
    </>
  );
}

export default InfoCard;