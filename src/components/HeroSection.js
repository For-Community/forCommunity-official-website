import React from 'react'
import HeroImg from "../assets/hero-img.png"

const HeroSection = () => {
    return (
        <div className="hero">
            <div class="hero-flex hero-text">
                <p>To find everything in something</p>
            </div>
            <div class="hero-flex hero-image">
                <img src={HeroImg} alt="hero-img" height={"350px"} />
            </div>
        </div>
    )
}

export default HeroSection
