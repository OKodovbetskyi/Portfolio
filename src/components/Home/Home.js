import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import styles from "./Home.module.css";
import Nav from "../Nav";
import ThemeProvider from "../../themes/ThemeContext";

const Home= React.forwardRef((props,ref) => {
    return (
        <Card className={styles.Card} ref={ref} cardName= "< Home >" cardNamec="</Home>">
            <Nav pages={props.pages} toggleTheme={props.toggleTheme}/>
            <div className={styles.homeContent}>
            <h1>Hi! I'm Oleksandr Kodovbetskyi!</h1>
            <p><i>Full Stack Developer</i></p>
            <Link to="/aboutme">About Me</Link>
            
            </div>
          
        </Card>
    )
})
export default Home