import React from 'react'
import './about.scss'
import manikinsArena from "../../../../assets/manikinsArena.png"
import textseparator from '../../../../assets/textseparator.svg'
import separatorTop from '../../../../assets/aboutSeparator.png'

import { LazyLoadImage } from 'react-lazy-load-image-component'


const About = () => {
  return (
    <>
      <LazyLoadImage threshold={800} src={separatorTop} className='separator about-separator' alt="" />
      <section className="section-about">
        <LazyLoadImage threshold={800} src={manikinsArena} alt='Manikin' />
        <div className='content'>
          <h1>About <span>the game</span></h1>
          <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
          <p>Manikins R&T is free to play PvP Tactics game, where players Manikins team clash into a battle for last standing character.</p>
          <p>Watch the trailer!</p>
        </div>
      </section>
    </>
  )
}

export default About
