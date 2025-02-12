import React from "react";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons for GitHub and external links
import trip from "../assets/Trip.png";
import sch from "../assets/sch.png";
function Projects() {
  const projects = [
    {
      title: "Strategic Vendor Management System",
      description:
        "Developed a React.js-based system to display vendor locations, allowing users to find nearby vendors.",
      technologies: "React.js, JavaScript, HTML, CSS",
      image: "https://via.placeholder.com/500", // Replace with actual project image URL
      github: "https://github.com/your-repo",
      live: "https://your-live-site.com",
    },
    {
      title: "Travel and Tourism Advisor",
      description:
        "Built a platform providing personalized travel recommendations based on user interests and budget.",
      technologies: "React.js, JavaScript, HTML, CSS",
      image: trip, // Replace with actual project image URL
      github: "https://github.com/gitesh15/Trip",
      live: "https://67ac03e47a954a59d45dac63--travelwonders.netlify.app/",
    },
    {
      title: "Scholarship Recommendation System",
      description:
        "Created a platform to match students with scholarship opportunities based on their academic performance.",
      technologies: "JavaScript, HTML, CSS",
      image: sch, // Replace with actual project image URL
      github: "https://github.com/gitesh15/Education-Grant-Portal",
      live: "https://education-grant-portal.netlify.app/",
    },
    // {
    //   title: "Plantsop Landing Page",
    //   description: "A beautiful and responsive landing page for Plantsop.",
    //   image: "https://via.placeholder.com/500", // Replace with actual project image URL
    //   github: "https://github.com/your-repo",
    //   live: "https://your-live-site.com",
    // },
    // {
    //   title: "VPS Hosting Website",
    //   description:
    //     "A modern VPS Hosting website designed for seamless user experience.",
    //   image: "https://via.placeholder.com/500", // Replace with actual project image URL
    //   github: "https://github.com/your-repo",
    //   live: "https://your-live-site.com",
    // },
    // {
    //   title: "Book Landing Page",
    //   description:
    //     "Landing page for a fictional bookshop, responsive and clean.",
    //   image: "https://via.placeholder.com/500", // Replace with actual project image URL
    //   github: "https://github.com/your-repo",
    //   live: "https://your-live-site.com",
    // },
  ];

  return (
    <div id="page2">
      <div id="text4">
        <h5>PROJECT</h5>
        <h1>
          LATEST <br /> PROJECTS
        </h1>
      </div>

      <div id="project">
        {/* Mapping through projects to display */}
        {projects.map((project, index) => (
          <div key={index} className={`projects p${index + 1}`}>
            <div className="text3">
              <h1>{project.title}</h1>
              <div className="circle">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>
            </div>
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
