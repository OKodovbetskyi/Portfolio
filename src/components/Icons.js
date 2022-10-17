import React from "react";
import icon from "../assets/icons8-java.svg"
import jsicon from "../assets/icons8-javascript.svg"
import nodejsicon from "../assets/icons8-nodejs.svg"
import reacticon from "../assets/icons8-react-native.svg"
import styles from "./Icons.module.css";
const Icons = () =>{
    return (
        <span className={styles.Icons}>
            <img src={jsicon} />
            <img src={reacticon} />
            <img src={nodejsicon} />
            <img src={icon} />
        </span>
    )
}
export default Icons;