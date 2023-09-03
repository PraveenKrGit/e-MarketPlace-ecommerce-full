import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="contact-start">
        <Link to="/">
          <img className="contact-icon" src={logo} alt="e-MarketPlace" />
        </Link>
      </div>
      <div className="leftFooter">
        <p>Quick links</p>
        {/* <a href="http://instagram.com/prave.enkr">Search</a>
        <a href="https://www.linkedin.com/in/praveen-kumar-yadav-cse/">About Us</a>
        <a href="https://github.com/PraveenKrGit">Contact Us</a> */}
        <Link to="/search">Search</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </div>

      {/* <div className="midFooter">
        <h1>e-MarketPlace</h1>
        <p>&copy; 2023 e-MarketPlace</p>
      </div> */}

      <div className="rightFooter">
        <p>Get In Touch</p>
        <div>Email us at: praveen2024@gmail.com</div>
        <a href="http://instagram.com/prave.enkr">Instagram</a>
        <a href="https://www.linkedin.com/in/praveen-kumar-yadav-cse/">
          LinkedIn
        </a>
        <a href="https://github.com/PraveenKrGit">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
