import React, { Fragment } from "react";
import "./style.css";

import Navbar from "./navbar";
import About from "./about";
import Skill from "./skills";
import Experience from "./experience";
import Education from "./education";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";

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
      <Footer />
    </Fragment>
  );
};

export default App;
