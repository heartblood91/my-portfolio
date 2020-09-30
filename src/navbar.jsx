import React from "react";
import NavbarItem from "./components/navbarItem";

const Header = (props) => {
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
};

export default Header;
