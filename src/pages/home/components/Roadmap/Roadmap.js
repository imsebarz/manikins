import React from "react";
import "./roadmap.scss";
import hiManikin from "../../../../assets/roadmap.webp";


const Roadmap = () => {
  return (
    <section className="section-roadmap" id="roadmap">
      {/* <h1>
        <span className="golden">FEATURES</span>
      </h1> */}
      <div className="content-container">
        <div className="image-container">
          <img
            src={hiManikin}
            className="roadmap-manikin"
            alt="Hi gesture manikin"
          />
        </div>
        <div className="content">
          <h1>
            GAME <span className="golden">MECHANICS</span>
          </h1>
          <div className="roadmap">
            <ul className="roadmapContainer">
              <li>Command a team of 3 to 6 Manikins in battle</li>
              <li>
              Each Manikin can be equipped up to a maximum of five (5) Battle Reli
              </li>
              <li>
              Actions in turn:
                <ul className="sublist">
                  <li>Scroll of the Manikin</li>
                  <li>Attack with weapons</li>
                  <li>Using skills from Battle Relics</li>
                </ul>
              </li>
              <li>
                Play mode:
                <ul className="sublist">
                  <li>Campaign</li>
                  <li>PVP multiplayer (local or online)</li>
                </ul>
              </li>
              <li>It has 5 different combat scenarios</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
