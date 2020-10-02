import React, { Component } from "react";
import NavbarItem from "./components/navbarItem";

class Header extends Component {
  state = {
    navbarAnimate: false,
  };

  render() {
    return (
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
        >
          <i className="fas fa-bars fa-lg"></i>
        </button>

        <div
          className="navbar-collapse"
          style={{ height: this.state.navbarAnimate ? "240px" : "0" }}
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
