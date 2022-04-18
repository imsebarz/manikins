import React from 'react'
import trailer from '../../../assets/trailer.mov'
import './hero.scss'

const Hero = () => {
    return (
        <section className='section-hero'>
            <video className='video-back' autoPlay loop muted onClick={e => e.target.muted = !e.target.muted} >
                <source src={trailer} type="video/ogg" />
            </video>
            <h1 id='back-copy'>MANIKINS</h1>
            <div className='content'>
                <h1>Manikins <br /> arena</h1>
            </div>
        </section >
    )
}

export default Hero