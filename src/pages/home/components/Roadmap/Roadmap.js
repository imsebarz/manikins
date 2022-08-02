import React from "react";
import "./roadmap.scss";
import hiManikin from "../../../../assets/hiManikin.png";
import roadmap from "../../../../assets/roadmap.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Roadmap = () => {
  return (
    <section className="section-roadmap">
      <LazyLoadImage
        threshold={800}
        src={hiManikin}
        className="hi-manikin"
        alt="Hi gesture manikin"
      />
      <div className="content">
        <h1 >
          ROAD <span className="golden">MAP</span>
        </h1>
        <div className="roadmap">
                <LazyLoadImage
        threshold={800}
        src={roadmap}
        className="roadmap-img"
        alt="Hi gesture manikin"
      />
          <ul className="roadmapContainer">
              <li><span>Participacion Gamescom</span> - 24 de agosto 2022</li>
              <li><span>Closed PRE-Sale</span> 30 de septiembre 2022</li>
              <li><span>Lanzamiento de la beta</span>30 de noviembre 2022</li>
              <li><span>Season 1</span>Q2 - 2023</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
