// Footer.js
import React from "react";
import "../style/style.css"; // Assuming your styles are stored here

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-content">
        <div id="footer-left">
          <h1>Gitesh Thorat</h1>
          <p>Web Developer | React Developer | Full Stack Developer</p>
        </div>

        <div id="footer-center">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        </div>

        <div id="footer-right">
          <h5>Find Me On</h5>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-twitter-line"></i>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </div>

      <div id="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Gitesh Thorat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
