import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Feature = ({title, description, img}) => {
  return (
    <div className="card">
            <LazyLoadImage threshold={800} src={img} alt="" />
            <div className="copy">
              <h1 className="title">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
  )
}

export default Feature