import React from 'react'
import './costumes.scss'
import costume from '../../../../assets/costume.png'

const Costumes = () => {
  return (
    <section className="costumes-section">
      <h1 className="golden">
        YOU START LIKE EVERYONE ELSE <br />
        <span className='golden'>
        YOU END UP LIKE NO ONE ELSE
        </span>
      </h1>
      <div className="content">
        <div className="slider">
          <div className="lvl"></div>
          <div className="lvl"></div>
          <div className="lvl"></div>
          <div className="lvl"></div>
        </div>
        <img src={costume} alt="hola" />
      </div>
    </section>
  )
}

export default Costumes
