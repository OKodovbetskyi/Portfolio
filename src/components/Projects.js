import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Projects.css';
import { ProjectTab } from "./ProjectTab";
import arrowright from '../assets/icons8-arrow-right-50.png';
import ProjectDescription from "./ProjectDescription";
import './ProjectTab.css';
import deliverabletracking from '../assets/studentdash1.png';
import androidapp from '../assets/androidapp.png';
import HealthyTravel from '../assets/HealthyTravel.png';

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
                dates="10/2022 - 05/2023"
                open={true}
                description={<ProjectDescription 
                    technologies={[ 'React','FetchAPI', 'CSS','NodeJS', 'Express', 'Joi Validator', 'RESTful API', 'MySQL MariaDB', 'JSON']} 
                    userTypes={['Student', 'Supervisor', 'Admin']}
                    description={"This system is designed to improve collaboration between supervisors and students, ensuring effective communication, transparent progress tracking, and productive teamwork. This project underscores my capabilities in developing practical and efficient solutions that improve everyday interactions."}
                    githubURL="https://github.com/OKodovbetskyi/ProjectDeliverablesTracking.git"
                    image={deliverabletracking}
                    features={['Deliverable Creation and Edition', 'Student and Supervisor collaboration','Task Assignment','Progress Tracking' ,'Search','Responsive Design', 'Secure Database']}/>}
                />
             <ProjectTab 
                header="Healthy Travel Mobile App"
                type="Assignment"
                dates="02/2023 - 03/2023"
                description={<ProjectDescription
                     technologies={['React Native','NodeJS', 'Express','Axios', 'AmadeusAPI (for flight ticketing, accomdation)','OpenAI API' ,'Joi Validator', 'RESTful API','Persistant Storage', 'MongoDB']} 
                     features={['Cross Platform', 'Inbuilt ChatBot Assistance', 'External Database', 'Flight Search','Doctor Search','Accomodation Search','Real-time prices']}
                     image={HealthyTravel}
                     githubURL={'https://github.com/OKodovbetskyi/DocTravelMobileApplication.git'}
                     description={"HealthyTravel is a comprehensive mobile application for both IOS and Android designed to assist individuals who need to visit a doctor in another country. This user-friendly app aims to simplify the process of planning and organizing medical trips by providing essential features for flight search, real-time pricing, accommodation search, and access to doctors' information. With the added convenience of an inbuilt chatbot, HealthyTravel ensures that users can get instant answers to their questions and concerns."}/>}
                     

               />
              <ProjectTab 
                header="Reading Diary App"
                type="Assignment"
                dates="01/2022 - 02/2022"
                description={<ProjectDescription 
                            technologies={['JAVA', 'Android Studio', 'OOP']}
                            description={"Reading Diary App is a mobile application developed for a local primary school to digitize their student reading diary. The current reading diary is a physical book, and the school wants a more environmentally friendly solution. The app allows users to log their reading activities, including the date, book title, page numbers read, and comments from parents or teachers. It offers additional possibilities for logging information beyond what a physical diary can provide. The diary can be shared with teacher over email. The app is designed with a child-friendly user interface."}
                            features={['Android Platform','Create Diary','Edit Diary', 'Generates Email Template', 'Search', 'User Friendly']}
                            githubURL="https://github.com/OKodovbetskyi/MADAndroidStudioApplication.git"   
                            image={androidapp} />}
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