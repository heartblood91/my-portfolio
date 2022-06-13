import React from "react"
import NavbarItem from "./components/navbarItem"

const Header = () => {
  const arrayOfHeaderElements = [
    { href: "#about", title: "Moi" },
    { href: "#skills", title: "Compétences" },
    { href: "#experience", title: "Expérience" },
    { href: "#education", title: "Education" },
    { href: "#portfolio", title: "Portfolio" },
  ]
  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top shadow-box-navbar-blue">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNavbar"
      >
        <i className="fas fa-bars fa-lg"></i>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center shadow-black"
        id="myNavbar"
      >
        <ul className="nav nav-pills navbar-nav">
          {arrayOfHeaderElements.map((header_element) => {
            return (
              <NavbarItem href={header_element.href} title={header_element.title} key={header_element.href} />
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Header
