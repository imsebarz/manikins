import React from 'react'
// import hero from '../../../../assets/hero.webp'
import bruma from '../../../../assets/banner/BRUMA.png'
import cielo from '../../../../assets/banner/CIELO.png'
import plataforma from '../../../../assets/banner/PLATAFORMA.png'
import montaña1 from '../../../../assets/banner/MONTAÑA1.png'
import montaña2 from '../../../../assets/banner/MONTAÑA2.png'
import personaje1 from '../../../../assets/banner/PERSONAJE1.png'
import personaje2 from '../../../../assets/banner/PERSONAJE2.png'
import tipografia from '../../../../assets/tipografia.png'
import arrow from '../../../../assets/arrow.gif'
import './hero.scss'
import Layer from './Layer'
import { useMousePosition } from './useMousePosition'





const Hero = () => {

  const position = useMousePosition();

  return (
    <section className="section-hero">
      <div className="hero-image">
        <Layer src={cielo} translateX={position.x} translateY={position.y} defer={3}></Layer>
        <Layer src={montaña1} translateX={position.x} translateY={position.y} defer={-5}></Layer>
        <Layer src={bruma} translateX={position.x} translateY={position.y} defer={2}></Layer>
        <Layer src={montaña2} translateX={position.x} translateY={position.y} defer={1}></Layer>
        <Layer src={plataforma} translateX={position.x} translateY={position.y} defer={-6}></Layer>
        <Layer src={personaje1} id='personaje1' translateX={position.x} translateY={position.y} defer={11}></Layer>
        <Layer src={personaje2} id='personaje2' translateX={position.x} translateY={position.y} defer={-2}></Layer>
      </div>
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
