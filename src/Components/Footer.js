import React from "react";
import "./footer.scss";
import logo from "../assets/logo.png";
import litgLogo from "../assets/litgLogo.png";
import fryosLogo from "../assets/fryosLogo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import discord from "../assets/discord.png";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <img src={logo} alt="" className="logo" />
        <div className="social">
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
          <img src={discord} alt="" />
        </div>
        <h4>FAQ</h4>
      </div>
      <div className="copy">
        <p>Game development made with ❤️ from Colombia</p>
        <p>Manikins Arena &copy; 2022. All rigths reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
