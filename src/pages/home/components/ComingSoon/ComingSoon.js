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
          <h2>COMING SOON</h2>
          <h4>Preventa</h4>
          <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
          <h3 className='top'>
            140<span>Days </span>
          </h3>
          <h3 className='clock'>
            50<span>Hours  </span> <Colon></Colon>10<span>Mins </span><Colon></Colon>
            15<span>Secs</span>
          </h3>
          <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
          <p>Be part of our new community</p>
          <button><DiscordIcon></DiscordIcon>JOIN DISCORD</button>
        </div>

        <LazyLoadImage effect="opacity" threshold={800} src={comingSoon} alt="" className='comingsoon-img' />

      </section>
    </>
  )
}

export default ComingSoon
