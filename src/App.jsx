import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Section from "./components/Layout/Section/Section";
import PopularMovie from "./components/Layout/MovieAndTVCard/PopularMovie";
import { useGlobalContext } from "./context";
import "./main.css";

const POPULARMOVIEAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=700a119d738aa19bfa6867998fafed10";
const NOWPLAYINGAPI =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=700a119d738aa19bfa6867998fafed10";

function App() {
  const state = useGlobalContext();

  return (
    <>
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Section />}></Route>
        <Route
          path="/movie"
          element={<PopularMovie API={POPULARMOVIEAPI} />}
        ></Route>
        <Route
          path="/movie/now-playing"
          element={<PopularMovie API={NOWPLAYINGAPI} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
