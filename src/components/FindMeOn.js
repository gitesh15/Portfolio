// FindMeOn.js
import React from "react";
import "../style/style.css"; // Assuming your styles are stored here

function FindMeOn() {
  const links = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/yourprofile",
      iconClass: "ri-linkedin-line",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourusername",
      iconClass: "ri-github-line",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourusername",
      iconClass: "ri-twitter-line",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername",
      iconClass: "ri-instagram-line",
    },
  ];

  return (
    <div id="find-me-on">
      <h5>Find Me On</h5>
      <h1>Let's Connect!</h1>
      <div className="social-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className={`ri ${link.iconClass} icon`}></i>
            <span>{link.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FindMeOn;
