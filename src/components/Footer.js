import React from "react";
import "./Footer.css";
import IconsLinks from "./IconsLinks";
import resumeIco from "../assets/icons8-resume-50.png"
import Git from "../assets/icons8-github-50.png"
import Email from "../assets/icons8-gmail-50.png"
import linkedln from "../assets/icons8-linkedin-logo-50.png";
const Footer = () => {
    return (
        <footer className="Footer">
        <IconsLinks icon={resumeIco} icon1={Git} icon2 ={Email} icon3={linkedln}/>
      </footer>
    );
}
export default Footer;