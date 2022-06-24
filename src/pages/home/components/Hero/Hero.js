import React from 'react'
import hero from '../../../../assets/hero.png'
import tipografia from '../../../../assets/tipografia.png'
import arrow from '../../../../assets/arrow.svg'
import './hero.scss'

const Hero = () => {
  return (
    <section className="section-hero">
      <img className="hero-image" src={hero} alt="hero" />
      <div className="gradient"></div>
      <div className="content">
        <img src={tipografia} className='title' alt="hero" />
        <img src={arrow} className="arrow" alt="hero" />
      </div>
    </section>
  )
}

export default Hero
