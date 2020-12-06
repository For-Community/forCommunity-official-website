import React from "react";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="For Community Logo" />
        <h3>
          For<span>Community</span>
        </h3>
      </div>
      <div className="header-link">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Teams</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default Header;
