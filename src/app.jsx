import React, { Fragment } from "react";
import "./style.css";

import Navbar from "./navbar";
import About from "./about";
import Skill from "./skills";

const App = props => {
  return (
    <Fragment>
      <Navbar />
      <About />
      <Skill />
    </Fragment>
  );
};

export default App;
