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
        className="roadmap-img"
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
              <li>Actualmente estamos en desarrollo - <span>versión Alpha</span></li>
              <li><span>10 de octubre 2022</span> Lanzamiento del beta</li>
              <li><span>Tiempo de analisis de datos</span></li>
              <li><span>10 de abril 2023</span> Lanzamiento a produccion</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
