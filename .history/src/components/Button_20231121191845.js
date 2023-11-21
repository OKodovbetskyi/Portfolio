import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const Button = (props) => {
  return (
    <Link
      className={`${props.version == 2 && "version2"} custom-button`}
      onClick={props.onClick}
      to={props.to}
    >
      <span>{props.title}</span>
    </Link>
  );
};
export default Button;
