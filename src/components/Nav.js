import React, { useContext, useRef } from "react";
import "./Nav.module.css";
import pdf from "../Oleksandr_Kodovbetskyi_-_Full_Stack_Developer.pdf";

const Nav = (props) =>{
    const scrollToSection = (elRef) => {
         const scrollLocation ={
            top: (elRef.current.offsetTop) - 200,
            behavior:"smooth"
           
        }
        window.scrollTo(scrollLocation);

    }
    return(
         <nav className="Nav">
            <p className="logo">OK logo</p>
            <a className="right" href="/#" onClick={
               (e)=>scrollToSection(props.pages[1])
            }>home()</a>
            <a href="/#skills" onClick={
               (e)=>
                  scrollToSection(props.pages[0])
            }>skills()</a>
                <a href="/#projects" onClick={
               (e)=> scrollToSection(props.pages[3])
            }>projects() </a>
            <a href="/#education" onClick={
               (e)=>  scrollToSection(props.pages[2])
            }>education()</a>
             <a
    href={pdf}
    className='btn'
    download
    rel='noopener noreferrer'
    target='_blank'
  >
    downloadCV()
  </a> 
      
  <button onClick={props.toggleTheme}>Theme</button>  </nav>
    )
}
export default Nav;
     /*<Link to="/">Home </Link>
        <Link to="#skills">Skills</Link>
<Link to="/education">Education</Link>
<a href="#projects">Projects</a>
<Link to="/links">Contact me</Link> */