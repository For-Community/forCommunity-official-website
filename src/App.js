import React, { Fragment } from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import TeamSection from "./components/TeamSection";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
// import Project from "./components/Project";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <TeamSection />
      {/* <Project /> */}
      <Connect />
      <Footer />
    </Fragment>
  );
}

export default App;
