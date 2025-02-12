// // Navbar.js
// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import "../style/style.css";
// import "../style/Responsive.css";
// import navImage from "../assets/Gitesh.png";
// // import mainImage from "../assets/img.webp";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const codeString = `const Web Developer = {
//     name: 'Gitesh Thorat',
//     skills: ['C++','HTML', 'CSS','JavaScript', 'React',
//               'NodeJS', 'Express', 'MySQL', 'MongoDB', ],
//     hardWorker: true,
//     quickLearner: true,
//     problemSolver: true,
//     hireable: function() {
//       return this.hardWorker
//        && this.problemSolver
//        && this.skills.length >= 5;
//     }
//   };`;
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <div id="page">
//       <div id="nav">
//         <img className="logo" src={navImage} alt="Navigation logo" />
//         <div
//           className={`hamburger-menu ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         >
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <div id="center-nav">
//           <Link to="#">ABOUT</Link>
//           <Link to="#">SKILLS</Link>
//           <Link to="#">PROJECTS</Link>
//           <Link to="#page3">CONTACT</Link>
//         </div>
//         <input type="text" placeholder="search" />
//       </div>
//       <div id="code-block">
//         {/* <div className="circle" id="circle1"></div>
//         <div className="circle" id="circle2"></div>
//         <div className="circle" id="circle3"></div> */}
//         <SyntaxHighlighter language="javascript" style={dracula}>
//           {codeString}
//         </SyntaxHighlighter>
//       </div>
//       <div id="text">
//         <h5>Hello!</h5>
//         <h1>
//           I'M <br />
//           GITESH
//           <br />
//           THORAT
//         </h1>
//         <h4>
//           -Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor amet
//           officiis incidunt inventore quo expedita, beatae nisi repellendus
//           accusamus. Voluptate!
//         </h4>
//         <div id="buttons">
//           <button id="b1">
//             LET'S TALK <i className="ri-telegram-line"></i>
//           </button>
//           {/* Update this Link to navigate to the resume page */}
//           <Link to="/resume">
//             <button id="b2">
//               RESUME <i className="ri-arrow-right-up-line"></i>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import "../style/Responsive.css";
import navImage from "../assets/Gitesh.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const codeString = `const Web Developer = {
    name: 'Gitesh Thorat',
    skills: ['C++','HTML', 'CSS','JavaScript', 'React',   
              'NodeJS', 'Express', 'MySQL', 'MongoDB', ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
      return this.hardWorker
       && this.problemSolver 
       && this.skills.length >= 5;
    }
  };`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="page">
      <div id="nav">
        <img className="logo" src={navImage} alt="Navigation logo" />

        {/* Hamburger Icon */}
        <div
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation links */}
        <div id="center-nav" className={isMenuOpen ? "open" : ""}>
          <Link to="/">Home</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/skills">SKILLS</Link>
          <Link to="/projectpg">PROJECTS</Link>
          <Link to="/resume">RESUME</Link>
        </div>

        {/* Search input (hidden in mobile view) */}
        <input type="text" placeholder="search" />
      </div>

      {/* Code Block */}
      <div id="code-block">
        <SyntaxHighlighter language="javascript" style={dracula}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Navbar;
