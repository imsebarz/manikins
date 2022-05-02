import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./App.scss";
import Arena from "./components/Arena";
import Cta from "./components/Cta.js";
import Copy from "./components/Copy";
import Hero from "./components/Hero";
import Relics from "./components/Relics";
import Evolutions from "./components/Evolutions";
import ComingSoon from "./components/ComingSoon";
import Carousel from "../../Components/Carousel";
import Costumes from "./components/Costumes";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <ComingSoon></ComingSoon>
        <Arena></Arena>
        <Copy></Copy>
        <Relics></Relics>
        <Evolutions></Evolutions>
        <Carousel></Carousel>
        <Costumes></Costumes>
        <Features></Features>
        <Cta></Cta>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
