// IntroSection.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import { Link } from "react-router-dom";
function IntroSection() {
  // const [reveal, setReveal] = useState(false);

  // useEffect(() => {
  //   // Set the reveal state to true when the section comes into view
  //   const onScroll = () => {
  //     const section = document.getElementById("intro-section");
  //     const rect = section.getBoundingClientRect();
  //     if (rect.top <= window.innerHeight / 1.5) {
  //       setReveal(true);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  const navigate = useNavigate();
  const handleconnect = () => {
    navigate("/contact");
  };
  return (
    <>
      {/* Main Content */}

      {/* Text section with typewriter effect */}
      <div id="text">
        <h5>Hello!</h5>
        <h1 className="typewriter">
          I'M <br />
          GITESH
          <br />
          THORAT
        </h1>
        <h4 className="typewriter">
          -a passionate Developer with a strong focus on creating intuitive and{" "}
          <br />
          engaging web applications.I've honed my skills in JavaScript,
          React.js, <br /> HTML/CSS, and Node.js, constantly learning and
          adapting to new technologies
        </h4>
        <div id="buttons">
          <button id="b1">
            LET'S TALK <i className="ri-telegram-line"></i>
          </button>
          <Link to="/resume">
            <button id="b2">
              RESUME <i className="ri-arrow-right-up-line"></i>
            </button>
          </Link>
        </div>
      </div>
      <div id="about-page">
        <div className="content-container">
          {" "}
          <h1 className="title">LET ME INTRODUCE MYSELF</h1>
          <p className="description">
            Hey, I’m <span className="highlight">Gitesh Thorat</span>, a
            passionate web developer with a deep love for building impactful web
            applications. I specialize in both{" "}
            <span className="highlight">Frontend</span> and{" "}
            <span className="highlight">Full Stack Development</span>, bringing
            ideas to life through clean, efficient, and user-centered design.
            My/ journey as a developer has been fueled by a constant desire to
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
          </p>{" "}
          <div className="cta-container">
            <button className="cta-button" onClick={handleconnect}>
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroSection;
