import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import pill from '../../../../assets/pill.svg'

const Coffer = ({name, description, img}) => {
  return (
    <div className="coffer">
            <LazyLoadImage threshold={800} src={img} className='coffer-img' alt="" />
            <h2>{name}</h2>
            <LazyLoadImage threshold={800} src={pill} className='pill' alt="" />
          <p>{description}</p>
          </div>
  )
}

export default Coffer