import React, { Fragment } from "react";

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
      <About />
      <Skill />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Navbar />
      <Footer />
    </Fragment>
  );
};

export default App;
