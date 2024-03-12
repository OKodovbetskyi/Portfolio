import React from "react";

import "./ProjectDescription.css";
import casestudy from "../assets/icons8-book-50.png";
import github from "../assets/icons8-github-120.png";
import studentdash from "../assets/studentdash.png";
const ProjectDescription = ({
  technologies,
  description,
  githubURL,
  image,
  features = [],
  websiteURL,
  githubLabel = "Code",
  githubExtraLabel,
  githubExtraURL,
}) => {
  return (
    <div className="desc-container">
      <div className="img-and-description">
        <img className="project-image" src={image} alt="screen" />
        <div className="project-desc">
          <span>
            <h5 className="title">Description</h5>
            <p>{description}</p>
          </span>
          <span>
            <h5 className="title">Features</h5>
            <ul className="skillItem">
              {features.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
          </span>
          <span>
            <h5 className="title">Technologies used</h5>
            <ul className="skillItem">
              {technologies.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
          </span>
          <span>
            <h5 className="title">Links</h5>
            <div className="links">
              {githubURL && (
                <a className="project-links" target="_blank" href={githubURL}>
                  <img src={github} alt="github link" /> {githubLabel}
                </a>
              )}
              {websiteURL && (
                <a className="project-links" target="_blank" href={websiteURL}>
                  <img src={github} alt="github link" /> Demo
                </a>
              )}
              {githubExtraLabel && githubExtraURL && (
                <a
                  className="project-links"
                  target="_blank"
                  href={githubExtraURL}
                >
                  <img src={github} alt="github link" /> {githubExtraLabel}
                </a>
              )}
              {/*<a className='project-links'>
              <img src={casestudy} alt='github link' />
                View Case Study
                
  </a>*/}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
