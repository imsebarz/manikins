import React from 'react'
import helmet from '../../../../assets/helmet.png'
import './evolutions.scss'

const Evolutions = () => {
    return (
        <section className="section-evolutions">
            <h1 className='golden'>EVERY RELIC HAS<br /> <span className='golden'>EVOLUTIONS</span></h1>
            <div className='content'>
                <div className='copy'>
                    <h3>Increase your power</h3>
                    <p>With every evolution the relic unlocks new features
                        and Powers , you can use it in the game to power
                        up your character.</p>
                    <div className="stages">
                        <h3 className='golden'>STAGE</h3>
                        <button>{"<"}</button>
                        <button>{">"}</button>
                    </div>
                </div>
                <img src={helmet} alt='magic helmet with evolutions' />
            </div>
        </section >
    )
}

export default Evolutions
