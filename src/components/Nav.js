import React, { useState } from 'react';

import './Nav.css';
import logo from '../assets/aklogo.png'
import Skills from './Skills';
import Projects from './Projects';
import { Link } from 'react-router-dom';
import { Contact } from './Contact';
const Nav = (props) =>{
   const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (elRef) => {
         const scrollLocation ={
            top: (elRef.current.offsetTop)-100,
            behavior:"smooth"
        }
        window.scrollTo(scrollLocation);
    }
    return(
      <>
     <nav className="navbar">
      <Link to="/"><img className="nav-logo" src={logo} /></Link>
      <div className="navbar-links">
      <Link   to="/about">About</Link>
      <Link   to="/projects">Projects</Link>
      <Link to="/contact-me">Contact</Link>
      </div>
      <div className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
      </div>
  </nav>
  {isOpen ? <>
    <div className='mobile-menu' >
     
   </div>
       <div className='hamburger-menu'>
       <div class="close-icon"  onClick={() => setIsOpen(!isOpen)}>
       <div class="close-icon-circle">
         <span class="close-icon-line"></span>
         <span class="close-icon-line"></span>
        </div>
        </div>
       <Link onClick={() => setIsOpen(!isOpen)} to="/">Home</Link>
       <Link onClick={() => setIsOpen(!isOpen)} to="/about">About</Link>
       <Link onClick={() => setIsOpen(!isOpen)} to="/projects">Projects</Link>
       <Link onClick={() => setIsOpen(!isOpen)} to="/contact-me">Contact</Link>
   </div>
   </>
  : ''
   }
  
    </>
    )
  }
export default Nav;
     /*<Link to="/">Home </Link>
        <Link to="#skills">Skills</Link>
<Link to="/education">Education</Link>
<a href="#projects">Projects</a>
<Link to="/links">Contact me</Link> */