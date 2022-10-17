import React from "react";
import Card from "./Card";
const Education = React.forwardRef((props,ref) =>{
    return (
        <Card ref={ref} cardName="<Education>" cardNamec="</Education>">
        <div>
            <h3>Kingston University (2020-2023)</h3>
        </div>
        </Card>
    )
})
export default Education;