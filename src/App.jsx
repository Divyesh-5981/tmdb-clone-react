import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Section from "./components/Layout/Section/Section";
import PopularMovie from "./components/Layout/PopularMovie/PopularMovie";
import { useGlobalContext } from "./context";
import "./main.css";

function App() {
  const state = useGlobalContext();

  return (
    <>
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Section />}></Route>
        <Route path="/movie" element={<PopularMovie />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
