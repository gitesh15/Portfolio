import React from "react";
import { Link } from "react-router-dom";
import resumeFile from "../assets/Gitesh Thorat Resume.pdf"; // Your resume file
import "../style/style.css"; // Make sure to import your updated CSS

function ResumePage() {
  return (
    <div id="resume-page">
      <h1>My Resume</h1>
      <h2>Here's my professional resume!</h2>

      <div id="resume-viewer">
        {/* PDF Embed */}
        <embed
          src={resumeFile}
          width="100%"
          height="600px"
          type="application/pdf"
        />
      </div>

      {/* Buttons placed in the top-right corner */}
      <div id="buttons-container">
        <a href={resumeFile} download>
          <button id="download-button">
            Download Resume <i className="ri-download-line"></i>
          </button>
        </a>
        <Link to="/">
          <button id="back-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ResumePage;
