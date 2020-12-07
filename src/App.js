import React, {Fragment} from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import TeamSection from "./components/TeamSection";
import Connect from "./components/Connect";

function App() {
  return (
      <Fragment>
        <Header />
        <Home />
        <About />
        <TeamSection />
        <Connect />
      </Fragment>
  );
}

export default App;
