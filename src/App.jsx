import React from 'react'

import './style.css'

import Navbar from './Navbar'
import About from './About'
import Skill from './Skills'
import Experience from './Experience'
import Education from './Education'
import Portfolio from './Portfolio'
import Footer from './Footer'

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
