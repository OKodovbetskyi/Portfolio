import React from "react";

import styles from "./Icons.module.css";
const IconsLinks = ({icon,icon1, icon2, icon3}) =>{
    return (
        <span className={styles.Icons}>
            <div className={styles.wrapper}> <a download href="https://drive.google.com/file/d/12KVDCBMmGgFeqtxq2S8sNrXxZwgp_6gI/view?usp=sharing">

            <p className={styles.email}>Resume</p> <img src={icon} alt=''/></a></div>
           <div className={styles.wrapper}><a href="mailto:oleksandr.kodovbetskyi@gmail.com" target="_blank"> 
           <p className={styles.email}>Email me!</p> <img src={icon2}alt='' />
           </a></div>
           <div className={styles.wrapper}>
           <a href="https://github.com/OKodovbetskyi" target="_blank">
            <p className={styles.email}>GitHub</p> <img src={icon1} alt=''/></a></div>
           <div className={styles.wrapper}>
           <a href="https://www.linkedin.com/in/ak-developer" target="_blank" >
            <p className={styles.email}>Linkeln</p> <img src={icon3} alt=''/></a></div>
           
           
        </span>
    )
}
export default IconsLinks;