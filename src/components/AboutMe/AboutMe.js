import React from "react"
import './AboutMe.css';

const AboutMe = React.forwardRef((props,ref) =>{
    return (
            <div className={'AboutMeCard'}>
            <p className="paragraph-aboutme">
            I am a highly skilled and <span className="highlight">results-driven</span> Full Stack Developer with a deep passion for Software Engineering. As a <span className="highlight">First Class graduate</span> from Kingston University, I possess a strong academic foundation complemented by diverse project experiences. Through these experiences, I have honed exceptional<span className="highlight"> critical thinking </span>and <span className="highlight">collaboration</span>  skills. Fuelled by an insatiable <span className="highlight"> curiosity for technology</span>, I constantly expand my knowledge and strive for excellence. I am enthusiastic about leveraging my skills and expertise to contribute to your team's success.    
            </p>
            </div>
    )
})
export default AboutMe;