// src/About.jsx
import React from "react";
import Lottie from "lottie-react";
import profileAnimation from "./assets/profile.json";
import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left side animation */}
        <div className="about-animation">
          <Lottie animationData={profileAnimation} loop={true} />
        </div>

        {/* Right side content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi! I’m Jeya Suriya, a passionate web developer who loves creating
            visually appealing and interactive websites.  
            I enjoy experimenting with animations, designing responsive layouts,
            and turning ideas into beautiful digital experiences.
          </p>
          <p>
            I’m always eager to learn new technologies and improve my skills to
            create better, more user-friendly designs that stand out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
