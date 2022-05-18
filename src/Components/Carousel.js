import React from 'react'
import './carousel.scss'
import manikin1 from '../assets/manikin1.png'
import manikin2 from '../assets/manikin2.png'
import manikin3 from '../assets/manikin3.png'

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src={manikin1} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <img src={manikin2} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <img src={manikin3} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <img src={manikin1} alt="manikin moving" />
      </div>
    </div>
  )
}

export default Carousel
