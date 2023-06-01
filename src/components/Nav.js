import React, { useState } from 'react';

import './Nav.css';
import logo from '../assets/ak-low-resolution-logo-black-on-white-background.png'
import Skills from './Skills';
import Projects from './Projects';
import { Link } from 'react-router-dom';
const Nav = (props) =>{
   const [isOpen, setIsOpen] = useState(false);
   const [selected, setSelected] = useState({
      Home: true,
      Skills: false,
      Projects: false,
      Education: false,
    })
    const scrollToSection = (elRef) => {
         const scrollLocation ={
            top: (elRef.current.offsetTop)-100,
            behavior:"smooth"
        }
        window.scrollTo(scrollLocation);
    }
    const selectHandler = (name)=>{
      setSelected({[name] : true})
    }
    return(
     <nav className="navbar">
     <img className="nav-logo" src={logo} />
      <div className="navbar-links">
        <Link onClick={()=>selectHandler('Home')} className={selected.Home && 'selected'} to="/">Home</Link>
        <Link onClick={()=>selectHandler('Skills')} className={selected.Skills && 'selected'} to="/skills">Skills</Link>
        <Link onClick={()=>selectHandler('Projects')} className={selected.Projects && 'selected'} to="/projects">Projects</Link>
        <Link onClick={()=>selectHandler('Education')} className={selected.Education && 'selected'} to="/education">Experience</Link>
      </div>
      <div className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
      </div>
  </nav>
    )
}
export default Nav;
     /*<Link to="/">Home </Link>
        <Link to="#skills">Skills</Link>
<Link to="/education">Education</Link>
<a href="#projects">Projects</a>
<Link to="/links">Contact me</Link> */