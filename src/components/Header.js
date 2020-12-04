import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <i class="fa fa-rocket" aria-hidden="true"></i>
        <h3>For<span>Community</span></h3>
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
