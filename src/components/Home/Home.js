import React from "react";
import "./Home.css";
import Button from "../Button";
import AboutMe from '../AboutMe/AboutMe'


const Home= React.forwardRef((props,ref) => {
    const scrollToSection = (elRef) => {
        const scrollLocation ={
           top: (elRef.current.offsetTop)-100,
           behavior:"smooth"
          
       }
       window.scrollTo(scrollLocation);

   }
    return (
            <div className={'homeContent'}>
            <h1 className={'devName'}>Hi, I'm <span>Alex Kodovbetskyi.</span></h1>
            <h2>A Full Stack Developer</h2> 
            <AboutMe />
            <div className="home-icons">
            <Button title="Contact me" to="contact-me" version={2}/>
            <Button title="Projects" to="projects"/>
            </div>
           
            </div>
    )
})


export default Home