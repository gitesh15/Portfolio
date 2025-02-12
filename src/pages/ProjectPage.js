import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons for GitHub and external links
import trip from "../assets/Trip.png";
import sch from "../assets/sch.png";
function ProjectPage() {
  const projects = [
    {
      title: "Strategic Vendor Management System",
      description:
        "Developed a React.js-based system to display vendor locations, allowing users to find nearby vendors.",
      technologies: "React.js, JavaScript, HTML, CSS",
      image: "https://via.placeholder.com/500", // Add project image URL
      github: "https://github.com/your-repo",
      live: "https://your-live-site.com",
    },
    {
      title: "Travel and Tourism Advisor",
      description:
        "Built a platform providing personalized travel recommendations based on user interests and budget.",
      technologies: "React.js, JavaScript, HTML, CSS",
      image: trip, // Add project image URL
      github: "https://github.com/gitesh15/Trip",
      live: "https://67ac03e47a954a59d45dac63--travelwonders.netlify.app/",
    },
    {
      title: "Scholarship Recommendation System",
      description:
        "Created a platform to match students with scholarship opportunities based on their academic performance.",
      technologies: "JavaScript, HTML, CSS",
      image: sch, // Add project image URL
      github: "hhttps://github.com/gitesh15/Education-Grant-Portal",
      live: "https://education-grant-portal.netlify.app/",
    },
  ];

  // Function to add CSS dynamically
  useEffect(() => {
    const styles = `
      /* General Styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Roboto', sans-serif;
        background-color: #101010;
        color: #f1f1f1;
        line-height: 1.6;
      }

      #projects-page {
        padding: 60px 5%;
        background-color: #121212;
        min-height: 100vh;
      }

      #projects-header {
        text-align: center;
        margin-bottom: 50px;
      }

      #projects-header h1 {
        font-size: 3rem;
        color: #ff69b4;
        font-weight: 700;
        letter-spacing: 2px;
      }

      #projects-header p {
        font-size: 1.2rem;
        color: #ddd;
        margin-top: 10px;
      }

      /* Project Grid Container */
      #projects-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 20px;
        padding-top: 20px;
      }

      .project-card {
        background-color: #1d1d1d;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        position: relative;
      }

      .project-card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
      }

      .project-image img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: transform 0.5s ease-in-out;
      }

      .project-card:hover .project-image img {
        transform: scale(1.1);
      }

      /* Project Info Section */
      .project-info {
        padding: 20px;
        text-align: center;
        background-color: #222222;
        border-top: 2px solid #ff69b4;
      }

      .project-info h3 {
        font-size: 1.8rem;
        color: #fff;
        margin-bottom: 10px;
        font-weight: 600;
      }

      .project-info p {
        font-size: 1rem;
        color: #bbb;
        margin-bottom: 20px;
      }

      .project-info p.technologies {
        font-size: 0.9rem;
        color: #ddd;
        margin-top: 10px;
      }

      .project-links a {
        color: #fff;
        margin: 0 15px;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease-in-out;
      }

      .project-links a:hover {
        color: #ff69b4;
      }

      /* CTA Button Section */
      #projects-page .cta-container {
        text-align: center;
        margin-top: 50px;
      }

      .cta-button {
        background-color: #ff69b4;
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
      }

      .cta-button:hover {
        background-color: #d85c99;
        transform: translateY(-3px);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        #projects-header h1 {
          font-size: 2.5rem;
        }

        #projects-header p {
          font-size: 1rem;
        }

        #projects-container {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .project-card {
          margin-bottom: 20px;
        }
      }
    `;

    // Create a <style> element
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.innerHTML = styles;

    // Append the <style> element to the <head> of the document
    document.head.appendChild(styleElement);

    // Cleanup the style element when the component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div id="projects-page">
      <div id="projects-header">
        <h1>My Latest Projects</h1>
        <p>
          Explore the projects I've worked on. Click to see more or visit the
          GitHub repository.
        </p>
      </div>

      <div id="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="technologies">{project.technologies}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={30} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
