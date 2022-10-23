import React from "react";
import styles from "./Icons.module.css"
const Icons = ({icon, icon1, icon2,icon3}) =>{
    return (
        <span className={styles.Icons}>
        <img src={icon} alt=''/>
        <img src={icon2} alt=''/>
        <img src={icon1} alt=''/>
        <img src={icon3} alt=''/>
    </span>
    );
}
export default Icons