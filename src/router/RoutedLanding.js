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
import Card from '../components/Card';



const RoutedLanding = () => {
    const home = useRef(null);
    const skills = useRef(null);
    const aboutme = useRef(null);
    const projects = useRef(null);
    const education = useRef(null);
 
    const pages = [skills,home, education, projects]
   return (
     <BrowserRouter>
     <div className='container'>
     <div className="home" >
     <Card header="Home">
     <Nav pages={pages} />
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/skills' element={<Skills/>}/>
     <Route path='/about' element={<AboutMe/>}/>
     <Route path='/projects/*' element={<Projects/>}/>
     <Route path='/education' element={<Education/>}/>
      </Routes>
     </Card>   
   
     </div>
     <div className='icons'>
     <IconsLinks icon={resumeIco} icon1={Git} icon2 ={Email} icon3={linkedln}/>
     </div>
     
     </div>
   </BrowserRouter>
  
  
   )
}

export default RoutedLanding