import React from 'react'
// import hero from '../../../../assets/hero.webp'
import tipografia from '../../../../assets/tipografia.png'
import arrow from '../../../../assets/arrow.gif'
import './hero.scss'

const Hero = () => {
  return (
    <section className="section-hero">
      {/* <img className="hero-image" src={hero} alt="hero" /> */}
      <div className="gradient"></div>
      <div className="content">
        <img src={tipografia} className='title' alt="hero" />
        <form className='input-container'>
          <input type='email' required placeholder='Pre-sale Waitlist' ></input>
          <button className='goldenButton'>JOIN</button>
        </form>
        <img src={arrow} className="arrow" alt="hero" />
      </div>
    </section>
  )
}

export default Hero
