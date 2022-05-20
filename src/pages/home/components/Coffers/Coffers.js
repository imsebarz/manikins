import React from 'react'
import './coffers.scss'
import item from '../../../../assets/item.gif'

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
           <img src={item} alt="" />
           <img src={item} alt="" />
           <img src={item} alt="" />
           <img src={item} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Coffers
