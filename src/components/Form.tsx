import React from "react";
import "./Form.css";
import DOGO from "../assets/dogitolover.jpeg";

const Form = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="left">
          <img src={DOGO} alt="Dogito Lover" />
        </div>
        <div className="right">
          <div className="right">
            <h2>Earn Pasive Coints with Us.</h2>
            <p>Earn up to 12% annual rewards on 30+ digital assets.</p>
            <div className="input-container">
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
