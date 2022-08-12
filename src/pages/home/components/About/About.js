import React from 'react'
import './about.scss'
import trailerCover from "../../../../assets/trailerCover.webp"
import textseparator from '../../../../assets/textseparator.svg'
import separatorTop from '../../../../assets/aboutSeparator.png'
import play from '../../../../assets/play.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component'


const About = () => {
  return (
    <>
      <LazyLoadImage threshold={800} src={separatorTop} className='separator about-separator' alt="" />
      <section className="section-about">
        <div className="trailer">
          <LazyLoadImage threshold={800} src={trailerCover} alt='Manikin' />
          <a href="https://www.youtube.com/watch?v=BKx7sFSzD7c/" target='_blank' rel="noreferrer">
            <LazyLoadImage threshold={800} src={play} className='play' alt="" />
          </a>
        </div>
        <div className='content'>
          <h1>About <span>the game</span></h1>
          <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
          <p>Manikins R&T is free to play PvP Tactics game, where players Manikins team clash into a battle for last standing character.</p>
          <a href="https://www.youtube.com/watch?v=BKx7sFSzD7c/" target='_blank' rel="noreferrer">
          <p>Watch the trailer!</p>
          </a>
        </div>
      </section>
    </>
  )
}

export default About
