import React from "react"
import './AboutMe.css';

const AboutMe = React.forwardRef((props,ref) =>{
    return (
            <div className={'AboutMeCard'}>
            <p className="paragraph-aboutme">I am a final year BCs Computer Science student at Kingston University with experience from various projects that I undertake during my degree and in my spare time. I developed great critical thinking and collaboration skills through working in a team. Curiosity to technologies keeps me interested in learning a new thing and push myself constantly to achieve more.</p>
            </div>
    )
})
export default AboutMe;