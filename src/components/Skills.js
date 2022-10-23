import Card from "./Card"
import React from "react"
const Skills = React.forwardRef((prop,ref) =>{
    return (
        <Card ref={ref} cardName="<Skills> " cardNamec="</Skills>" >
        <ul>
        <li>Java </li>
        <li>JS </li>
        <li>HTML </li>
        <li>CSS</li>
  
    </ul>
            
        </Card>
    )
})
export default Skills;