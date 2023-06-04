import React from "react"
import './Button.css'
const Button = (props) =>{
    return (
        <a className="custom-button" href={props.to}><span>{props.title}</span></a>
    )
}
export default Button;