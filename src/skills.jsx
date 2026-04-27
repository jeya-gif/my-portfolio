import React from "react";
import "./skills.css";

const skillsData = [
  // Programming
  {
    name: "Python",
    icon: "🐍",
    description: "Automation, scripting, data processing, and backend development."
  },
  {
    name: "C++",
    icon: "💻",
    description: "Strong grasp of OOP, algorithms, and performance optimization."
  },
  {
    name: "Java (Core)",
    icon: "☕",
    description: "Core Java concepts, OOP, and problem-solving."
  },
  {
    name: "SQL",
    icon: "🗄️",
    description: "Database queries, joins, and performance tuning."
  },

  // Web Development
  {
    name: "HTML",
    icon: "🌐",
    description: "Semantic, accessible, SEO-friendly web structures."
  },
  {
    name: "CSS",
    icon: "🎨",
    description: "Responsive design, animations, and modern styling."
  },
  {
    name: "WordPress",
    icon: "📝",
    description: "Custom themes, plugins, and CMS integration."
  },
  {
    name: "UI/UX (Figma)",
    icon: "🎯",
    description: "Wireframing, prototyping, and user experience design."
  },

  // Databases
  {
    name: "MySQL",
    icon: "💾",
    description: "Relational database design, queries, and management."
  },
  {
    name: "MongoDB",
    icon: "🍃",
    description: "NoSQL database operations and schema design."
  },

  // Tools & Platforms
  {
    name: "Power BI",
    icon: "📊",
    description: "Data visualization, reports, and business intelligence."
  },
  {
    name: "Git",
    icon: "🔧",
    description: "Version control, branching, and collaboration."
  }
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
              </div>
              <div className="card-back">
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
