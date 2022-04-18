import React from 'react'
import './arena.scss'
import bluemaniki from '../../../assets/bluemaniki.png'

const Arena = () => {
    return (
        <section className="section-arena">
            <img src={bluemaniki} />
            <div className='content'>
                <h1>Enter the arena</h1>
                <p>Manikins  is a Tactic game and NFT Relics collector built on the Immutable Blockchain, releasing on PC  in 2022.</p>
                <p>Play-to-earn in the arena and defeat other players around the world while you power up your skills using Relics.</p>
            </div>
        </section>
    )
}

export default Arena