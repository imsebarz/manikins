import React from 'react'
import './footer.scss'
import logo from '../assets/logo.png'
// import litgLogo from "../assets/litgLogo.png";
// import fryosLogo from "../assets/fryosLogo.png";
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import discord from '../assets/discord.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <LazyLoadImage threshold={800} src={logo} alt="" className="logo" />
        <div className="social">
          <LazyLoadImage threshold={800} src={facebook} alt="" />
          <LazyLoadImage threshold={800} src={youtube} alt="" />
          <LazyLoadImage threshold={800} src={instagram} alt="" />
          <LazyLoadImage threshold={800} src={discord} alt="" />
        </div>
      </div>
      <div className="copy">
        <p>Game development made with ❤️ from Colombia</p>
        <p>Manikins Arena &copy; 2022. All rigths reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
