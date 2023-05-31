import React from "react"
import Card from "../Card"
import Icons from "../Icons"
import styles from "./AboutMe.module.css";
import Button from "../Button";
import icon from "../../assets/icons8-java.svg"
import jsicon from "../../assets/icons8-javascript.svg"
import nodejsicon from "../../assets/icons8-nodejs.svg"
import reacticon from "../../assets/icons8-react-native.svg"

const AboutMe = React.forwardRef((props,ref) =>{
    return (
        <div className={styles.Education}>
        <Card ref={ref} cardName="< About Me >">
        <div className={styles.AboutMeCard}>
            <div className={styles.leftside}>
            <p><i>Full Stack Developer.</i></p>
            <p>I am a final year BCs Computer Science student at Kingston University with experience from various projects that I undertake during my degree and in my spare time. I developed great critical thinking and collaboration skills through working in a team. Curiosity to technologies keeps me interested in learning a new thing and push myself constantly to achieve more.</p>
            </div>
            </div>
        </Card>
        </div>
    )
})
export default AboutMe;