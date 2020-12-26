import {React, useState, useEffect} from "react";
import HeroImg from "../assets/home.png";

const HeroSection = () => {
  const [count, setCount] = useState()

  useEffect(() => {
    async function fetchCount() {
      let response = await fetch(
        "https://api.countapi.xyz/update/fcommunity.com/fcommunity?amount=1"
      );
      response = await response.json();
      setCount(response.value)
    }
    fetchCount();
  },[])

  return (
    <div className="hero" id="home">
      <div class="counter">
        <h4>Visitors: {count }</h4>
      </div>
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
