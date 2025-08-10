import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">AI Evolution</h1>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
