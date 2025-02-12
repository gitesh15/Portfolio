// AboutPage.js
import React from "react";
import "../style/style.css";
import profileImage from "../assets/person.png"; // Your profile image
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa"; // Example of skill icons

function AboutPage() {
  return (
    <div id="about-page">
      <div className="content-container">
        <div className="left-side">
          <h1 className="title">About Me</h1>
          <p className="description">
            Hey, I’m <span className="highlight">Gitesh Thorat</span>, a
            passionate web developer with a deep love for building impactful web
            applications. I specialize in both{" "}
            <span className="highlight">Frontend</span> and{" "}
            <span className="highlight">Full Stack Development</span>, bringing
            ideas to life through clean, efficient, and user-centered design. My
            journey as a developer has been fueled by a constant desire to
            learn, innovate, and create experiences that solve real-world
            problems.
          </p>
          <p className="description">
            I love working with modern frameworks like{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Node.js</span>, and{" "}
            <span className="highlight">MongoDB</span>. I’m always exploring new
            tools and technologies to refine my skills and stay ahead of the
            curve.
          </p>
          <div className="cta-container">
            <button className="cta-button">Let's Connect</button>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-icons">
              <div className="skill-icon">
                <FaReact size={40} color="#61DBFB" />
                <p>React</p>
              </div>
              <div className="skill-icon">
                <FaNodeJs size={40} color="#68A063" />
                <p>Node.js</p>
              </div>
              <div className="skill-icon">
                <FaHtml5 size={40} color="#E34F26" />
                <p>HTML5</p>
              </div>
              <div className="skill-icon">
                <FaCss3Alt size={40} color="#264de4" />
                <p>CSS3</p>
              </div>
              <div className="skill-icon">
                <FaJsSquare size={40} color="#F7DF1E" />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="right-side">
          <img className="profile-image" src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
