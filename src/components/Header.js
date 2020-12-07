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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#community">Community</a>
          <a href="#home">Projects</a>
          <a href="#home">Connect</a>
        </div>
      </div>
  );
};

export default Header;
