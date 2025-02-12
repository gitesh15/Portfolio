import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Import the Home component
// import About from "./About"; // Import other components like About, Portfolio, etc.
import ResumePage from "./components/ResumePage";
import Resume from "./pages/Resume";
import AboutPage from "./pages/AboutPage";
import Projects from "./pages/ProjectPage";
import CertificatePage from "./pages/CertificatePage";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import FindMeOn from "./components/FindMeOn";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        {/* <Route path="/about" element={<About />} /> About Page */}
        {/* Add more routes as needed */}
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projectpg" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cert" element={<CertificatePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/resumepg" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <FindMeOn />
      <Footer />
    </Router>
  );
}

export default App;
