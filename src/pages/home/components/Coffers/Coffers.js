import React from 'react'
import './coffers.scss'
import coffer1 from '../../../../assets/Cofre_LVL1.webp'
import coffer2 from '../../../../assets/Cofre_LVL2.webp'
import coffer3 from '../../../../assets/Cofre_LVL3.webp'
import coffer4 from '../../../../assets/Cofre_LVL4.webp'
import textseparator from '../../../../assets/textseparator.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Coffer from './Coffer'


const Coffers = () => {
  return (
    <section className="section-coffers">
      <div className="content">
        <h1>Our <span className='golden'>Coffers</span></h1>
        <p>With every evolution the relic unlocks new features</p>
        <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="text separator manikins arena" />
        <div className="coffers">
         <Coffer img={coffer1} name='Basic' description="With every evolution the relic unlocks new features and Powers."></Coffer>
         <Coffer img={coffer2} name='Intermediate' description="With every evolution the relic unlocks new features and Powers."></Coffer>
         <Coffer img={coffer3} name='Advanced' description="With every evolution the relic unlocks new features and Powers."></Coffer>
         <Coffer img={coffer4} name='Pro' description="With every evolution the relic unlocks new features and Powers."></Coffer>
        </div>
        <button className='goldenButton'>Waitlist</button>
      </div>
    </section>
  )
}

export default Coffers
