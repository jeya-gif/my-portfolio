import React from "react";
import "./navbar.css";

function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => handleScroll("home")}
        style={{ cursor: "pointer" }}
      >
        Jey's Portfolio
      </div>
      <ul className="nav-links">
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("skills")}>Skills</li>
        <li onClick={() => handleScroll("projects")}>Projects</li>
        <li onClick={() => handleScroll("education")}>Education</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
