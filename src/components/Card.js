import React from "react";
import styles from "./Card.module.css"
import Footer from "./Footer";
const Card = React.forwardRef((props, ref)=>{
    return(
        <div className={styles.page}>
        <div ref={ref} className={styles.Card}>
           
            <div className={styles.CardBody}>
            <h2 className={styles.header}>   {props.cardName}</h2>
                {props.children}
            </div>
           
        </div>
        <Footer />
        </div>
    )
})
export default Card;