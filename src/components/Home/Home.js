import React from "react";
import "./Home.css";

import AboutMe from '../AboutMe/AboutMe';



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
            <h1 className={'devName'}>Hi! I am Alex Kodovbetskyi!</h1>
            <p><i>Full Stack Developer</i></p>
            <AboutMe />
            </div>
    )
})


export default Home