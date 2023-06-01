import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './Projects.css';

import ProjectDescription from "./ProjectDescription";
const Projects = React.forwardRef((props, ref) =>{
    const [selected, setSelected] = useState(
        {
            Devs: false,
            Healthy: false, 
            Reading: false,
            Score:false
        }
    )
    const handleSelect = (name) =>{
        if (selected[name] === true){
            setSelected({[name]: false})
        }else{
            setSelected({[name]: true})
        }
        
    }
    const selectedClass = selected.Devs && 'selectedProj';
    return(
        <div className='projects-container'>
            <h2>My Projects</h2>
            <p>Amet non esse adipisicing aliqua duis et. Eiusmod voluptate quis dolore consectetur sit excepteur. Veniam aliqua occaecat duis Lorem. Elit et do dolore mollit sunt sint esse do dolor laborum est aute aliqua. Anim ut do elit non occaecat do mollit minim est.</p>
            <div className="project-tabs">
                <div className={ `${selected.Devs && 'selectedProj'} , projectCard`} onClick={()=>handleSelect("Devs")} to='/projects'><h3>Deliverable Tracking System </h3>
                {selected.Devs && <ProjectDescription />} </div>
                <div className={ `${selected.Healthy && 'selectedProj'} , projectCard`} onClick={()=>handleSelect("Healthy")} to='/projects'><h3>Healthy Travel App</h3>
                {selected.Healthy && <ProjectDescription />} </div>
                <div className={ `${selected.Reading && 'selectedProj'} , projectCard`} onClick={()=>handleSelect("Reading")} to='/projects'><h3>Score App</h3> 
                {selected.Reading && <ProjectDescription />} </div>
                <div className={`${selected.Score ? 'selectedProj' : ''} projectCard`} onClick={() => handleSelect("Score")} to="/projects">
                <h3>Book Reading App</h3>
                {selected.Score && <ProjectDescription />}
</div>

            </div>
        </div>
       
    )
})
export default Projects;