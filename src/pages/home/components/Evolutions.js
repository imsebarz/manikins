import React from 'react'
import helmet from '../../../assets/helmet.png'
import './evolutions.scss'

const Evolutions = () => {
    return (
        <section className="section-evolutions">
            <h1>EVERY RELIC HAS<br /> <span>EVOLUTIONS</span></h1>
            <div className='content'>
                <div className='copy'>
                    <h3>Increase your power</h3>
                    <p>With every evolution the relic unlocks new features and powers</p>
                </div>
                <img src={helmet} alt='magic helmet with evolutions' />
            </div>
        </section >
    )
}

export default Evolutions