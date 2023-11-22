import React, { useState } from "react";
import "./Contact.css";
import Button from "./Button";
const initilFormDetails = {
  name: "",
  email: "",
  message: "",
};
export const Contact = () => {
  const [input, setInput] = useState(initilFormDetails);
  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState(
    Object.keys(input).reduce((accum, key) => ({ ...accum, [key]: null }), {})
  );

  const isValid = {
    name: (text) => text.length > 0,
    email: (text) => text.length > 0,
    message: (text) => text.length > 0,
  };
  const errorMessage = {
    name: "Please enter name",
    email: "Please enter email",
    message: "Please enter message",
  };
  const isValidRecord = (record) => {
    let isRecordValid = true;
    Object.keys(record).forEach((key) => {
      if (isValid[key](record[key])) {
        errors[key] = null;
      } else {
        errors[key] = errorMessage[key];
        isRecordValid = false;
      }
    });
    return isRecordValid;
  };
  const handleSubmit = async (e) => {
    // Handle form submission logic here
    if (isValidRecord(input)) {
      try {
        const response = await fetch("http://localhost:4001/contact-me", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receiverEmail: "oleksandr.kodovbetskyi@gmail.com",
            email: input.email,
            phone_number: "not provided",
            text: input.name + " " + input.message,
          }),
        });

        console.log(response);
        if (response.status === 200) setMessageSent(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      setErrors({ ...errors });
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
        {errors.name && <p style={{ color: "red" }}>Please enter your name</p>}
        <input
          type="text"
          placeholder="Your Name"
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
            setErrors({
              ...errors,
              ["name"]: null,
            });
          }}
        />
        {errors.email && <p style={{ color: "red" }}>Please enter email</p>}
        <input
          type="email"
          placeholder="Your Email"
          value={input.email}
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
            setErrors({
              ...errors,
              ["email"]: null,
            });
          }}
        />
        {errors.message && (
          <p style={{ color: "red" }}>Please enter some message</p>
        )}
        <textarea
          placeholder="Your Message"
          value={input.message}
          onChange={(e) => {
            setInput({ ...input, message: e.target.value });
            setErrors({
              ...errors,
              ["message"]: null,
            });
          }}
        ></textarea>
        <Button title="Send" to="#" onClick={() => handleSubmit()} />
      </form>
    </div>
  );
};
