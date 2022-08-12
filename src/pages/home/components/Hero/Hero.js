import React, { useState } from 'react'
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
import { useUserDispatch } from '../../../../context/user/State'
import { joinWaitList } from '../../../../context/user/Actions'


const Hero = () => {

  const [mail, setMail] = useState('')
  const userDispatch = useUserDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    joinWaitList(userDispatch, mail)
    setMail('')
  }

  const position = useMousePosition();

  return (
    <section className="section-hero">
      <div className="hero-image">
        <Layer src={cielo} translateX={position.x} translateY={position.y} defer={-10}></Layer>
        <Layer src={montaña1} translateX={position.x} translateY={position.y} defer={-8}></Layer>
        <Layer src={bruma} translateX={position.x} translateY={position.y} defer={6}></Layer>
        <Layer src={montaña2} translateX={position.x} translateY={position.y} defer={-3}></Layer>
        <Layer src={plataforma} translateX={position.x} translateY={position.y} defer={3}></Layer>
        <Layer src={personaje2} id='personaje2' translateX={position.x} translateY={position.y} defer={0}></Layer>
        <Layer src={personaje1} id='personaje1' translateX={position.x} translateY={position.y} defer={0}></Layer>
      </div>
      <div className="gradient"></div>
      <div className="content">
        <img src={tipografia} className='title' alt="hero" />
        <form className='input-container' onSubmit={(e) => handleSubmit(e)}>
          <input type='email' required placeholder='Pre-sale Waitlist' value={mail} onChange={(e) => setMail(e.target.value)}></input>
          <button className='goldenButton'>JOIN</button>
        </form>
        <img src={arrow} className="arrow" alt="hero" />
      </div>
    </section>
  )
}

export default Hero
