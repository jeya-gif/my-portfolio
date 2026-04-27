import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Travel & Tourism Website",
    description: "A comprehensive tour booking platform featuring dynamic pages, interactive destination galleries, and real-time video backgrounds. Built with modern web technologies to provide seamless browsing and booking experience for travelers.",
  },
  {
    title: "Portfolio - React",
    description: "A responsive and modern personal portfolio website showcasing projects and skills. Built with React.js, featuring smooth animations, interactive elements, and a clean design to highlight my work and experience.",
    link: "https://km.kagidhakappal.me"
  },
  {
    title: "ELT Pipeline - Python",
    description: "An Extract-Load-Transform data pipeline built with Python for efficient data processing and management. Streamlit-based dashboard for monitoring and analytics.",
    link: "https://elt-pipeline-brwadgwborhcuhcekkn78h.streamlit.app/"
  },
  {
    title: "Student Performance Predictor",
    description: "Machine learning application that predicts student performance based on various academic metrics and attendance data. Interactive Streamlit interface for easy data input and predictions.",
    link: "https://student-attendance-bezohminds-jey-project.streamlit.app/"
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company: "CODEBIND TECHNOLOGIES, CHENNAI",
    duration: "Aug 2023 - July 2025",
    description: "Gained hands-on experience in web development fundamentals. Worked with technologies such as HTML, CSS, PHP, and SQL. Understood the structure of web applications and backend data handling.",
  },
  {
    title: "Full Stack Project Developer",
    company: "EKHAI, KANYAKUMARI",
    duration: "Ongoing",
    description: "Developed a full-stack event organizer application with features like event booking, scheduling, and donations. Utilized React.js, Node.js, and MongoDB for frontend, backend, and database management. Integrated third-party APIs for secure payments, calendar scheduling, and user notifications.",
  },
  {
    title: "Python & AI Developer",
    company: "BEZOHMINDS, THIRUNELVELI",
    duration: "Currently Ongoing",
    description: "Worked with Python, AI, API development, and SQL. Developed multiple projects utilizing modern technologies and problem-solving techniques.",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects & Experience</h1>
      
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
      </div>

      {/* Projects Section */}
      {activeTab === "projects" && (
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
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Experience Section */}
      {activeTab === "experience" && (
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(0,0,0,0.3)" }}
            >
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-duration">{exp.duration}</p>
              <p className="exp-description">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
