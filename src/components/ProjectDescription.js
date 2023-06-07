import React from 'react'
import Screenshot1 from '../assets/studentdash1.png';
import './ProjectDescription.css';
import casestudy from '../assets/icons8-book-50.png';
import github from '../assets/icons8-github-120.png';
import studentdash from '../assets/studentdash.png';
const ProjectDescription = ({technologies}) => {
  return (
    <div className='desc-container'>
          <div className='img-and-description'>
          <img className="project-image" src={Screenshot1} alt='screen' />
          <div className='project-desc'>
        <h5>Description</h5>
        <p>This system is designed to improve collaboration between supervisors and students, ensuring effective communication, transparent progress tracking, and productive teamwork. This project underscores my capabilities in developing practical and efficient solutions that improve everyday interactions.</p>
        <h5>Technologies used</h5>
            <ul className="skillItem">
            {technologies.map((t)=><li>{t}</li>)}
        </ul>
        <h5>Links</h5>
        <div className='links'>
              <a className='project-links' href='https://github.com/OKodovbetskyi/ProjectDeliverablesTracking.git'>
                <img src={github} alt='github link' /> Code
              
              </a>
              <a className='project-links'>
              <img src={casestudy} alt='github link' />
                View Case Study
                
              </a>
              </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectDescription