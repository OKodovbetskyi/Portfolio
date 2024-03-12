import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "../components/Skills";
import Home from "../components/Home/Home";
import React, { useRef } from "react";
import Education from "../components/Education";
import Projects from "../components/Projects";
import "./RouterLanding.modules.css";
import Nav from "../components/Nav";

import Card from "../components/Card";
import { Contact } from "../components/Contact";

const RoutedLanding = () => {
  const home = useRef(null);
  const skills = useRef(null);
  const aboutme = useRef(null);
  const projects = useRef(null);
  const education = useRef(null);

  const pages = [skills, home, education, projects];
  return (
    <BrowserRouter>
      <div className="container">
        <div className="home">
          <Card header="Home">
            <Nav pages={pages} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<Education />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/contact-me" element={<Contact />} />
              <Route path="/contact-me" element={<Contact />} />
            </Routes>
          </Card>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default RoutedLanding;
