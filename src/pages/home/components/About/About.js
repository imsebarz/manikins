import React from 'react'
import './about.scss'
import trailerCover from "../../../../assets/trailerCover.webp"
import textseparator from '../../../../assets/textseparator.svg'
import separatorTop from '../../../../assets/aboutSeparator.png'
import play from '../../../../assets/play.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'


const About = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <LazyLoadImage  threshold={800} src={separatorTop} className='separator about-separator' alt="" />
      <section className="section-about" id='about'>
        <div className="trailer">
          <LazyLoadImage threshold={800} src={trailerCover} alt='Manikin' />
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="fFZBn1fA6Z4" onClose={() => setOpen(false)} />
          <div onClick={() => setOpen(true)}>
            <LazyLoadImage threshold={800} src={play} className='play' alt="" />
          </div>
        </div>
        <div className='content'>
          <h1>About <span>the game</span></h1>
          <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
          <p>Manikins R&T is free to play PvP Tactics game, where players Manikins team clash into a battle for last standing character.</p>
          <p onClick={() => setOpen(true)} className='watch'>Watch the trailer!</p>
        </div>
      </section>
    </>
  )
}

export default About
