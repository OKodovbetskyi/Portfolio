import React from "react";
import Card from "./Card";
import "./Education.css";
import IconUni from "../assets/icons8-map-pin-32.png";
import Skills from "./Skills";

import circle from "../assets/icons8-circle-50.png";

import arrowright from "../assets/icons8-arrow-right-50.png";
import { Link } from "react-router-dom";
const Education = (props, ref) => {
  return (
    <div className="projects-container">
      <h1 className="abouttitle">About Me.</h1>
      <h3 className="section-title">Experience</h3>
      <div className="experience-container">
        <div className="Job">
          <img className="circle" src={circle} alt="" />
          <h5>
            EVRI, IT Graduate Scheme{" "}
            <span className="datesworked">03/2020 to 12/2022</span>
          </h5>
          <li>
            Providing training and guidance to new delivery drivers on safe
            driving practices, package handling, and customer service.
          </li>
          <li>
            Evaluating the performance of new drivers and providing feedback and
            coaching to help them improve their skills.
          </li>
          <li>
            Managing my time effectively to ensure that all deliveries are
            completed by the requested deadline.
          </li>
          <li>
            Delivering packages to customers in a timely and efficient manner.
          </li>
        </div>
        <div className="Job">
          <h5>Kingston University </h5>
          <div className="experience-container">
            <img className="circle" src={circle} alt="" />
            <h5>
              Technology Internship{" "}
              <span className="datesworked">06/2023 to 08/2023</span>
            </h5>
            <li>
              Leading a high-performing team of developers throughout the entire
              front-end project development lifecycle.
            </li>
            <li>
              Maintaining the Unibase API to ensure its reliability and smooth
              functionality (utilising NodeJs, Express and MySql)
            </li>
            <li>
              Successfully deployed the backend infrastructure to AWS (RDS,
              Amplify), implementing CI/CD practices for efficient and
              error-free deployments.
            </li>
            <li>
              Collaborating with stakeholders to gather requirements and drive
              backend development initiatives, aligning them with organisational
              goals.
            </li>
            <div className="Job">
              <h5>
                Academic Mentor{" "}
                <span className="datesworked">09/2022 to 06/2023</span>
              </h5>
              <li>
                Breaking down complex programming concepts into simple,
                easy-to-understand language.
              </li>
              <li>
                Facilitating and assisting in programming workshops and labs.
              </li>
              <li>
                Providing feedback to lecturers on student performance and areas
                for improvement.
              </li>
            </div>
          </div>
        </div>
        <div className="Job">
          <img className="circle" src={circle} alt="" />
          <h5>
            Amazon Prime, Delivery Driver{" "}
            <span className="datesworked">03/2020 to 12/2022</span>
          </h5>
          <li>
            Providing training and guidance to new delivery drivers on safe
            driving practices, package handling, and customer service.
          </li>
          <li>
            Evaluating the performance of new drivers and providing feedback and
            coaching to help them improve their skills.
          </li>
          <li>
            Managing my time effectively to ensure that all deliveries are
            completed by the requested deadline.
          </li>
          <li>
            Delivering packages to customers in a timely and efficient manner.
          </li>
        </div>
        <div className="Job">
          <img className="circle" src={circle} alt="" />
          <h5>
            Starbucks, Barista{" "}
            <span className="datesworked"> 03/2020 to 03/2021</span>
          </h5>
          <li>
            Sharing knowledge and expertise with new team members and providing
            guidance on best practices.
          </li>
          <li>
            {" "}
            Informing customers about current promotions and specials to
            encourage them to try new menu items.
          </li>
          <li>
            {" "}
            Using product knowledge to answer questions about ingredients and
            nutritional information.
          </li>
          <li>
            {" "}
            Supporting team members by performing additional tasks during peak
            hours, such as restocking supplies, cleaning equipment, or taking
            orders at the register.{" "}
          </li>
        </div>
        <div className="Job">
          <img className="circle" src={circle} alt="" />
          <h5>
            Sir Christopher Wren Hotel & Spa, Team Supervisor{" "}
            <span className="datesworked"> 03/2017 to 02/2020</span>
          </h5>
          <li>
            Effectively communicating with team members, managers, and customers
            to ensure that everyone is on the same page and that customer needs
            are met.
          </li>
          <li>
            {" "}
            Ensuring that food orders are accurate and delivered in a timely
            manner.
          </li>
          <li>
            {" "}
            Planning and coordinating events such as private parties, catering
            events, and holiday celebrations.
          </li>
          <li>
            {" "}
            Responsible for accurate cash handling and balancing transactions at
            the end of the day.{" "}
          </li>
        </div>
      </div>
      <h3 className="section-title">Skills</h3>
      <Skills />

      <h3 className="section-title">Education</h3>
      <div className="educationContent">
        <div>
          <h4>BSc (Hons) Computer Science</h4>
          <p>Kingston University London</p>
        </div>
        <div className="location">
          <p>
            <b>2020 - Current</b>
          </p>
          <p>
            <img className="imagepin" src={IconUni} alt="" />
            Kingston-Upon-Thames
          </p>
        </div>
        <div className="location">
          <p>
            <b>Grade</b>
          </p>
          <p>First Class</p>
        </div>
        <div></div>
      </div>
      <div className="linkstonext">
        <Link to="/projects">Lets Continue To Projects </Link>
        <img className="arrowright" src={arrowright} alt="arrow right" />
      </div>
    </div>
  );
};
export default Education;
