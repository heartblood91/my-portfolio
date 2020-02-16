import React, { Fragment } from "react";
import "./style.css";

import Navbar from "./navbar";
import About from "./about";

const App = props => {
  return (
    <Fragment>
      <Navbar />
      <About />
    </Fragment>
  );
};

export default App;
