import React from 'react'
import './coffers.scss'
import coffer from '../../../../assets/coffer.png'
import textseparator from '../../../../assets/textseparator.svg'
import pill from '../../../../assets/pill.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const Coffers = () => {
  return (
    <section className="section-coffers">
      <div className="content">
        <h1>Our <span className='golden'>Coffers</span></h1>
        <p>With every evolution the relic unlocks new features</p>
        <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="text separator manikins arena" />
        <div className="coffers">
          <div className="coffer">
            <LazyLoadImage threshold={800} src={coffer} className='coffer-img' alt="" />
            <h2>Basic</h2>
            <LazyLoadImage threshold={800} src={pill} className='pill' alt="" />
            <p>With every evolution the relic unlocks new features and Powers.</p>
            <button className='goldenButton'>View at Market</button>
          </div>
          <div className="coffer">
            <LazyLoadImage threshold={800} src={coffer} className='coffer-img' alt="" />
            <h2>Intermediate</h2>
            <LazyLoadImage threshold={800} src={pill} className='pill' alt="" />
            <p>With every evolution the relic unlocks new features and Powers.</p>
            <button className='goldenButton'>View at Market</button>
          </div>
          <div className="coffer">
            <LazyLoadImage threshold={800} src={coffer} className='coffer-img' alt="" />
            <h2>Advanced</h2>
            <LazyLoadImage threshold={800} src={pill} className='pill' alt="" />
            <p>With every evolution the relic unlocks new features and Powers.</p>
            <button className='goldenButton'>View at Market</button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Coffers
