import React, { Fragment } from "react";
import "./style.css";

import Navbar from "./navbar";
import About from "./about";
import Skill from "./skills";
import Experience from "./experience";
import Education from "./education";
import Portfolio from "./portfolio";

const App = props => {
  return (
    <Fragment>
      <Navbar />
      <About />
      <Skill />
      <Experience />
      <Education />
      <Portfolio />
    </Fragment>
  );
};

export default App;
