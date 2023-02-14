import React, { useEffect } from 'react'
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

    useEffect(() => {
     isOpen && (document.body.style.overflow = 'hidden');
     !isOpen && (document.body.style.overflow = 'unset');
  }, [isOpen]);

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
          <p>Manikins RnT is a tactical video game, where players create a team of Manikins to take them into combat, whoever is
last alive wins</p>
          <p onClick={() => setOpen(true)} className='watch'>Watch game trailer</p>
        </div>
      </section>
    </>
  )
}

export default About
