import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Travel & Tourism Website",
    description: "A complete tour booking website with dynamic pages and background videos.",
  },
  {
    title: "Voice to Text Converter",
    description: "Web app to convert voice to text with download and animation features.",
  },
  {
    title: "PDF Maker Tool",
    description: "Upload, edit, and create PDFs from images with animated download options.",
  },
  {
    title: "Running Game",
    description: "A simple animated game where a character runs and jumps to avoid obstacles.",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.3)" }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
