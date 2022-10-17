import React from "react";
import styles from "./Card.module.css"
const Card = React.forwardRef((props, ref)=>{
    return(
        <div className={styles.page}>
        <div ref={ref} className={styles.Card}>
           
            <div className={styles.CardBody}>
            <h4>{props.cardName}</h4>
                {props.children}
            <h4 className={styles.closinTag}>{props.cardNamec}</h4>
            </div>
           
        </div>
        </div>
    )
})
export default Card;