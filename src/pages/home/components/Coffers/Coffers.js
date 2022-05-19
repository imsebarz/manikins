import React from 'react'
import './coffers.scss'
import item from '../../../../assets/item.mp4'

const Coffers = () => {
  return (
    <section className="section-coffers">
      <div className="main">
        <div className="copy">
          <div>
            <h1 className="golden">Our Coffers</h1>
          </div>
        </div>
        <div className="videos">
          <video autoPlay loop muted>
            <source src={item} type="video/ogg" />
          </video>
          <video autoPlay loop muted>
            <source src={item} type="video/ogg" />
          </video>
          <video autoPlay loop muted>
            <source src={item} type="video/ogg" />
          </video>
          <video autoPlay loop muted>
            <source src={item} type="video/ogg" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Coffers
