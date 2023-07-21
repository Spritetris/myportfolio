import React from "react";
import "./Home.css";
import profile from "../images/profile.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillMail,
  AiTwotonePhone,
  AiFillFilePdf,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { skills } from "../data/skill";
import Skill from "./Skill";
import Footer from "./Footer";
import Project from "./Project";
import { projectList } from "../data/project";
import resume from'../Aunchisa_resume.pdf'

const PDF_FILE_URL = "http://localhost:3001/Aunchisa_resume.pdf";

const Home = () => {
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const [data, setData] = useState(skills);
  const [projectData, setProjectData] = useState(projectList);
  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="title">Hello! I'm Aunchisa </div>
          <div className="content">
            I'm highly motivated and dedicated recent graduate with a strong
            passion for Front-End Development. Eager to begin a career in web
            development and contribute to creating exceptional user experiences
          </div>{" "}
          <div className="title2">Contact :</div>
          <span className="content">
            <AiTwotonePhone style={{ marginRight: 10 }} />
            (+66) 649949554
          </span>
          <span className="content">
            <AiFillMail style={{ marginRight: 10 }} />
             Aunchisatris@gmail.com
          </span>
          <span className="content">
            <AiFillLinkedin style={{ marginRight: 10 }} />
            <a href="https://www.linkedin.com/in/aunchisa-trisichaiyanont-5a19a821a">
              {" "}
              Aunchisa Trisichaiyanont
            </a>
          </span>
          <span className="content">
            <AiFillFilePdf style={{ marginRight: 5 }} />
            <Link to={resume} download="Aunchisa_resume"  target="_blank"  rel="noreferrer"><button
              // onClick={() => {
              //   downloadFile(PDF_FILE_URL);
              // }}
            >
              Download resume
            </button></Link>
          </span>
        </div>{" "}
        <img className="img_profile" src={profile}></img>
      </div>
      {/* <div className="title2">My skills :</div>
      <div className="container2">
        <div className="box">JavaScript</div>
      </div> */}
      <div className="title3" id="skill">
        Skills
      </div>
      <div className="container2">
        {data.map((item) => {
          return <Skill key={item.id} {...item} />;
        })}
      </div>

      <div className="title3" id="project">
        Projects
      </div>
      <div className="container2">
        {projectData.map((item) => {
          return <Project key={item.id} {...item} />;
        })}
      </div>

      {/* end component */}
    </div>
  );
};

export default Home;
