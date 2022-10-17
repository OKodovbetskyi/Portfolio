import React from "react"
import Card from "../Card"
import Icons from "../Icons"
import styles from "./AboutMe.module.css";
import Button from "../Button";
const AboutMe = () =>{
    return(
        <Card>
            <div className={styles.AboutMeCard}>
            <div className={styles.leftside}>
            <h3>About Me.</h3>
            <p><i>Full Stack Developer.</i></p>
            <p>I am a final year BCs Computer Science student at Kingston University with experience from various projects that I undertake during my degree and in my spare time. I developed great critical thinking and collaboration skills through working in a team. Curiosity to technologies keeps me interested in learning a new thing and push myself constantly to achieve more.</p>
            <Icons />
            </div>
            <div className={styles.contactForm}>
            <span className={styles.closebutton}><a href="/">X</a></span>
            <h3>Let's talk.</h3>
            <p><i>New project, freelance inquiry or even a coffe.</i></p>
                <form>
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" name="nameInput"/>
                    <label htmlFor="emailInput">Email</label>
                    <input type="text" name="emailInput"/>
                    <label >Message</label>
                    <input type="text" name="emailInput"/>
                    <Button title="Send Message" />
                </form>
            </div>
            </div>
        </Card>
     
    )
}
export default AboutMe;