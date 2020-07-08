import React, { Fragment } from "react";
import "./style.css";

import Navbar from "./navbar";
import About from "./about";
import Skill from "./skills";
import Experience from "./experience";
import Education from "./education";
import Portfolio from "./portfolio";
import Contact from "./contact";

const App = (props) => {
  return (
    <Fragment>
      <Navbar />
      <About />
      <Skill />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
    </Fragment>
  );
};

export default App;
