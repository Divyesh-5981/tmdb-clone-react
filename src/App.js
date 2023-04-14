import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Section from './components/Layout/Section/Section';
import { useGlobalContext } from './context'
import "./main.css"

function App() {

  const state = useGlobalContext();

  return (
    <>
      {console.log(state)}
      <Header className="header" />
      <Section></Section>
      {/* <Footer /> */}
    </>
  );
}

export default App;
