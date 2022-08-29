import React from 'react'
import './footer.scss'
import logo from '../assets/manikins.png'
import fryos from "../assets/fryosFooter.png";
import litg from "../assets/litgFooter.png";
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import discord from '../assets/discord.svg'
import hiManikin from "../assets/hiManikin.webp";

import { LazyLoadImage } from 'react-lazy-load-image-component'

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div className="logo-container">
        <LazyLoadImage threshold={800} src={logo} alt="" className="logo" />
        </div>
        <div className="social">
          <a href="https://www.youtube.com/" target='_blank' rel="noreferrer">
          <LazyLoadImage threshold={800} src={youtube} alt="" />
          </a>
          <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
          <LazyLoadImage threshold={800} src={instagram} alt="" />
          </a>
          <a href="https://www.twitter.com/" target='_blank' rel="noreferrer">
          <LazyLoadImage threshold={800} src={twitter} alt="" />
          </a>
          <a href="https://www.discord.com/" target='_blank' rel="noreferrer">
          <LazyLoadImage threshold={800} src={discord} alt="" />
          </a>
        </div>
        <div className="companies">
          <LazyLoadImage threshold={800} src={fryos} alt="" />
          <LazyLoadImage threshold={800} src={litg} alt="" />
        </div>
      </div>
      <div className="copy">
        <p>Game development made with ❤️ from Colombia</p>
        <small>Manikins Arena &copy; 2022. All rigths reserved.</small>
      </div>
      <LazyLoadImage
        threshold={800}
        src={hiManikin}
        className="hi-manikin"
        alt="Hi gesture manikin"
      />
    </footer>
  )
}

export default Footer
