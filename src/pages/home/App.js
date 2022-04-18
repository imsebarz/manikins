import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./App.scss";
import Arena from "./components/Arena";
import Cta from "./components/Cta.js";
import Copy from "./components/Copy";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Relics from "./components/Relics";
import Evolutions from "./components/Evolutions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <Register></Register>
        <Arena></Arena>
        <Copy></Copy>
        <Relics></Relics>
        <Evolutions></Evolutions>
        <Cta></Cta>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
