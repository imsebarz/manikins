import React from 'react'
import './features.scss'
import separatorTop from '../../../../assets/separatorTop.svg'
import starIcon from '../../../../assets/starIcon.png'
import moneyIcon from '../../../../assets/moneyIcon.png'
import tradeIcon from '../../../../assets/tradeIcon.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Features = () => {
  return (
    <>
      <LazyLoadImage threshold={800} src={separatorTop} className='separator ft' alt="" />
      <section className="features-section">
        <h1 className="title golden">Features</h1>
        <div className="content">
          <div className="card">
            <LazyLoadImage threshold={800} src={tradeIcon} alt="" />
            <div className="copy">
              <h1 className="golden">Tradeables on Marketplace</h1>
              <p>Sell or buy your NFT's</p>
            </div>
          </div>
          <div className="card">
            <LazyLoadImage threshold={800} src={moneyIcon} alt="" />
            <div className="copy">
              <h1 className="golden">Earn while playing</h1>
              <p>Earn crypto and have fun</p>
            </div>
          </div>
          <div className="card">
            <LazyLoadImage threshold={800} src={starIcon} alt="" />
            <div className="copy">
              <h1 className="golden">Limited editions</h1>
              <p>Limited number of items</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default Features
