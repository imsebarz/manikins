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
            MECANICAS <span className="golden">DE JUEGO</span>
          </h1>
          <div className="roadmap">
            <ul className="roadmapContainer">
              <li>Comanda a un equipo de 3 a 6 Manikins en batalla</li>
              <li>
                Cada Manikin puede ser equipado hasta un máximo de cinco (5)
                Reliquias de Batalla
              </li>
              <li>
                Acciones en el turno:
                <ul className="sublist">
                  <li>Desplazamiento del Manikin</li>
                  <li>Ataque con armas</li>
                  <li>Uso de habilidades de las Reliquias de Batalla</li>
                </ul>
              </li>
              <li>Juega en modo multijugador local u online</li>
              <li>Cuenta con 5 diferentes escenarios de combate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
