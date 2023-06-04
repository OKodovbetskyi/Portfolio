import React from "react";
import "./Footer.module.css";
import IconsLinks from "./IconsLinks";
import resumeIco from "../assets/icons8-resume-100.png"
import Git from "../assets/icons8-github-120.png"
import Email from "../assets/icons8-gmail-144.png"
import linkedln from "../assets/icons8-linkedin-circled (1).svg";
const Footer = () => {
    const emoji ='U+2764';
    return (
        <footer className="Footer">
        <IconsLinks icon={resumeIco} icon1={Git} icon2 ={Email} icon3={linkedln}/>
      </footer>
    );
}
export default Footer;