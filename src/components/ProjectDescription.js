import React from 'react'

import './ProjectDescription.css';
import casestudy from '../assets/icons8-book-50.png';
import github from '../assets/icons8-github-120.png';
import studentdash from '../assets/studentdash.png';
const ProjectDescription = ({technologies, description, githubURL, image,features=[]}) => {
  return (
    <div className='desc-container'>
          <div className='img-and-description'>
          <img className="project-image" src={image} alt='screen' />
          <div className='project-desc'>
      
        <h5>Description</h5>
        <p>{description}</p>
        <h5>Features</h5>
            <ul className="skillItem">
            {features.map((t)=><li>{t}</li>)}
        </ul>
        <h5>Technologies used</h5>
            <ul className="skillItem">
            {technologies.map((t)=><li>{t}</li>)}
        </ul>
  
        <h5>Links</h5>
        <div className='links'>
              <a className='project-links' target="_blank" href={githubURL}>
                <img src={github} alt='github link' /> Code
              
              </a>
              {/*<a className='project-links'>
              <img src={casestudy} alt='github link' />
                View Case Study
                
  </a>*/}
              </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectDescription