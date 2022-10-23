import React from "react";
import styles from "./Nav.module.css";
import logo from '../assets/ak-low-resolution-logo-black-on-white-background.png'


const Nav = (props) =>{
  
    const scrollToSection = (elRef) => {
         const scrollLocation ={
            top: (elRef.current.offsetTop) - 200,
            behavior:"smooth"
           
        }
        window.scrollTo(scrollLocation);

    }
    return(
         <nav className={styles.Nav}>
            <p className={styles.logo}><img src={logo} alt="logo"></img></p>
          <div className={styles.NavLinks}>
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