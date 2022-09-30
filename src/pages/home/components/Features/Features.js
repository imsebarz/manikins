import React from 'react'
import './features.scss'
import separatorTop from '../../../../assets/separatorTop.svg'
import limitedIcon from '../../../../assets/limited.webp'
import moneyIcon from '../../../../assets/money.webp'
import tradeIcon from '../../../../assets/trade.webp'
import textseparator from '../../../../assets/textseparator.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Feature from './Feature'

const Features = () => {
  return (
    <>
      <LazyLoadImage threshold={800} src={separatorTop} className='separator ft' alt="" />
      <section className="features-section">
        <h1 className="title golden">YOU WILL</h1>
        <p className='subtitle'>With every evolution the relic unlocks new features</p>
        <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="text separator manikins arena" />
        <div className="content">
          <Feature img={tradeIcon} title='Trade on marketplace' description='Sell your NFT to others' ></Feature>
          <Feature img={moneyIcon} title='Earn while playing' description='Earn crypto and have fun' ></Feature>
          <Feature img={limitedIcon} title='limited editions' description='Limited number of items' ></Feature>
        </div>
      </section>
    </>
  )

}

export default Features
