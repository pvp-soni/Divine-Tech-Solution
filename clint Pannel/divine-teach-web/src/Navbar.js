import React from "react";
import "./Navbar.css";
import Divine from "./photos/Divine.png"
import Home from "./home";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img
            src={Divine} // Replace with your actual logo file path
            alt="Divinetech Solutions"
          />
          {/* <span>Divine Tech Solutions</span> */}
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><a href="home.js">Home</a></li>
          <li><a href="#training">Training</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#consultancy">Consultancy</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
