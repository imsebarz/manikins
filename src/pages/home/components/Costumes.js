import React from 'react'
import './costumes.scss'
import costume from '../../../assets/costume.png'

const Costumes = () => {
  return (
    <section className="costumes-section">
      <h1 className="golden">
        You start like everyone else <br /> You end up like no one else
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
