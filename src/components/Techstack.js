// import React, { useState, useEffect } from "react";
// import "../style/style.css"; // Assuming your styles are stored here

// function Skills() {
//   return (
//     <>
//       <div id="page1">
//         <img src="./stamp.png" alt="stamp" />
//         <div id="right">
//           <div id="text1">
//             <h5>Skills</h5>
//             <h1>
//               Tech Stack I <br /> Know
//             </h1>
//             <h4>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
//               nesciunt eaque accusamus! Exercitationem officiis molestias
//               voluptate vel voluptatum rerum. Laboriosam.
//             </h4>
//           </div>
//         </div>
//         <div id="left">
//           <div className="box">
//             <h4>01/</h4>
//             <h1>
//               React Developer
//               <br />
//             </h1>
//             <div className="circle">
//               <i className="ri-arrow-right-up-line"></i>
//             </div>
//           </div>
//           <div className="box">
//             <h4>02/</h4>
//             <h1>
//               Frontend Developer <br />
//             </h1>
//             <div className="circle">
//               <i className="ri-arrow-right-up-line"></i>
//             </div>
//           </div>
//           <div className="box">
//             <h4>03/</h4> {/* Fixed duplicate '01/' */}
//             <h1>
//               Full Stack Developer
//               <br />
//             </h1>
//             <div className="circle">
//               <i className="ri-arrow-right-up-line"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Skills;

import React, { useState, useEffect } from "react";
import "../style/style.css"; // Assuming your styles are stored here

function Techstack() {
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

  return (
    <div id="page1">
      <div id="right">
        <div id="text1">
          <h5>Skills</h5>
          <h1>
            Tech Stack I <br /> Know
          </h1>
          <h4>
            Welcome to my developer portfolio! This site showcases my expertise
            and skills as a React Developer, Frontend Developer, and Full Stack
            Developer.
          </h4>
        </div>
      </div>

      <div id="left">
        <div className={`box ${isVisible ? "fade-in" : ""}`}>
          <h4>01/</h4>
          <h1>React Developer</h1>
          <div className="circle">
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>

        <div className={`box ${isVisible ? "fade-in" : ""}`}>
          <h4>02/</h4>
          <h1>Frontend Developer</h1>
          <div className="circle">
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>

        <div className={`box ${isVisible ? "fade-in" : ""}`}>
          <h4>03/</h4>
          <h1>Full Stack Developer</h1>
          <div className="circle">
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;
