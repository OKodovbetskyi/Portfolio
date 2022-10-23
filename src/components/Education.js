import React from "react";
import Card from "./Card";
import styles from "./Education.modules.css";
const Education = React.forwardRef((props,ref) =>{
    return (
        <div className={styles.Education}>
        <Card ref={ref} cardName="<Education>" cardNamec="</Education>">
        <div>
            <h3>Kingston University (2020-2023)</h3>
        </div>
        </Card>
        </div>
    )
})
export default Education;