import React, { Fragment, useState} from "react";
import "./styles/styleDark.css"
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import TeamSection from "./components/TeamSection";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Project from "./components/Project";




function App() {
  const [dark, setDark] = useState(false)
  return (
  dark ?
  <div className = {dark ? "dark" : null}>
  <Fragment>
  <Header setDark = {setDark} dark = {dark}/>
  <Home />
  <About />
  <TeamSection />
  <Project />
  <Connect />
  <Footer />
</Fragment>
</div>
:
<Fragment>

<Header setDark = {setDark}/>
<Home />
<About />
<TeamSection />
<Project />
<Connect />
<Footer />

</Fragment>
  );
}

export default App;
