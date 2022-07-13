import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './carousel.scss'

const Carousel = ({ item1, item2, item3, item4 }) => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item1} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item2} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item3} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item1} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item2} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item2} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item2} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item2} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item2} alt="manikin moving" />
      </div>
      <div className="carousel-item">
        <LazyLoadImage threshold={800} src={item2} alt="manikin moving" />
      </div>
    </div>
  )
}

export default Carousel
