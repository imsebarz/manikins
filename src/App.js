import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Manikins Arena website under development
        </p>
        <p>
          By:
        </p>
        <a
          className="App-link"
          href="https://lifeisthegame.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Life Is The Game S.A.S
        </a>
        <a
          className="App-link"
          href="https://fryosstudios.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fryos Studios
        </a>
      </header>
    </div>
  );
}

export default App;
