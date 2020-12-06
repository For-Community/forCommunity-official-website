import React, { Fragment } from "react";
import About from "./About";
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";

function Body() {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <TeamSection />
    </Fragment>
  );
}

export default Body;
