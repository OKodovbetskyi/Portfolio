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
       <Route path="/" element={<> 
        <Home ref={home} pages={pages} toggleTheme={toggleTheme}/>
         <Skills ref={skills} />
         <Projects ref={projects}/>
         <Education ref={education}/></>}>
        
       </Route>
       <Route path="/aboutme" element={<AboutMe />} />
     </Routes>
     <Footer />
     </div>
     </div>
   </BrowserRouter>
  
  
   )
}

export default RoutedLanding