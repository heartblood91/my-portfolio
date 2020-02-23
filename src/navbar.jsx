import React from "react";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top">
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
          <li className="nav-item">
            <a className="nav-link" href="#about">
              Moi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Compétences
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">
              Expérience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
