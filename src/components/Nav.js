import React, { useState } from 'react';

import './Nav.module.css';
import logo from '../assets/ak-low-resolution-logo-black-on-white-background.png'
const Nav = (props) =>{
   const [isOpen, setIsOpen] = useState(false);
   const [activePage, setActivePage] = useState("about");
    const scrollToSection = (elRef) => {
         const scrollLocation ={
            top: (elRef.current.offsetTop)-100,
            behavior:"smooth"
        }
        window.scrollTo(scrollLocation);
    }
    return(
     <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`navbar-hamburger-line ${isOpen ? 'open' : ''}`}></div>
      </div>



            {/* <p className={styles.logo}><img src={logo} alt="logo"></img></p>
          <div className={styles.NavLinks}>
            <a className="right" href="/" onClick={
               (e)=>scrollToSection(props.pages[1])
            }>home()</a>
            <a href="#skills" onClick={
               (e)=>
                  scrollToSection(props.pages[0])
            }>skills()</a>
                <a href="#projects" onClick={
               (e)=> scrollToSection(props.pages[3])
            }>projects() </a>
            <a href="#education" onClick={
               (e)=>  scrollToSection(props.pages[2])
            }>education()</a>
            
  </div> */}
      
  </nav>
    )
}
export default Nav;
     /*<Link to="/">Home </Link>
        <Link to="#skills">Skills</Link>
<Link to="/education">Education</Link>
<a href="#projects">Projects</a>
<Link to="/links">Contact me</Link> */