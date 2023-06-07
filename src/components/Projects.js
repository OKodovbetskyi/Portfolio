import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './Projects.css';
import { ProjectTab } from "./ProjectTab";
import arrowright from '../assets/icons8-arrow-right-50.png';
import ProjectDescription from "./ProjectDescription";
import './ProjectTab.css';
const Projects = React.forwardRef((props, ref) =>{
    const [selected, setSelected] = useState(
        {
            Devs: true,
            Healthy: true, 
            Reading: true,
            Score:true
        }
    )
    const handleSelect = (name) =>{
        if (selected[name] === true){
            setSelected({[name]: false})
        }else{
            setSelected({[name]: true})
            console.log(selected);
        }
        console.log(selected.Reading);
        
    }
    const selectedClass = selected.Devs && 'selectedProj';
    return(
        <div className='projects-container'>
            <h1 className="projectTitle">Projects.</h1>
            <p className="introduction-projects"> As a dedicated Software Engineer, I've spent the last year immersed in the world of coding, where every line written and every problem solved marks a step forward in my journey. This is where I showcase the work I've done, the solutions I've created, and the value I've added to various aspects of life through technology.
Below, you'll find the highlights of my work over the past year, each project representing a unique challenge and a testament to my ability to build user-centric software</p>
            <div className="project-tabs">
            <ProjectTab 
                header="Deliverable Tracking System"
                type="Clients' Project"
                dates="02/2022 - 03/2022"
                open={true}
                description={<ProjectDescription technologies={[ 'React','Redux Toolkit', 'CSS','NodeJS', 'Express', 'Joi Validator', 'RESTful API', 'MySQL MariaDB', 'JSON']} userTypes={['Student', 'Supervisor', 'Admin']}/>}
                />
             <ProjectTab 
                header="Healthy Travel Mobile App"
                type="Assignment"
                dates="02/2022 - 03/2022"
                description={<ProjectDescription technologies={['React Native','NodeJS', 'Express', 'AmadeusAPI (for flight ticketing, accomdation)','OpenAI API' ,'Joi Validator', 'RESTful API', 'MongoDB']}/>}
                />
             <ProjectTab 
                header="Score Card App"
                type="Assignment"
                dates="02/2022 - 03/2022"
                description={<ProjectDescription technologies={['JavaScript', 'React', 'CSS','NodeJS', 'Express', 'Joi Validator', 'RESTful API']}/>}
                />
             <ProjectTab 
                header="Reading Diary App"
                type="Assignment"
                dates="02/2022 - 03/2022"
                description={<ProjectDescription technologies={['JAVA', 'Android Studio', 'OOP']}/>}
                />
            </div>
            <div className="linkstonext">
            <Link to='/'>Return To Home </Link>
        <img className="arrowright" src={arrowright} alt="arrow right"/>
        </div>
       
        </div>
       
    )
})
export default Projects;