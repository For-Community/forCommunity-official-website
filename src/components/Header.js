import React from "react";

import logo from "../assets/logo.png";

const Header = ({ setDark, dark }) => {
  return (
    <div className="header">
      <div className="wrapDark">
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
          <a href="#project">Projects</a>
          <a href="#connect">Connect</a>
        </div>

        <button className="ColorButton" onClick={() => setDark((dark = !dark))}>
          {dark ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
        </button>
      </div>
    </div>
  );
};

export default Header;
