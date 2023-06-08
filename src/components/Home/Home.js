import React from "react";
import "./Home.css";

import AboutMe from '../AboutMe/AboutMe';
import icon1 from '../../assets/icons8-javascript.svg'
import icon2 from '../../assets/icons8-nodejs.svg'
import icon3 from '../../assets/icons8-react-native.svg'
import icon4 from '../../assets/icons8-express-js.svg'
import icon5 from '../../assets/icons8-location-50.png'
import Button from "../Button";



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
            <h1 className={'devName'}>I am Alex Kodovbetskyi!</h1>
            <div className="home-icons">
            <p><i>Full Stack Developer  </i></p> 
            <img className="home-icon" src={icon1} alt="JavaScript Icon" />
            <img className="home-icon" src={icon2} alt="JavaScript Icon" />
            <img className="home-icon" src={icon3} alt="JavaScript Icon" />
            <img className="home-icon" src={icon4} alt="JavaScript Icon" />
            </div>
            <AboutMe />
            <div className="home-icons">
            <Button title="Contact Me" to="contact-me" version={2}/>
            <Button title="Projects" to="projects"/>
            </div>
           
            </div>
    )
})


export default Home