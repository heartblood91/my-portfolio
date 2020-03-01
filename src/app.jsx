import React, { Fragment } from "react";
import "./style.css";

import Navbar from "./navbar";
import About from "./about";
import Skill from "./skills";
import Experience from "./experience";

const App = props => {
  return (
    <Fragment>
      <Navbar />
      <About />
      <Skill />
      <Experience />
    </Fragment>
  );
};

export default App;
