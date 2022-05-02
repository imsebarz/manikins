import React from 'react'
import './cta.scss'

const Cta = () => {
    return (
        <section className="section-cta">
            <h1>REGISTER NOW!</h1>
            <div className='cta-input'>
                <p>
                    Register now and be the first to know about manikins beta, relics sales, events and more!
                </p>
                <input type='text' placeholder='Enter your email'></input>
            </div>
        </section>
    )
}

export default Cta