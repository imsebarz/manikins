import { LazyLoadImage } from "react-lazy-load-image-component";
// import LevelSeparator from "../../../../assets/test.png";
import textseparator from "../../../../assets/textseparator.svg";
import separatorDown from "../../../../assets/separatorDown.svg";

import "./evolutions.scss";
import { useState } from "react";
import Carousel from "../../../../Components/Carousel";
import Boots from "../../../../assets/boots.webp";
import Helmet from "../../../../assets/helmet.webp";
import Poporo from "../../../../assets/poporo.webp";
import Artefacto from "../../../../assets/artefacto.webp";
import Sword from "../../../../assets/sword.webp";
import Armor from "../../../../assets/armor.webp";
import { useEffect } from "react";
// import item3 from '../../../../assets/item3.png'
// import item4 from '../../../../assets/item4.png'
// import RomanArmor_LV2 from '../../../../assets/RomanArmor_LV2.webp';
// import RomanArmor_LV3 from '../../../../assets/RomanArmor_LV3.webp';
// import RomanArmor_LV4 from '../../../../assets/RomanArmor_LV4.webp';

const Evolutions = () => {
  const [level] = useState(1);
  const [relicName, setRelicName] = useState("armor");
  const [relic, setRelic] = useState();
  const [hover, setHover] = useState();

  let images = {
    armor: `/img/armor.webp`,
    helmet: `/img/helmet.webp`,
    boots: `/img/boots.webp`,
    poporo: `/img/poporo.webp`,
    sword: `/img/sword.webp`,
    artefacto: `/img/artefacto.webp`,
  };

  useEffect(() => {
    const relic = images[relicName];
    setRelic(relic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [relicName, level, hover]);

  return (
    <>
      <section className="section-evolutions">
        <h1 className="title">
          RELIQUIAS<span> DE BATALLA</span>
        </h1>
        <div className="content">
          <div className="copy">
            <h3>
              Combinaciones <span>ilimitadas</span>
            </h3>
            <LazyLoadImage
              threshold={800}
              src={textseparator}
              className="text-separator"
              alt="hero"
            />
            <p>
              Las reliquias se potencian actualizándolas, aumentando las
              estadísticas y desarrollando nuevas habilidades.
            </p>
            <p>
              Puedes construir tu equipo Manikin usando cualquier Battle Relic,
              no hay clases de personajes ni restricciones. Bienvenidos Magos
              Tanques y Ninja Sanadores
            </p>
            {/* <div className="levels">
              <ul className="levelsContainer">
                <li
                  className={`${level === 1 ? "selected" : ""}`}
                  onClick={() => setLevel(1)}
                >
                  <div className="imgLevel"></div>
                  <p>Level 1</p>
                </li>
                <li className="levelSeparator">
                  <LazyLoadImage threshold={800} src={LevelSeparator} alt="" />
                </li>
                <li
                  className={`${level === 2 ? "selected" : ""}`}
                  onClick={() => setLevel(2)}
                >
                  <div className="imgLevel"></div>
                  <p> Level 2</p>
                </li>
                <li className="levelSeparator">
                  <LazyLoadImage threshold={800} src={LevelSeparator} alt="" />
                </li>
                <li
                  className={`${level === 3 ? "selected" : ""}`}
                  onClick={() => setLevel(3)}
                >
                  <div className="imgLevel"></div>
                  <p>Level 3</p>
                </li>
                <li className="levelSeparator">
                  <LazyLoadImage threshold={800} src={LevelSeparator} alt="" />
                </li>
                <li
                  className={`${level === 4 ? "selected" : ""}`}
                  onClick={() => setLevel(4)}
                >
                  <div className="imgLevel"></div>
                  <p>Level 4</p>
                </li>
              </ul>
            </div> */}
          </div>
          <div
            className="relic-container"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="circle"></div>
            <div
              className={`relic-evolutions ev${level}`}
              style={{ backgroundImage: `url(${relic})` }}
              alt="Relic with evolutions"
            />
          </div>
        </div>
        <Carousel
          relics={[Armor, Boots, Helmet, Poporo, Artefacto, Sword]}
          setRelicName={setRelicName}
        ></Carousel>
      </section>
      <LazyLoadImage
        threshold={800}
        src={separatorDown}
        className="separator separator-roadmap"
        alt=""
      />
    </>
  );
};

export default Evolutions;
