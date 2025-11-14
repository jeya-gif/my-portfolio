import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const educationData = [
    {
    year: "2020",
    degree: "10th Grade",
    institution: "Sri krishna matriculation higher secondary school",
    },
  {
    year: "2022",
    degree: "12th Grade - Biomaths",
    institution: "Sri krishna matriculation higher secondary school",
    description:
      "Specialized in software development, data structures, and UI/UX design. Participated in multiple hackathons and design competitions.",
  },
  {
    year: "2022 - 2026",
    degree: "B.tech",
    institution: "Dhanalakshmi srinivasan college of engineering",
    description:
      "Focused on Artificial Intellidence and Data Science.",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <span className="year">{edu.year}</span>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
