import React from "react";
import Card from "./Card";
import styles from "./Education.modules.css";
import IconUni from "../assets/icons8-map-pin-32.png"
import Skills from "./Skills";
const Education = ((props,ref) =>{
    return (
        <div className={styles.Education}>
        <h2 className={styles.abouttitle}>About Me.</h2>

        <Skills />
        <div className="educationContent">
            <div>
            <h3>BSc (Hons) Computer Science</h3>
            <p>Kingston University London</p>
            </div>
            <div className="location">
                <p><b>2020 - Current</b></p>
                <p><img className="imagepin" src={IconUni} alt=""/>Kingston-Upon-Thames</p>
            </div>
            <div>
                
            </div>
        </div>
        </div>
    )
})
export default Education;