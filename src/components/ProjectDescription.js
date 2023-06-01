import React from 'react'
import Screenshot1 from '../assets/Screenshot 2023-05-31 212159.png';
import './ProjectDescription.css';

import github from '../assets/icons8-github-120.png';
const ProjectDescription = () => {
  return (
    <div className='desc-container'>
        <div>
        <div className='img-and-description'>
        <img src={Screenshot1} alt='screen' />
        <div className='project-desc'>
        <h5>Description</h5>
        <p>Officia cillum id ea proident sit deserunt ipsum. Irure eu aliqua elit voluptate aliqua reprehenderit sit tempor sint ipsum veniam. Aliquip nisi elit ullamco consequat nisi mollit. Laboris qui qui ex pariatur culpa incididunt dolore deserunt aliquip fugiat. Occaecat irure amet cillum laboris adipisicing. Veniam consectetur laboris sint qui sit labore laborum mollit duis labore magna aute voluptate laborum.</p>
        </div>
        </div>
        <div className="skillWrapper">
        <h5>Technologies used</h5>
            <ul className="skillItem">
            <li>Agile</li>
            <li>Scrum</li>
            <li>Responsive Design</li>
            <li>Relational Databases</li>
        </ul>
            <h5>Links</h5>
            <a className='project-links'>
              Code
              <img src={github} alt='github link' />
            </a>
        </div>
        </div>
    </div>
  )
}

export default ProjectDescription