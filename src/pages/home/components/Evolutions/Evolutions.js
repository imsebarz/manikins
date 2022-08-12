import { LazyLoadImage } from "react-lazy-load-image-component";
// import relicevolutions from "../../../../assets/relicevolutions.webp";
// import { ReactComponent as LevelSpace } from "../../../../assets/levelSpace.svg";
// import { ReactComponent as Level|SpaceSelected } from "../../../../assets/levelSpaceSelected.svg";
import LevelSeparator from "../../../../assets/test.png";
import textseparator from "../../../../assets/textseparator.svg";
import separatorDown from '../../../../assets/separatorDown.svg'

import "./evolutions.scss";
import { useState } from "react";
// import Carousel from "../../../../Components/Carousel";
// import item1 from '../../../../assets/item1.png'
// import item2 from '../../../../assets/item2.png'
// import item3 from '../../../../assets/item3.png'
// import item4 from '../../../../assets/item4.png'

const Evolutions = () => {
  const [level, setLevel] = useState(1);

  return (
      <>
      <section className="section-evolutions">
        <h1 className="title">
          BATTLE RELIC<span> UPGRADES</span>
        </h1>
        <div className="content">
          <div className="copy">
            <h3>Limitless build <span>combinations</span></h3>
            <LazyLoadImage
              threshold={800}
              src={textseparator}
              className="text-separator"
              alt="hero"
            />
            <p>
              Relics power up by upgrading them, increasing stats and developing new skills. 
            </p>
            <p>
               You can build your Manikin equipment using any Battle Relic, there are no character classes or restrictions. Welcome mage tanks and ninja healers. 
            </p>
            <div className="levels">
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
            </div>
          </div>
          <div className="relic-container">
          <div className="circle"></div>
          <div
            className={`relic-evolutions ev${level}`}
            alt="Relic with evolutions"
            />
            </div>
              </div>
        {/* <Carousel item1={item1} item2={item2} item3={item3} item4={item4}></Carousel> */}
              
      </section>
    <LazyLoadImage threshold={800} src={separatorDown} className='separator separator-roadmap' alt="" />

    </>
  );
};

export default Evolutions;
