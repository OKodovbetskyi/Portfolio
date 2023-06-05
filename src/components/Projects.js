import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './Projects.css';
import arrowright from '../assets/icons8-arrow-right-50.png';
import ProjectDescription from "./ProjectDescription";
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
            <h1>Projects.</h1>
            <p>Amet non esse adipisicing aliqua duis et. Eiusmod voluptate quis dolore consectetur sit excepteur. Veniam aliqua occaecat duis Lorem. Elit et do dolore mollit sunt sint esse do dolor laborum est aute aliqua. Anim ut do elit non occaecat do mollit minim est.</p>
            <div className="project-tabs">
                <div className={ `${selected.Devs && 'selectedProj'} , projectCard`} onClick={()=>handleSelect("Devs")} to='/projects'>
                    <div className="additional-info">
                        <h3>Deliverable Tracking System</h3>
                        <span>Type: Assignment</span> 
                        <span>Dates: 12/02/2022 - 12/03/2022</span>
                    </div>
                {selected.Devs && <ProjectDescription />} </div>
                <div className={ `${selected.Healthy && 'selectedProj'} , projectCard`} onClick={()=>handleSelect("Healthy")} to='/projects'>
                <div className="additional-info">
                        <h3>Healthy Travel App</h3>
                        <span>Type: Assignment</span> 
                        <span>Dates: 12/02/2022 - 12/03/2022</span>
                    </div>
                {selected.Healthy && <ProjectDescription />} </div>
                <div className={ `${selected.Reading && 'selectedProj'} , projectCard`} onClick={()=>handleSelect("Reading")} to='/projects'>
                <div className="additional-info">
                        <h3>Score App</h3> 
                        <span>Type: Assignment</span> 
                        <span>Dates: 12/02/2022 - 12/03/2022</span>
                    </div>
                {selected.Reading && <ProjectDescription />} </div>
                <div className={`${selected.Score ? 'selectedProj' : ''} projectCard`} onClick={() => handleSelect("Score")} to="/projects">
                <div className="additional-info">
                        <h3>Score App</h3> 
                        <span>Type: Assignment</span> 
                        <span>Dates: 12/02/2022 - 12/03/2022</span>
                    </div>
                {selected.Score && <ProjectDescription />}
</div>
            
            </div>
            <div className="links">
            <Link to='/'>Return To Home </Link>
        <img className="arrowright" src={arrowright} alt="arrow right"/>
        </div>
       
        </div>
       
    )
})
export default Projects;