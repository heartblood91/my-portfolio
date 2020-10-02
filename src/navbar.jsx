import React, { Component } from "react";
import NavbarItem from "./components/navbarItem";

class Header extends Component {
  state = {
    // hiddenButton: window.innerWidth > 768 ? true : false,
    // hiddenPills: window.innerWidth > 768 ? false : true,
    navbarAnimate: false,
  };

  render() {
    console.log(
      this.state.hiddenButton +
        " car la taille de l'écran est de: " +
        window.innerWidth
    );
    return (
      // <nav className="navbar navbar-expand-md navbar-dark sticky-top shadow-box-navbar-blue">
      <nav className="navbar shift">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
          onClick={() =>
            this.setState({
              navbarAnimate: !this.state.navbarAnimate,
            })
          }
          // hidden={this.state.hiddenButton}
        >
          <i className="fas fa-bars fa-lg"></i>
        </button>

        <div
          className="navbar-collapse"
          style={{ height: this.state.navbarAnimate ? "240px" : "0" }}

          // hidden={this.state.hiddenPills}
          // id="myNavbar"
        >
          <ul className="nav-pills">
            <NavbarItem href={"#about"} title={"Moi"} />
            <NavbarItem href={"#skills"} title={"Compétences"} />
            <NavbarItem href={"#experience"} title={"Expérience"} />
            <NavbarItem href={"#education"} title={"Education"} />
            <NavbarItem href={"#portfolio"} title={"Portfolio"} />
            <NavbarItem href={"#contact"} title={"Contact"} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
