import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
          <h3>
            <span className="primary">Crypto</span>App
          </h3>
        </div>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"> </span>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="col">
          <h5>Developers</h5>
          <span className="bar"> </span>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="col">
          <h5>Cloud</h5>
          <span className="bar"></span>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"></span>
          <a href="/">
            <FaFacebook className="icon" />
          </a>
          <a href="/">
            <FaGithub className="icon" />
          </a>
          <a href="/">
            <FaLinkedin className="icon" />
          </a>
          <a href="/">
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
