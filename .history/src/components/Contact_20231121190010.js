import React, { useState } from "react";
import reCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import Button from "./Button";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
      <p>Thank you!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
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
        <reCAPTCHA sitekey={""} />
        <Button title="Send" />
      </form>
    </div>
  );
};
