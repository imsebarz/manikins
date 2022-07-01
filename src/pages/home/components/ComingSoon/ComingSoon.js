import React from 'react'
import './comingSoon.scss'
import separatorTop from '../../../../assets/separatorTop.svg'
import comingSoon from '../../../../assets/comingsoon.webp'
  import textseparator from '../../../../assets/textseparator.svg'
import {ReactComponent as DiscordIcon} from '../../../../assets/discordIcon.svg'
import {ReactComponent as Colon} from '../../../../assets/colon.svg'



const ComingSoon = () => {
  return (
    <>
      <img src={separatorTop} className='separator' alt="" />
      <section className="section-comingsoon">
        <div className="content">
          <h2>COMING SOON</h2>
          <h4>Preventa</h4>
          <img src={textseparator} className="text-separator" alt="hero" />
          <h3 className='top'>
            140<span>Days </span>
          </h3>
          <h3 className='clock'>
            50<span>Hours  </span> <Colon></Colon>10<span>Mins </span><Colon></Colon>
            15<span>Secs</span>
          </h3>
          <img src={textseparator} className="text-separator" alt="hero" />
          <p>Be part of our new community</p>
          <button><DiscordIcon></DiscordIcon>JOIN DISCORD</button>
        </div>
        <img src={comingSoon} alt="" className='comingsoon-img' />

      </section>
    </>
  )
}

export default ComingSoon
