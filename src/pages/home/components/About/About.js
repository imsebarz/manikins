import React from 'react'
import './about.scss'
import manikinsArena from "../../../../assets/manikinsArena.png"

const About = () => {
  return (
    <section className="section-about">
      <div className='content'>
        <h1 className='golden'>ABOUT THE GAME</h1>
        <p>Manikins  is a Tactic game and NFT Relics collector built on the Immutable Blockchain, releasing on PC  in 2022.</p>
        <p>Play-to-earn in the arena and defeat other players around the world while you power up your skills using Relics.</p>
      </div>
      <img src={manikinsArena} alt='Manikin' />
    </section>
  )
}

export default About
