import { LazyLoadImage } from "react-lazy-load-image-component";
import relicevolutions from "../../../../assets/relicevolutions.webp";
import separatorTop from "../../../../assets/separatorTop.svg";
// import { ReactComponent as LevelSpace } from "../../../../assets/levelSpace.svg";
// import { ReactComponent as Level|SpaceSelected } from "../../../../assets/levelSpaceSelected.svg";
import LevelSeparator from "../../../../assets/test.png";
import textseparator from "../../../../assets/textseparator.svg";
import "./evolutions.scss";
import { useState } from "react";
import Carousel from "../../../../Components/Carousel";
import item1 from '../../../../assets/item1.png'
import item2 from '../../../../assets/item2.png'
import item3 from '../../../../assets/item3.png'
import item4 from '../../../../assets/item4.png'

const Evolutions = () => {
  const [level, setLevel] = useState(1);

  return (
      <>
        <LazyLoadImage threshold={800} src={separatorTop} className='separator' alt="" />
      <section className="section-evolutions">
        <h1 className="title">
          EVERY RELIC HAS <span> EVOLUTIONS</span>
        </h1>
        <div className="content">
          <div className="copy">
            <h3>Increase your power</h3>
            <LazyLoadImage
              threshold={800}
              src={textseparator}
              className="text-separator"
              alt="hero"
            />
            <p>
              With every evolution the relic unlocks new features and Powers ,
              you can use it in the game to power up your character.
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
          <LazyLoadImage
            threshold={800}
            src={relicevolutions}
            alt="Relic with evolutions"
          />
              </div>
        <Carousel item1={item1} item2={item2} item3={item3} item4={item4}></Carousel>
              
      </section>
    </>
  );
};

export default Evolutions;
