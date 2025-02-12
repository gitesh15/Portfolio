// Skills.js
import React, { useState, useEffect } from "react";
import "../style/style.css"; // Assuming your styles are stored here

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const skills = [
    { id: "01", title: "React Developer", icon: "ri-reactjs-line" },
    { id: "02", title: "Frontend Developer", icon: "ri-html5-line" },
    { id: "03", title: "Full Stack Developer", icon: "ri-code-s-slash-line" },
    { id: "04", title: "NodeJS", icon: "ri-nodejs-line" },
    { id: "05", title: "JavaScript", icon: "ri-javascript-line" },
    { id: "06", title: "CSS3", icon: "ri-css3-line" },
    { id: "07", title: "MySQL", icon: "ri-database-2-line" },
    { id: "08", title: "MongoDB", icon: "ri-database-3-line" },
  ];

  return (
    <div id="skills-page">
      <div className="skills-intro">
        <h5>Skills</h5>
        <h1>Tech Stack I Mastered</h1>
        <p>
          With extensive experience in building dynamic, scalable, and
          performance-optimized applications, I am proficient in a wide range of
          technologies.
        </p>
      </div>
      <div className="skills-list">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`skill-box ${isVisible ? "fade-in" : ""}`}
          >
            <div className="skill-icon">
              <i className={`ri ${skill.icon} skill-icon-style`}></i>
            </div>
            <h2>{skill.title}</h2>
          </div>
        ))}
      </div>
      {/* <div className="skill-box">
        <div className="skill-icon">
          <i className="ri-reactjs-line skill-icon-style"></i>
        </div>
        <h2>React Developer</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: "85%" }}></div>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
