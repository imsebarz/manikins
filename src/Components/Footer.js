import React from "react";
import "./footer.scss";
import logo from "../assets/logo.png";
import litgLogo from "../assets/litgLogo.png";
import fryosLogo from "../assets/fryosLogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <img src={logo} alt="" className="logo" />
        <div className="navigation">
          <ul>
            <li>Team</li>
            <li>Teasers</li>
            <li>Market</li>
            <li>FAQ</li>
            <li>About</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="social">
          <p>🟢</p>
          <p>🟢</p>
          <p>🟢</p>
        </div>
        <div className="companies">
          <img src={litgLogo} alt="" />
          <img src={fryosLogo} alt="" />
        </div>
      </div>
      <div className="copy">
        <p>Game development made with ❤️ from Colombia</p>
        <p>Manikins Arena &copy; 2022. All rigths reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
