import React from "react"
import "./style.css"

import Navbar from "./navbar"
import About from "./about"
import Skill from "./skills"
import Experience from "./experience"
import Education from "./education"
import Portfolio from "./portfolio"
import Footer from "./footer"

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <Skill />
      <Experience />
      <Education />
      <Portfolio />
      <Footer />
    </React.Fragment>
  )
}

export default App
