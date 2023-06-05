import React from "react"
import './Button.css'
import { Link } from "react-router-dom";
const Button = (props) =>{
    return (
        <Link className="custom-button" to={props.to}><span>{props.title}</span></Link>
    )
}
export default Button;