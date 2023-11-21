import React, { useState } from "react";

import "./Contact.css";
import Button from "./Button";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState([]);
  
  const handleSubmit = async (e) => {
    // Handle form submission logic here
    if (name.length===""){
        setErrors([...errors, "name"])
    }
    if () {
      const response = await fetch("https://softwarehub.uk/emailservice/");
      if (response.status === 200) setMessageSent(true);
    } 
  };

  return (
    <div className="projects-container">
      <h1>Contact.</h1>
      <p>
        Email me directly on{" "}
        <span className="hightlight">
          <b>oleksandr.kodovbetskyi@gmail.com</b>
        </span>
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {messageSent && (
          <p>Your message has been successfully sent. Thank you!</p>
        )}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onError={"Please enter your name"}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button title="Send" to="#" onClick={() => handleSubmit()} />
      </form>
    </div>
  );
};
