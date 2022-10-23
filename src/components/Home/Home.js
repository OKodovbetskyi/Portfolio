import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import styles from "./Home.module.css";


const Home= React.forwardRef((props,ref) => {
    return (
        <Card className={styles.Card} ref={ref} cardName= "< Home >" cardNamec="</Home>">
            <div className={styles.homeContent}>
            <h1>Hi! I'm Alex Kodovbetskyi!</h1>
            <p><i>Full Stack Developer</i></p>
            <Link to="/aboutme">About Me</Link>
          
            
            </div>
          
        </Card>
    )
})
export default Home