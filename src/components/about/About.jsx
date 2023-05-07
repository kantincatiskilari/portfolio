import "./about.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function About() {
  return (
    <div className="about">
      <div className="aboutMe">
        <h1 className="aboutMeTitle">
          <span>About </span>
          <span>Me</span>
        </h1>
        <div className="aboutMeContainer">
          <h3 className="aboutMeInfosTitle">Personal Informations</h3>
          <div className="aboutMeInfos">
            <div className="aboutMeInfo">
              <span>First Name: </span>
              <span>Fatih</span>
            </div>
            <div className="aboutMeInfo">
              <span>Last Name: </span>
              <span>Tassoker</span>
            </div>
            <div className="aboutMeInfo">
              <span>Age: </span>
              <span>26 Years</span>
            </div>
            <div className="aboutMeInfo">
              <span>Phone: </span>
              <span>+90 506 051 35 96</span>
            </div>
            <div className="aboutMeInfo">
              <span>Country: </span>
              <span>Turkey</span>
            </div>
            <div className="aboutMeInfo">
              <span>Email: </span>
              <span>fatihtassoker@gmail.com</span>
            </div>
            <div className="aboutMeInfo">
              <span>Languages: </span>
              <span>Turkish, English</span>
            </div>
            <div className="aboutMeInfo">
              <span>Freelance: </span>
              <span>Available</span>
            </div>
          </div>
          <div className="aboutMeDesc">
            Hello! My name is Fatih and I'm a software developer. I started with
            HTML, CSS, and JavaScript and then moved on to other technologies
            like React, Node.js, TypeScript, and React Native. With these tools,
            I have experience developing functional and aesthetically pleasing
            web and mobile applications.
            <br></br>
            <br></br> Some of my areas of expertise include web design with HTML
            and CSS, building web applications with JavaScript, and server-side
            development with Node.js. I try to make my projects more secure and
            scalable using TypeScript. Lately, I've been focusing on working
            with popular JavaScript libraries and frameworks like React and
            React Native, and continue to develop web and mobile applications
            with these technologies. <br></br>
            <br></br> As a responsible and team-oriented person, I do my best to
            provide solutions that meet client requirements and deliver a good
            user experience. I'm always open to learning and constantly
            improving myself, and I'm eager to explore new technologies.{" "}
            <br></br>
            <br></br>I hope you find an opportunity to work with me and I
            believe that I can add value to your project!
          </div>
        </div>
      </div>
      <div className="aboutMeBorder"></div>
      <div className="aboutMySkills">
        <h3 className="aboutMySkillsTitle">My Skills</h3>
        <div className="aboutMySkillsPercents">
          <div className="aboutMySkillsPercent">
            <CircularProgressbar
              value={90}
              text={`${90}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,140,0, ${90 / 100})`,
                textColor: "white",
                trailColor: "white",
                backgroundColor: "#3e98c7",
              })}
            />
            <div className="skillName">HTML</div>
          </div>
          <div className="aboutMySkillsPercent">
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,140,0, ${80 / 100})`,
                textColor: "white",
                trailColor: "white",
                backgroundColor: "#3e98c7",
              })}
            />
            <div className="skillName">CSS</div>
          </div>
          <div className="aboutMySkillsPercent">
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,140,0, ${80 / 100})`,
                textColor: "white",
                trailColor: "white",
                backgroundColor: "#3e98c7",
              })}
            />
            <div className="skillName">JAVASCRIPT</div>
          </div>
          <div className="aboutMySkillsPercent">
            <CircularProgressbar
              value={85}
              text={`${85}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,140,0, ${85 / 100})`,
                textColor: "white",
                trailColor: "white",
                backgroundColor: "#3e98c7",
              })}
            />
            <div className="skillName">REACT</div>
          </div>
          <div className="aboutMySkillsPercent">
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,140,0, ${75 / 100})`,
                textColor: "white",
                trailColor: "white",
                backgroundColor: "#3e98c7",
              })}
            />
            <div className="skillName">NODEJS</div>
          </div>
          <div className="aboutMySkillsPercent">
            <CircularProgressbar
              value={45}
              text={`${45}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,140,0, ${45 / 100})`,
                textColor: "white",
                trailColor: "white",
                backgroundColor: "#3e98c7",
              })}
            />
            <div className="skillName">TYPESCRIPT</div>
          </div>
          <div className="aboutMySkillsPercent">
            <CircularProgressbar
              value={50}
              text={`${50}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,140,0, ${50 / 100})`,
                textColor: "white",
                trailColor: "white",
                backgroundColor: "#3e98c7",
              })}
            />
            <div className="skillName">REACT-NATIVE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
