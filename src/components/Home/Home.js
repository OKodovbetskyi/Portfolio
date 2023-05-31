import React from "react";
import Card from "../Card";
import styles from "./Home.module.css";



const Home= React.forwardRef((props,ref) => {
    const scrollToSection = (elRef) => {
        const scrollLocation ={
           top: (elRef.current.offsetTop)-100,
           behavior:"smooth"
          
       }
       window.scrollTo(scrollLocation);

   }
    return (
        <Card className={styles.Card} ref={ref} cardNamec="</Home>">
            <div className={styles.homeContent}>
            <h1 className={styles.devName}>Hi! I'm Alex Kodovbetskyi!</h1>
            <p><i>Full Stack Developer</i></p>
            <a className={styles.aboutMeLink} href="#aboutme" onClick={
               (e)=>
                  scrollToSection(props.aboutme)
            }>About Me</a>
             <div className={styles.arrow}></div>
                
            </div>
          
        </Card>
    )
})


export default Home