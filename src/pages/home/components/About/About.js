import React from 'react'
import './about.scss'
import manikinsArena from "../../../../assets/manikinsArena.png"
import textseparator from '../../../../assets/textseparator.svg'


const About = () => {
  return (
    <section className="section-about">
      <img src={manikinsArena} alt='Manikin' />
      <div className='content'>
        <h1>About <span>the game</span></h1>
        <img src={textseparator} className="text-separator" alt="hero" />
        <p>Manikins  is a Tactic game and NFT Relics collector built on the Immutable Blockchain, releasing on PC  in 2022.</p>
        <p>Play-to-earn in the arena and defeat other players around the world while you power up your skills using Relics.</p>
      </div>
    </section>
  )
}

export default About
