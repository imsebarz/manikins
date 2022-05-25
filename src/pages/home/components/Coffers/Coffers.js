import React from 'react'
import './coffers.scss'
import coffer from '../../../../assets/coffer.png'


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
          <div className="coffer">
            < img src={coffer} alt="" />
            <h2>Basic</h2>
          </div>
          <div className="coffer">
            < img src={coffer} alt="" />
            <h2>Intermediate</h2>
            
          </div>
          <div className="coffer">
            < img src={coffer} alt="" />
            <h2>Advanced</h2>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Coffers
