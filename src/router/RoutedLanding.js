import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Skills from '../components/Skills';
import Home from '../components/Home/Home';
import React, {useRef} from 'react';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import { useTheme, useThemeUpdate } from '../themes/ThemeContext';
import './RouterLanding.modules.css';
import Nav from '../components/Nav';
import resumeIco from "../assets/icons8-resume-100.png"
import Git from "../assets/icons8-github-120.png"
import Email from "../assets/icons8-gmail-144.png"
import linkedln from "../assets/icons8-linkedin-circled (1).svg";
import IconsLinks from '../components/IconsLinks';


const RoutedLanding = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
      backgroundColor: darkTheme ?'white': 'black',
      color: darkTheme ?'black': 'white',
      margin: 0,
      padding: 0,
      height: '100%',
   }
    const home = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const education = useRef(null);
 
    const pages = [skills,home, education, projects]
   return (
     <BrowserRouter>
     <div style={themeStyles} className='container'>
    
   
     
     <div className="home" >
    
     <Routes>

       <Route path="/home" element={<> 
        <Nav pages={pages} toggleTheme={toggleTheme}/>
        <Home ref={home}  toggleTheme={toggleTheme}/>
         <Skills ref={skills} />
         <Projects ref={projects}/>
         <Education ref={education}/></>}>
        
       </Route>
       <Route exact path='/' element={<h2>This portfolio is under development. Thank you for visiting!<br/>
         <a href='/home'>Home</a> </h2>}></Route>
       <Route path="/aboutme" element={<AboutMe />} />
     </Routes>
     <Footer />
     </div>
     <div className='icons'>
     <IconsLinks icon={resumeIco} icon1={Git} icon2 ={Email} icon3={linkedln}/>
     </div>
     
     </div>
   </BrowserRouter>
  
  
   )
}

export default RoutedLanding