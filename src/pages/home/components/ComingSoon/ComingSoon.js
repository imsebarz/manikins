import React from 'react'
import './comingSoon.scss'
import floatingItems from '../../../../assets/floatingItems.png'

const ComingSoon = () => {
  return (
    <section className="section-comingsoon">
      <div className="content">
        <h3>NFT's presale</h3>
        <h1 className="golden">COMING SOON</h1>
        <h3>
          140<span>days </span> 50<span>hrs </span> 30<span>mins </span>
          00<span>secs</span>
        </h3>
        <p>Be part of our new community!</p>
        <button>Join Discord!</button>
        <img src={floatingItems} className='floating-items' alt="Floating items" />
      </div>
    </section>
  )
}

export default ComingSoon
