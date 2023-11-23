import Card from "./Card";
import React from "react";
import "./Skills.css";
const Skills = React.forwardRef((prop, ref) => {
  return (
    <div>
      <div className="skillWrapper">
        <p>Languages</p>
        <ul className="skillItem">
          <li>JavaScript</li>
          <li>Java</li>
          <li>Bash Scripting</li>
          <li>Python</li>
        </ul>
      </div>
      <div className="skillWrapper">
        <p>Front-End</p>
        <ul className="skillItem">
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>React/Redux</li>
          <li>React Native</li>
          <li>Java Swing</li>
        </ul>
      </div>
      <div className="skillWrapper">
        <p>Back-End</p>
        <ul className="skillItem">
          <li>Node</li>
          <li>Express</li>
          <li>GraphQl</li>
          <li>Apollo Server</li>
          <li>Nginx</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div className="skillWrapper">
        <p>Testing</p>
        <ul className="skillItem">
          <li>JUnit</li>
          <li>Jest</li>
          <li>Cypress</li>
        </ul>
      </div>
      <div className="skillWrapper">
        <p>Tools</p>
        <ul className="skillItem">
          <li>Docker</li>
          <li>VSCode</li>
          <li>Axios</li>
          <li>Unix Command Line</li>
          <li>Git</li>
          <li>IntelLiJ</li>
          <li>AWS Amplify</li>
          <li>Heroku</li>
          <li>Postman</li>
        </ul>
      </div>
      <div className="skillWrapper">
        <p>Conceptual</p>
        <ul className="skillItem">
          <li>Agile</li>
          <li>Scrum</li>
          <li>Responsive Design</li>
          <li>Relational Databases</li>
          <li>Fundamentals of Cloud Computing</li>
          <li>CI/CD</li>
        </ul>
      </div>
    </div>
  );
});
export default Skills;
