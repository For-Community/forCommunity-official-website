import React, { Fragment, useState, useEffect} from "react";
import "./styles/styleDark.css"
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import TeamSection from "./components/TeamSection";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Project from "./components/Project";


function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
 useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}



function App() {
const [dark, setDark] = useStickyState(false, "darkMode")
useEffect(() => {

  console.log(dark)
})


  return (

  dark ?
  <div className = {dark ? "dark" : null}>
  <Fragment>
  <Header dark = {dark} setDark = {setDark} />
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

<Header dark = {dark} setDark = {setDark} />
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
