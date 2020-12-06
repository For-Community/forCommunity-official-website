import React from "react";
import HeroImg from "../assets/home.png";

const HeroSection = () => {
  return (
    <div className="hero" id="home">
      <div class="hero-flex hero-text">
        <h4>
          To find <span>everything</span> in <span>something...</span>
        </h4>
      </div>
      <div class="hero-flex hero-image">
        <img src={HeroImg} alt="hero-img" height={"350px"} />
      </div>
    </div>
  );
};

export default HeroSection;
