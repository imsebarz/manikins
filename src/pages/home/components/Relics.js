import React from "react";
import "./relics.scss";
import manikinSmoke from "../../../assets/maneki_smoke.png";

const Relics = () => {
  return (
    <section className="section-relics">
      <div className="main">
        <div className="copy">
          <div>
            <h1>Characters don't matter</h1>
            <p>Every person uses the same character: A maniki</p>
          </div>
          <div>
            <h1>Relics Matter the most</h1>
            <p>
              Every item is an NFT and it's called a Relic. you can use in the
              game to power up your character
            </p>
          </div>
        </div>
        <img src={manikinSmoke} alt="manikin with smoke" />
      </div>
      <button>See more Relics</button>
    </section>
  );
};

export default Relics;
