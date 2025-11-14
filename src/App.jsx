import React from "react";
import Navbar from "./Navbar";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Education from "./education";
import Projects from "./projects";
import Contact from "./contact";

function App() {
  return (
    <>
      {/* Navbar with smooth scroll */}
      <Navbar />

      <div className="container" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
