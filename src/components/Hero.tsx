import React from "react";
import "./Hero.css";
import Crypto from "../assets/venecuela.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        {/*Left side*/}
        <div className="left">
          <p>Welcome to the CryptoApp</p>
          <h1>Invest in Cryptocurrency</h1>
          <p>Buy, Sell and store hundreds of cryptocurrencies</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn"> Learn More</button>
          </div>
        </div>
        {/*Right side*/}

        <div className="rigth">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
