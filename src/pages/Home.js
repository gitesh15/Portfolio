import React from "react";
// import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "../style/style.css"; // Assuming you have a corresponding CSS file for styling
import "../assets/nav.png";
// import Navbar from "../components/Navbar";
// import Skills from "../components/Techstack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Techstack from "../components/Techstack";
import Skills from "../components/Skills";
// import FindMeOn from "../components/FindMeOn";
// import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
function Home() {
  return (
    <>
      <div id="main">
        {/* <Navbar /> */}
        <IntroSection />
        <Techstack />
        <Skills />

        <Projects />
        <Contact />
        {/* <FindMeOn />
        <Footer /> */}
      </div>
    </>
  );
}

export default Home;
