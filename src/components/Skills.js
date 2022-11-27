import Card from "./Card"
import React from "react"
import styles from "./Skills.modules.css";
const Skills = React.forwardRef((prop,ref) =>{
    return (
        <Card ref={ref} cardName="< Skills > " cardNamec="</Skills>" >
        <div className="skillWrapper">
        <h3>Languages</h3>
        <ul className="skillItem">
            <li>JavaScript</li>
            <li>Java</li>
            <li>Bash Scripting</li>
        </ul>
        </div>
        <div className="skillWrapper">
        <h3>Front-End</h3>
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
        <h3>Back-End</h3>
        <ul className="skillItem">
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
        </ul>
        </div>
        <div className="skillWrapper">
        <h3>Testing</h3>
        <ul className="skillItem">
            <li>JUnit</li>
            <li>Jest</li>
        </ul>
        </div>
        <div className="skillWrapper">
        <h3>Tools</h3>
        <ul className="skillItem">
            <li>VSCode</li>
            <li>Unix Command Line</li>
            <li>Git</li>
            <li>IntelLiJ</li>
            <li>AWS Amplify</li>
        </ul>
        </div>
        <div className="skillWrapper">
        <h3>Conceptual</h3>
        <ul className="skillItem">
            <li>Agile</li>
            <li>Scrum</li>
            <li>Responsive Design</li>
            <li>Relational Databases</li>
        </ul>
        </div>

        </Card>
    )
})
export default Skills;