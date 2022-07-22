import React from "react";
import "./roadmap.scss";
import hiManikin from "../../../../assets/hiManikin.png";
import stepSeparator from "../../../../assets/stepSeparator.png";
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
          <ul className="roadmapContainer">
            <li>
              <div className="step selected"></div>
              <p>Actualmente estamos en desarrollo - versión Alpha</p>
            </li>
            <li className="stepSeparator">
              <LazyLoadImage threshold={800} src={stepSeparator} alt="" />
            </li>
            <li>
              <div className="step"></div>
              <p> 10 de octubre 2022 
Lanzamiento del beta</p>
            </li>
            <li className="stepSeparator">
              <LazyLoadImage threshold={800} src={stepSeparator} alt="" />
            </li>
            <li>
              <div className="step"></div>
              <p>Tiempo de analisis de datos</p>
            </li>
            <li className="stepSeparator">
              <LazyLoadImage threshold={800} src={stepSeparator} alt="" />
            </li>
            <li>
              <div className="step"></div>
              <p>10 de abril 2023
              Lanzamiento a produccion</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
