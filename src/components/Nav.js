import React, { useState } from "react";

import "./Nav.css";
import logo from "../assets/ak-low-resolution.jpg";
import { Link } from "react-router-dom";
import { Contact } from "./Contact";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (elRef) => {
    const scrollLocation = {
      top: elRef.current.offsetTop - 100,
      behavior: "smooth",
    };
    window.scrollTo(scrollLocation);
  };
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          <img className="nav-logo" src={logo} />
        </NavLink>
        <div className="navbar-links">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/projects"
          >
            Projects
          </NavLink>
          <Link to="/contact-me">Contact</Link>
        </div>
        <div className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`navbar-hamburger-line ${isOpen ? "open" : ""}`}
          ></div>
          <div
            className={`navbar-hamburger-line ${isOpen ? "open" : ""}`}
          ></div>
          <div
            className={`navbar-hamburger-line ${isOpen ? "open" : ""}`}
          ></div>
          <div
            className={`navbar-hamburger-line ${isOpen ? "open" : ""}`}
          ></div>
        </div>
      </nav>
      {isOpen ? (
        <>
          <div className="mobile-menu"></div>
          <div className="hamburger-menu">
            <div class="close-icon" onClick={() => setIsOpen(!isOpen)}>
              <div class="close-icon-circle">
                <span class="close-icon-line"></span>
                <span class="close-icon-line"></span>
              </div>
            </div>
            <Link onClick={() => setIsOpen(!isOpen)} to="/">
              Home
            </Link>
            <Link onClick={() => setIsOpen(!isOpen)} to="/about">
              About
            </Link>
            <Link onClick={() => setIsOpen(!isOpen)} to="/projects">
              Projects
            </Link>
            <Link onClick={() => setIsOpen(!isOpen)} to="/contact-me">
              Contact
            </Link>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Nav;
/*<Link to="/">Home </Link>
        <Link to="#skills">Skills</Link>
<Link to="/education">Education</Link>
<a href="#projects">Projects</a>
<Link to="/links">Contact me</Link> */
