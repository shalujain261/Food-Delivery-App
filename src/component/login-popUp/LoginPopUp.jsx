import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

function LoginPopUp({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popUp">
      <form className="login-popup-container">
        <div className="login-popUp-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email ID" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
          {currentState === "Login" ? (
            <p>
              a new account? <span onClick={()=>setCurrentState("Sign up")}> Click here</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span>
            </p>
          )}
      </form>
    </div>
  );
}

export default LoginPopUp;
