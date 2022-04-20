import React from 'react'
import evolutions from '../../../assets/evolutions.png'
import './evolutions.scss'

const Evolutions = () => {
    return (
        <section className="section-evolutions">
            <div className='content'>
                <h1>Every Relic has evolutions</h1>
                <p>With every evolution the relic unlocks new features and powers</p>
            </div>
            <img src={evolutions} alt='magic book with evolutions' />
            <div className='characteristics'>
                <div>
                    <p>🟢</p>
                    <p>TRADEABLE ON MARKETPLACE</p>
                </div>
                <div>
                    <p>🟢</p>
                    <p>EARN WHILE PLAYING</p>
                </div>
                <div>
                    <p>🟢</p>
                    <p>LIMITED EDITIONS</p>
                </div>
            </div>
        </section>
    )
}

export default Evolutions