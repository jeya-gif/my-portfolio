import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaGoogle, FaEnvelope } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <footer className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through any of these platforms!</p>
      <div className="contact-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter size={40} />
        </a>
        <a href="mailto:example@gmail.com">
          <FaGoogle size={40} />
        </a>
        <a href="mailto:example@gmail.com">
          <FaEnvelope size={40} />
        </a>
      </div>
    </footer>
  );
}

export default Contact;
