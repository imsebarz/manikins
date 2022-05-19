import React from 'react'
import particles from '../../../../assets/particles.mp4'
import hero from '../../../../assets/hero.png'
import tipografia from '../../../../assets/tipografia.png'
import arrow from '../../../../assets/arrow.png'
import './hero.scss'

const Hero = () => {
  return (
    <section className="section-hero">
      <video
        className="video-back"
        autoPlay
        loop
        muted
        onClick={(e) => (e.target.muted = !e.target.muted)}
      >
        <source src={particles} type="video/ogg" />
      </video>
      <img className="hero-image" src={hero} alt="hero" />
      <div className="content">
        <img src={tipografia} alt="hero" />
        <h3>Buy, improve and sell NFTs while you play with our new game.</h3>
        <button className="goldenButton">{"View NFT's"}</button>
        <img src={arrow} className="arrow" alt="hero" />
      </div>
    </section>
  )
}

export default Hero
