import React from 'react'
import particles from '../../../assets/particles.mp4'
import hero from '../../../assets/hero.png'
import './hero.scss'

const Hero = () => {
    return (
        <section className='section-hero'>
            <video className='video-back' autoPlay loop muted onClick={e => e.target.muted = !e.target.muted} >
                <source src={particles} type="video/ogg" />
            </video>
            <img className='hero-image' src={hero} alt='hero' />
            <div className='content'>
                <h1>Manikins <br /> arena</h1>
            </div>
        </section >
    )
}

export default Hero