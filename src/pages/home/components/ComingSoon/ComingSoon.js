import React from 'react'
import './comingSoon.scss'
import separatorTop from '../../../../assets/separatorTop.svg'
import comingSoon from '../../../../assets/comingsoon.webp'
  import textseparator from '../../../../assets/textseparator.svg'
import {ReactComponent as DiscordIcon} from '../../../../assets/discordIcon.svg'
import {ReactComponent as Colon} from '../../../../assets/colon.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';



const ComingSoon = () => {
  return (
    <>
      <LazyLoadImage threshold={800} src={separatorTop} className='separator' alt="" />
      <section className="section-comingsoon">
        <div className="content">
          <h2 className="golden" >COMING SOON</h2>
          <h4>Preventa</h4>
          <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
          <div className="daystop">
            <h3 className='top'>140</h3>
            <span className='days'>Days</span>
          </div>
          <div className="clock-border-wrap">
          <div className='clock'>
            <h3 className='silver'>50</h3>
            <span>Hours  </span> <Colon></Colon><h3 className='silver'>10</h3><span>Mins </span><Colon></Colon>
            <h3 className='silver'>15</h3><span>Secs</span>
          </div>
          </div>
          <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
          <p>Be part of our new community</p>
          <button>Waitlist</button>
        </div>

        <LazyLoadImage effect="opacity" threshold={800} src={comingSoon} alt="" wrapperClassName='comingsoon-img' />

      </section>
    </>
  )
}

export default ComingSoon
