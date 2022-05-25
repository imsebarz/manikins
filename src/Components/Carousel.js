import React from 'react'
import './carousel.scss'

const Carousel = ({ item1, item2, item3, item4 }) => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src={item1} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <img src={item2} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <img src={item3} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <img src={item1} alt="manikin moving" />
      </div>
    </div>
  )
}

export default Carousel
