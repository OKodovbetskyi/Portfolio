import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { ProjectTab } from "./ProjectTab";
import arrowright from "../assets/icons8-arrow-right-50.png";
import ProjectDescription from "./ProjectDescription";
import "./ProjectTab.css";
import deliverabletracking from "../assets/studentdash1.png";
import androidapp from "../assets/androidapp.png";
import HealthyTravel from "../assets/HealthyTravel.png";
import DEHPUK from "../assets/dehpuk.png";
import MultiStepForm from "../assets/multi-step-form.png";
import SocialMedia from "../assets/SocialMedia.png";

const Projects = React.forwardRef((props, ref) => {
  const [selected, setSelected] = useState({
    Devs: true,
    Healthy: true,
    Reading: true,
    Score: true,
  });
  const handleSelect = (name) => {
    if (selected[name] === true) {
      setSelected({ [name]: false });
    } else {
      setSelected({ [name]: true });
      console.log(selected);
    }
    console.log(selected.Reading);
  };
  const selectedClass = selected.Devs && "selectedProj";
  return (
    <div className="projects-container">
      <h1 className="projectTitle">Projects.</h1>

      <div className="project-tabs">
        <ProjectTab
          header="Chatty App (In development)"
          type="Experimental"
          dates="12/2023 - Current"
          open={true}
          description={
            <ProjectDescription
              technologies={[
                "TypeScript",
                "React Native",
                "NodeJs",
                "GraphQL",
                "Apollo Server",
                "Apollo Client",
                "Expo",
                "OpenAI API",
                "S3 Bucket",
                "BCrypt",
                "Prisma ORM",
                "PostgreSQL",
                "Apollo PubSub",
                "UI Design",
              ]}
              userTypes={["Student", "Supervisor", "Admin"]}
              description={
                "This is the social media project that allows users with similar interests to connect and share posts. Users can create an account and add their interests, which the system uses to suggest content based on their preferences. When a user posts something, it will appear for other users who share the same interests. Additionally, users can choose to view specific categories, and the app provides functionality to edit personal profiles, schedule post publishing, and chat with other users."
              }
              githubURL={"https://github.com/OKodovbetskyi/chatapp.git"}
              githubLabel={"Front-End Code"}
              githubExtraURL={
                "https://github.com/OKodovbetskyi/Chatty-App-Backend-.git"
              }
              githubExtraLabel={"Back-End Code"}
              image={SocialMedia}
              features={[
                "Cross Platform",
                "User Profile",
                "Post Classifier",
                "Custom Post Suggestions (Based on interests)",
                "Chat",
              ]}
            />
          }
        />
        <ProjectTab
          header="Checkout Form Project"
          type="Front-End Mentor"
          dates="02/2024 - 02/2024"
          open={false}
          description={
            <ProjectDescription
              technologies={[
                "JavaScript",
                "React",
                "JSX",
                "CSS",
                "UseContext Hook",
                "React Router",
              ]}
              userTypes={["Student", "Supervisor", "Admin"]}
              description={
                "This is the checkout form that lets users enter their details, choose a subscription plan, and add-ons for the product. This mini project was completed for Front End Mentor in order to practice my front-end development skills."
              }
              websiteURL="https://www.multi-step-form.softwarehub.uk/"
              githubURL="https://github.com/OKodovbetskyi/multi-step-checkout.git"
              image={MultiStepForm}
              features={["SPA", "Responsive Design", "Cards", "Contact Form"]}
            />
          }
        />
        <ProjectTab
          header="DEHPUK LTD Portfolio Landing Page"
          type="Clients' Project"
          dates="11/2023 - 12/2023"
          open={false}
          description={
            <ProjectDescription
              technologies={["HTML", "CSS", "JavaScript", "JQuery", "Axios"]}
              userTypes={["Student", "Supervisor", "Admin"]}
              description={
                "This project is a landing website designed and built to generate leads for a renewable energy specialist. It provides clear information about the benefits of going green and highlights the contractor's services. The user-friendly design and strong call to action encourage visitors to convert into paying customers."
              }
              websiteURL="https://dehp.uk/"
              image={DEHPUK}
              features={["Single Page", "Responsive Design", "Contact Form"]}
            />
          }
        />
        <ProjectTab
          header="Deliverable Tracking System"
          type="Clients' Project"
          dates="10/2022 - 05/2023"
          open={false}
          description={
            <ProjectDescription
              technologies={[
                "React",
                "FetchAPI",
                "CSS",
                "NodeJS",
                "Express",
                "Joi Validator",
                "RESTful API",
                "MySQL MariaDB",
                "JSON",
              ]}
              userTypes={["Student", "Supervisor", "Admin"]}
              description={
                "This system is designed to improve collaboration between supervisors and students, ensuring effective communication, transparent progress tracking, and productive teamwork. This project underscores my capabilities in developing practical and efficient solutions that improve everyday interactions."
              }
              githubURL="https://github.com/OKodovbetskyi/ProjectDeliverablesTracking.git"
              image={deliverabletracking}
              features={[
                "Deliverable Creation and Edition",
                "Student and Supervisor collaboration",
                "Task Assignment",
                "Progress Tracking",
                "Search",
                "Responsive Design",
                "Secure Database",
              ]}
            />
          }
        />
        <ProjectTab
          header="Healthy Travel Mobile App"
          type="Assignment"
          dates="02/2023 - 03/2023"
          description={
            <ProjectDescription
              technologies={[
                "React Native",
                "NodeJS",
                "Express",
                "Axios",
                "AmadeusAPI (for flight ticketing, accomdation)",
                "OpenAI API",
                "Joi Validator",
                "RESTful API",
                "Persistant Storage",
                "MongoDB",
              ]}
              features={[
                "Cross Platform",
                "Inbuilt ChatBot Assistance",
                "External Database",
                "Flight Search",
                "Doctor Search",
                "Accomodation Search",
                "Real-time prices",
              ]}
              image={HealthyTravel}
              githubURL={
                "https://github.com/OKodovbetskyi/DocTravelMobileApplication.git"
              }
              description={
                "HealthyTravel is a comprehensive mobile application for both IOS and Android designed to assist individuals who need to visit a doctor in another country. This user-friendly app aims to simplify the process of planning and organizing medical trips by providing essential features for flight search, real-time pricing, accommodation search, and access to doctors' information. With the added convenience of an inbuilt chatbot, HealthyTravel ensures that users can get instant answers to their questions and concerns."
              }
            />
          }
        />
        <ProjectTab
          header="Reading Diary App"
          type="Assignment"
          dates="01/2022 - 02/2022"
          description={
            <ProjectDescription
              technologies={["JAVA", "Android Studio", "OOP"]}
              description={
                "Reading Diary App is a mobile application developed for a local primary school to digitize their student reading diary. The current reading diary is a physical book, and the school wants a more environmentally friendly solution. The app allows users to log their reading activities, including the date, book title, page numbers read, and comments from parents or teachers. It offers additional possibilities for logging information beyond what a physical diary can provide. The diary can be shared with teacher over email. The app is designed with a child-friendly user interface."
              }
              features={[
                "Android Platform",
                "Create Diary",
                "Edit Diary",
                "Generates Email Template",
                "Search",
                "User Friendly",
              ]}
              githubURL="https://github.com/OKodovbetskyi/MADAndroidStudioApplication.git"
              image={androidapp}
            />
          }
        />
      </div>
      <div className="linkstonext">
        <Link to="/">Return To Home </Link>
        <img className="arrowright" src={arrowright} alt="arrow right" />
      </div>
    </div>
  );
});
export default Projects;
