import React from "react";
import "./roadmap.scss";
import hiManikin from "../../../../assets/roadmapManikin.webp";
import roadmap from "../../../../assets/roadmap.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Roadmap = () => {
  return (
    <section className="section-roadmap" id='roadmap' >
      <h1 >ROAD <span className="golden">MAP</span></h1>
      <div className="content-container">
      <div className="image-container">
      <img
        src={hiManikin}
        className="roadmap-manikin"
        alt="Hi gesture manikin"
      />
      </div>
      <div className="content">
        <div className="roadmap">
                <LazyLoadImage
        threshold={800}
        src={roadmap}
        className="roadmap-img"
        alt="roadmap icons"
      />
          <ul className="roadmapContainer">
              <li><span>Gamescom</span> - August 2022.</li>
              <li><span>Alpha</span> - December 2022.</li>
              <li><span>Open Beta</span> - Q2 2023.</li>
              <li><span>Season 1</span> -  Q4 2023.</li>
          </ul>
        </div>
        </div>
      </div>
        
    </section>
  );
};

export default Roadmap;
