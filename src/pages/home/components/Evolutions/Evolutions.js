import React, { useState } from 'react'
import helmet from '../../../../assets/helmet.png'
import './evolutions.scss'

const Evolutions = () => {

    const [level, setLevel] = useState(1);

    const incrementLevel = () => {
        level <= 3 ? setLevel(level + 1) : setLevel(level);
    }
    
    const decrementLevel = () => {
        level > 1 ? setLevel(level - 1) : setLevel(level);
    }

    return (
        <section className="section-evolutions">
            <div className="title">
                <h2 className="golden">EVERY RELIC HAS</h2>
                <h1 className="golden">EVOLUTIONS</h1>
            </div>
            <div className='content'>
                <div className='copy'>
                    <h3>Increase your power</h3>
                    <p>With every evolution the relic unlocks new features
                        and Powers , you can use it in the game to power
                        up your character.</p>
                    <div className="stages">
                        <h3 className='golden'>STAGE</h3>
                        <button onClick={decrementLevel}>{"<"}</button>
                        <button onClick={incrementLevel}>{">"}</button>
                        <h5>Level {level}</h5>
                    </div>
                </div>
                <img src={helmet} style={{
                    background: ` radial-gradient(circle,
          rgba(255, 199, 88, ${ 0.2 + level*0.2}) 0%,
          rgba(255, 247, 227, 0) 70%)`}} alt='magic helmet with evolutions' />
            </div>
        </section >
    )
}

export default Evolutions
