import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './carousel.scss'

const Carousel = ({ relics, setRelicName}) => {

  const getArmorName = (armorPath) => {
    let armorFile = armorPath.split('/').slice(-1)[0];
    let armorName = armorFile.split('.').slice(0)[0];
    let armorNameWithoutLVL = armorName.split('_').slice(0)[0];
    return armorNameWithoutLVL.toLowerCase();
  }

  return (
    <div className="carousel">
      {relics.map(element => {
        return (
          // <div className="carousel-item" onClick={() => setRelicName(getArmorName(element))}>
          //   <LazyLoadImage threshold={800} src={element} alt="manikin moving" />
          // </div>)
          <div className="carousel-item" onClick={() => setRelicName(getArmorName(element))}>
            <LazyLoadImage threshold={800} src={element} alt="manikin moving" />
          </div>)
      })}
    </div>
  )
}

export default Carousel
