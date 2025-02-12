// import React from "react";

// // Resume Data
// const resume = {
//   name: "John Doe",
//   title: "Full Stack Developer",
//   contact: {
//     email: "john.doe@example.com",
//     phone: "(123) 456-7890",
//     linkedin: "https://linkedin.com/in/johndoe",
//     github: "https://github.com/johndoe",
//   },
//   about:
//     "Passionate Full Stack Developer with experience in building scalable web applications. Skilled in JavaScript, React, Node.js, and more.",
//   skills: [
//     "JavaScript",
//     "React",
//     "Node.js",
//     "HTML & CSS",
//     "Express.js",
//     "MongoDB",
//     "Git & GitHub",
//   ],
//   experience: [
//     {
//       title: "Senior Full Stack Developer",
//       company: "Tech Company A",
//       date: "Jan 2022 - Present",
//       description:
//         "Led the development of multiple full-stack applications using React and Node.js. Worked closely with designers and product managers to deliver high-quality solutions.",
//     },
//     {
//       title: "Junior Full Stack Developer",
//       company: "Tech Company B",
//       date: "June 2020 - Dec 2021",
//       description:
//         "Worked as part of a development team building web applications using React, Node.js, and MongoDB. Assisted in building APIs and integrating with third-party services.",
//     },
//   ],
//   education: [
//     {
//       degree: "Bachelor of Science in Computer Science",
//       institution: "University XYZ",
//       date: "2016 - 2020",
//     },
//   ],
// };

// const Resume = () => {
//   return (
//     <div id="resume-page">
//       {/* Header Section */}
//       <header id="header" style={styles.header}>
//         <h1 style={styles.name}>{resume.name}</h1>
//         <p style={styles.title}>{resume.title}</p>
//         <div style={styles.contact}>
//           <a href={`mailto:${resume.contact.email}`} style={styles.contactLink}>
//             {resume.contact.email}
//           </a>
//           <a href={`tel:${resume.contact.phone}`} style={styles.contactLink}>
//             {resume.contact.phone}
//           </a>
//           <a
//             href={resume.contact.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.contactLink}
//           >
//             LinkedIn
//           </a>
//           <a
//             href={resume.contact.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.contactLink}
//           >
//             GitHub
//           </a>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="about" style={styles.section}>
//         <h2 style={styles.sectionTitle}>About Me</h2>
//         <p style={styles.text}>{resume.about}</p>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" style={styles.section}>
//         <h2 style={styles.sectionTitle}>Skills</h2>
//         <ul style={styles.list}>
//           {resume.skills.map((skill, index) => (
//             <li key={index} style={styles.listItem}>
//               {skill}
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" style={styles.section}>
//         <h2 style={styles.sectionTitle}>Experience</h2>
//         {resume.experience.map((exp, index) => (
//           <div key={index} style={styles.experienceItem}>
//             <h3 style={styles.experienceTitle}>{exp.title}</h3>
//             <p style={styles.experienceCompany}>{exp.company}</p>
//             <p style={styles.experienceDate}>{exp.date}</p>
//             <p style={styles.text}>{exp.description}</p>
//           </div>
//         ))}
//       </section>

//       {/* Education Section */}
//       <section id="education" style={styles.section}>
//         <h2 style={styles.sectionTitle}>Education</h2>
//         {resume.education.map((edu, index) => (
//           <div key={index} style={styles.educationItem}>
//             <h3 style={styles.educationDegree}>{edu.degree}</h3>
//             <p style={styles.educationInstitution}>{edu.institution}</p>
//             <p style={styles.educationDate}>{edu.date}</p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// // Styling for Resume Page
// const styles = {
//   header: {
//     background: "linear-gradient(45deg, #444444, #222222)",
//     color: "#fff",
//     padding: "20px 40px",
//     borderRadius: "10px",
//     textAlign: "center",
//     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
//   },
//   name: {
//     fontSize: "50px",
//     fontWeight: "bold",
//     letterSpacing: "2px",
//     marginBottom: "10px",
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "500",
//     marginBottom: "15px",
//   },
//   contact: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "15px",
//   },
//   contactLink: {
//     color: "#f1f1f1",
//     textDecoration: "none",
//     fontSize: "18px",
//     fontWeight: "500",
//     transition: "color 0.3s ease",
//   },
//   contactLinkHover: {
//     color: "#ff69b4",
//   },
//   section: {
//     margin: "30px auto",
//     width: "80%",
//     maxWidth: "1000px",
//   },
//   sectionTitle: {
//     fontSize: "36px",
//     color: "#ff69b4",
//     marginBottom: "15px",
//     fontWeight: "600",
//   },
//   text: {
//     fontSize: "18px",
//     lineHeight: "1.6",
//     color: "#ddd",
//   },
//   list: {
//     listStyleType: "none",
//     paddingLeft: "0",
//   },
//   listItem: {
//     fontSize: "18px",
//     color: "#ddd",
//     marginBottom: "10px",
//   },
//   experienceItem: {
//     marginBottom: "25px",
//     padding: "15px",
//     background: "#1d1d1d",
//     borderRadius: "8px",
//     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
//   },
//   experienceTitle: {
//     fontSize: "24px",
//     color: "#ff69b4",
//     fontWeight: "600",
//   },
//   experienceCompany: {
//     fontSize: "20px",
//     fontWeight: "500",
//     color: "#f1f1f1",
//   },
//   experienceDate: {
//     fontSize: "18px",
//     color: "#777",
//   },
//   educationItem: {
//     marginBottom: "20px",
//     padding: "15px",
//     background: "#1d1d1d",
//     borderRadius: "8px",
//     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
//   },
//   educationDegree: {
//     fontSize: "24px",
//     color: "#ff69b4",
//     fontWeight: "600",
//   },
//   educationInstitution: {
//     fontSize: "20px",
//     fontWeight: "500",
//     color: "#f1f1f1",
//   },
//   educationDate: {
//     fontSize: "18px",
//     color: "#777",
//   },
// };

// export default Resume;

import React from "react";
import res from "../assets/Gitesh Thorat Resume.pdf";

// Resume Data
const resume = {
  name: "Gitesh Thorat",
  title: "Software Engineer - Frontend",
  contact: {
    email: "giteshthorat15@gmail.com",
    phone: "+91 97529-03370",
    linkedin: "https://linkedin.com/in/gitesh15",
    github: "https://github.com/gitesh15",
  },
  about:
    "Passionate Frontend Developer with experience in building responsive and scalable web applications. Skilled in JavaScript, React.js, and UI development.",
  skills: [
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "Node.js",
    "MySQL",
    "Git & GitHub",
    "Bootstrap",
  ],
  projects: [
    {
      title: "Strategic Vendor Management System",
      description:
        "Developed a React.js-based system to display vendor locations, allowing users to find nearby vendors.",
      technologies: "React.js, JavaScript, HTML, CSS",
    },
    {
      title: "Travel and Tourism Advisor",
      description:
        "Built a platform providing personalized travel recommendations based on user interests and budget.",
      technologies: "React.js, JavaScript, HTML, CSS",
    },
    {
      title: "Scholarship Recommendation System",
      description:
        "Created a platform to match students with scholarship opportunities based on their academic performance.",
      technologies: "JavaScript, HTML, CSS",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Acropolis Institute of Technology and Research, Indore",
      date: "2020 - 2024",
    },
  ],
  certificates: [
    {
      title: "Introduction to Cloud Development with HTML, CSS, JavaScript",
      issuer: "EDX",
      date: "Issued: 2023",
    },
    {
      title: "Computer Network and Internet Protocol",
      issuer: "NPTEL",
      date: "Issued: 2023",
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "Issued: 2023",
    },
  ],
  resumeDownload: { res },
  resumeView: { res }, // Path to view resume
};

const ResumePage = () => {
  return (
    <div id="resume-page">
      <header id="header" style={styles.header}>
        <h1 style={styles.name}>{resume.name}</h1>
        <p style={styles.title}>{resume.title}</p>
        <div style={styles.contact}>
          <a href={`mailto:${resume.contact.email}`} style={styles.contactLink}>
            {resume.contact.email}
          </a>
          <a href={`tel:${resume.contact.phone}`} style={styles.contactLink}>
            {resume.contact.phone}
          </a>
          <a
            href={resume.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.contactLink}
          >
            LinkedIn
          </a>
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.contactLink}
          >
            GitHub
          </a>
        </div>
      </header>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.text}>{resume.about}</p>
      </section>

      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.list}>
          {resume.skills.map((skill, index) => (
            <li key={index} style={styles.listItem}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        {resume.projects.map((proj, index) => (
          <div key={index} style={styles.projectItem}>
            <h3 style={styles.projectTitle}>{proj.title}</h3>
            <p style={styles.text}>{proj.description}</p>
            <p style={styles.technology}>
              <strong>Technologies:</strong> {proj.technologies}
            </p>
          </div>
        ))}
      </section>

      <section id="education" style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        {resume.education.map((edu, index) => (
          <div key={index} style={styles.educationItem}>
            <h3 style={styles.educationDegree}>{edu.degree}</h3>
            <p style={styles.educationInstitution}>{edu.institution}</p>
            <p style={styles.educationDate}>{edu.date}</p>
          </div>
        ))}
      </section>
      <section id="certificates" style={styles.section}>
        <h2 style={styles.sectionTitle}>Certificates</h2>
        {resume.certificates.map((cert, index) => (
          <div key={index} style={styles.certificateItem}>
            <h3 style={styles.certificateTitle}>{cert.title}</h3>
            <p style={styles.certificateIssuer}>{cert.issuer}</p>
            <p style={styles.certificateDate}>{cert.date}</p>
          </div>
        ))}
      </section>
      <a href={resume.resumeDownload} download style={styles.downloadButton}>
        Download Resume
      </a>
      <a
        href={resume.resumeView}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.viewButton}
      >
        View Resume
      </a>
    </div>
  );
};
// const del = document.getElementById("code-block");
// del.style.display = "none";
// const mar = document.getElementById("resume-page");
// mar.style.margin = "2px -43px 11px 161px;";
const styles = {
  header: {
    background: "#222",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  name: { fontSize: "36px", fontWeight: "bold" },
  title: { fontSize: "20px", fontWeight: "500" },
  contact: { display: "flex", justifyContent: "center", gap: "15px" },
  contactLink: { color: "#f1f1f1", textDecoration: "none", fontSize: "16px" },
  downloadButton: {
    display: "block",
    margin: "10px auto",
    padding: "10px 20px",
    background: "#ff69b4",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
  viewButton: {
    display: "block",
    margin: "10px auto",
    padding: "10px 20px",
    background: "#4CAF50",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
  section: { margin: "30px auto", width: "80%", maxWidth: "1000px" },
  sectionTitle: { fontSize: "28px", color: "#ff69b4" },
  text: { fontSize: "18px", lineHeight: "1.6", color: "#ddd" },
  list: { listStyleType: "none", paddingLeft: "0" },
  listItem: { fontSize: "18px", color: "#ddd", marginBottom: "10px" },
  projectItem: { padding: "15px", background: "#1d1d1d", borderRadius: "8px" },
  projectTitle: { fontSize: "22px", color: "#ff69b4" },
  technology: { fontSize: "16px", color: "#ccc" },
  educationItem: {
    padding: "15px",
    background: "#1d1d1d",
    borderRadius: "8px",
  },
  educationDegree: { fontSize: "22px", color: "#ff69b4" },
  educationInstitution: { fontSize: "18px", color: "#f1f1f1" },
  educationDate: { fontSize: "16px", color: "#777" },
};

export default ResumePage;
