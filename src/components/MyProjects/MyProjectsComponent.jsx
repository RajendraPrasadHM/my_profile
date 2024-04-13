import React, { useContext } from "react";
// import navbar from "../Navbar/Navbar";
import { useParams, Link } from "react-router-dom";
import Marketron from "../../assests/img/Marketron.png";
import Cukzz from "../../assests/img/Cukzz.png";
import VeriOnce from "../../assests/img/VeriOnce.png";
import LeftArrow from "../../assests/img/left-arrow.png";
import TechSkills from "../../assests/img/techSkills.jpg";
import Roles from "../../assests/img/roles1.jpg";
import CodeQuality from "../../assests/img/codeQuality1.png";
import { themeContext } from "../../Context";
import "./MyProject.css";

const MyProjectsComponent = () => {
  // console.log(projectName, "asdfasdfsd");
  const routeParams = useParams();
  const theme = useContext(themeContext);
  let projectName = routeParams.projectName.toString();
  const darkMode = theme.state.darkMode;
  const projectDetails = [
    {
      projectName: "Marketron",
      technicalSkills: [
        "Node.Js",
        "React.Js",
        "HTML",
        "Boostrap",
        "Express.Js",
        "Typescript",
        "JavaScript",
        "PostgreSQL",
        "AWS S3 Bucket",
        "Authentication",
        "JEST",
        "Sonar",
        "GIT HUB",
        "JOI Validation",
        "Middleware’s",
        "Unit Testing.",
      ],
      rolesAndResponsibility: (
        <>
          <ul>
            <li className="roles-list">
              Designing, developing, and maintaining the server-side components
              of the Marketron application using backend technologies Node.js.
            </li>
            <li className="roles-list">
              Developing API endpoints for communication with the frontend and
              other services (npm pkgs publish).
            </li>
            <li className="roles-list">
              Implementing security measures, authentication, and authorization
              mechanisms to protect sensitive data and add unit test cases
            </li>
            <li className="roles-list">
              Designing and optimizing the database schema to efficiently store
              and manage data related to multimedia advertising campaigns, media
              organizations, advertisers, and revenue streams
            </li>
            <li className="roles-list">
              Writing and executing unit tests and participating in code reviews
              to ensure the correctness and quality of the backend codebase.
            </li>
          </ul>
        </>
      ),
      description: (
        <>
          <i>"Marketron"</i> is a cutting-edge technology company at the
          forefront of revolutionizing the broadcast and media industry,
          empowering visionaries to bolster their market dominance. Through a
          strategic emphasis on scalability, predictability, and reliability,
          Marketron delivers a comprehensive suite of innovative products and
          services designed to streamline the planning, pricing, and execution
          of multimedia advertising campaigns. Spanning multiple revenue streams
          such as television, radio, O&O, and digital media, Marketron equips
          users with the tools and resources needed to drive success and achieve
          growth in a dynamic and competitive marketplace." <br /> <br />
          Marketron provides advanced analytics and reporting tools that offer
          valuable insights into campaign performance, audience engagement, and
          ad effectiveness. Users can access real-time data and metrics to make
          informed decisions and optimize their advertising strategies.
          Marketron's products seamlessly integrate with existing systems and
          workflows, offering automation capabilities that streamline the
          advertising process. This automation enhances efficiency, reduces
          manual tasks, and improves overall campaign performance. Marketron
          enables users to target specific audience segments with precision and
          accuracy, leveraging data-driven targeting strategies to reach the
          right audience with the right message.
        </>
      ),
      codeQuality: (
        <>
          <ul>
            <li className="roles-list">
              Tools like ESLint can help identify and enforce coding standards,
              detect potential errors, and ensure consistency in the codebase.
            </li>
            <li className="roles-list">
              Implement unit tests, integration tests, and end-to-end tests to
              ensure the functionality of the codebase and catch bugs early in
              the development process.
            </li>
            <li className="roles-list">
              Regular code reviews with team members can help identify potential
              issues, improve code readability, and ensure adherence to best
              practices.
            </li>
            <li className="roles-list">
              Evaluate the codebase for maintainability, scalability, and
              modularity to ensure that the project can be easily extended and
              maintained in the future.
            </li>
            <li className="roles-list">
              Implement security best practices to protect against
              vulnerabilities, such as input validation, data sanitization, and
              proper authentication and authorization mechanisms.
            </li>
          </ul>
        </>
      ),
      projectImage: Marketron,
    },
    {
      projectName: "Cukzz",
      technicalSkills: [
        "Node.Js",
        "Express.Js",
        "React.Js",
        "HTML",
        "Boostrap",
        "Typescript",
        "JavaScript",
        "PostgreSQL",
        "Middleware’s",
        "AWS S3 Bucket",
        "Authentication",
      ],
      rolesAndResponsibility: (
        <>
          <ul>
            <li className="roles-list">
              Design, develop, and implement robust and scalable backend systems
              to handle various functionalities of the Cukzz app, including user
              management, order processing, payment integration, and data
              storage.
            </li>
            <li className="roles-list">
              Optimize and maintain the database schema, ensuring data integrity
              and efficient querying for seamless app performance.
            </li>
            <li className="roles-list">
              Create and manage APIs that facilitate smooth communication
              between the frontend and backend, enabling the app to deliver a
              seamless user experience.
            </li>
            <li className="roles-list">
              Integrate various third-party services, such as payment gateways
              and cloud services, to enhance the functionality and features of
              the Cukzz app.
            </li>
          </ul>
        </>
      ),
      description: (
        <>
          <i>"Cukzz"</i> is a ground-breaking food app that empowers individuals
          with outstanding culinary abilities, enabling them to tap into their
          talent and enhance their quality of life. By linking skilled cooks
          with eager consumers, Cukzz offers a platform for talented individuals
          to earn income and elevate their standard of living for themselves and
          their families. This innovative app presents opportunities for food
          lovers to exhibit their skills, establish culinary enterprises, and
          achieve their goals. With Cukzz, cooking transforms into a revenue
          stream and a source of empowerment, fostering a vibrant community of
          culinary entrepreneurs and satisfied patrons. <br /> <br />
          "Cukzz" provides a diverse range of menu options curated by talented
          cooks, offering consumers a wide selection of culinary delights to
          choose from. Users can explore different cuisines, flavors, and dishes
          tailored to their preferences. The app allows customers to customize
          their orders based on dietary restrictions, preferences, and portion
          sizes. This level of customization ensures a personalized dining
          experience for each user.
        </>
      ),
      codeQuality: (
        <>
          <ul>
            <li className="roles-list">
              Tools like ESLint can help identify and enforce coding standards,
              detect potential errors, and ensure consistency in the codebase.
            </li>
            <li className="roles-list">
              Implement unit tests, integration tests, and end-to-end tests to
              ensure the functionality of the codebase and catch bugs early in
              the development process.
            </li>
            <li className="roles-list">
              Regular code reviews with team members can help identify potential
              issues, improve code readability, and ensure adherence to best
              practices.
            </li>
            <li className="roles-list">
              Evaluate the codebase for maintainability, scalability, and
              modularity to ensure that the project can be easily extended and
              maintained in the future.
            </li>
            <li className="roles-list">
              Implement security best practices to protect against
              vulnerabilities, such as input validation, data sanitization, and
              proper authentication and authorization mechanisms.
            </li>
          </ul>
        </>
      ),
      projectImage: Cukzz,
    },
    {
      projectName: "VeriOnce",
      technicalSkills: [
        "Node.Js",
        "Express.Js",
        "React.Js",
        "HTML",
        "MUI",
        "Typescript",
        "Mongo DB",
        "GIT LAB",
        "AWS S3 bucket",
        "Authentication",
        "Middleware’s",
      ],
      rolesAndResponsibility: (
        <>
          <ul>
            <li className="roles-list">
              Responsible for designing and developing the server-side
              components of the Veri Once platform using Node.js backend
              technology.
            </li>
            <li className="roles-list">
              Developing API endpoints for communication with the frontend and
              other services.
            </li>
            <li className="roles-list">
              Implementing security measures, authentication, and authorization
              mechanisms to protect sensitive data.
            </li>
          </ul>
        </>
      ),
      description: (
        <>
          <i>“Veri Once”</i>is an application that utilizes enterprise-grade
          block chain technology to secure and store digital resumes and
          verified employment histories. It ensures the tamper-proof nature of
          documents, providing a reliable platform for job seekers and employers
          to validate credentials and work experience. <br />
          <br />
          Overall, <strong>"Veri Once"</strong> aims to streamline the hiring
          process, enhance the credibility of job applicants, and provide a
          secure and trustworthy platform for validating resumes and employment
          histories through the use of blockchain technology.
        </>
      ),
      codeQuality: (
        <>
          <ul>
            <li className="roles-list">
              Tools like ESLint can help identify and enforce coding standards,
              detect potential errors, and ensure consistency in the codebase.
            </li>
            <li className="roles-list">
              Implement unit tests, integration tests, and end-to-end tests to
              ensure the functionality of the codebase and catch bugs early in
              the development process.
            </li>
            <li className="roles-list">
              Regular code reviews with team members can help identify potential
              issues, improve code readability, and ensure adherence to best
              practices.
            </li>
            <li className="roles-list">
              Evaluate the codebase for maintainability, scalability, and
              modularity to ensure that the project can be easily extended and
              maintained in the future.
            </li>
            <li className="roles-list">
              Implement security best practices to protect against
              vulnerabilities, such as input validation, data sanitization, and
              proper authentication and authorization mechanisms.
            </li>
          </ul>
        </>
      ),
      projectImage: VeriOnce,
    },
  ];
  const projectObject =
    projectName &&
    projectDetails.find((project) => {
      return project.projectName === projectName;
    });

  return (
    <>
      <div className="my-projects">
        <div className="header">
          <div className="left-home">
            <Link
              to="/"
              className="home-link"
              style={{ color: darkMode ? "white" : "" }}
            >
              <img src={LeftArrow} alt="" />{" "}
              <span className="home-text">Home</span>
            </Link>
          </div>
          <div
            className="right-project-name"
            style={{ color: darkMode ? "white" : "" }}
          >
            {projectObject.projectName}
          </div>
        </div>
        <div className="project-details">
          <div className="prodject-description">
            <span className="side-headings">Descriptipon:</span> <br></br>
            <p>{projectObject.description}</p>
          </div>
          <div className="project-image">
            <img
              src={projectObject.projectImage}
              className="img-section"
              alt=""
            />
          </div>
        </div>
        <div className="project-skills">
          <div className="l-skill-icons">
            <span className="side-headings">Technical Skills To Be Used:</span>
            <br></br>
            <img src={TechSkills} className="img-section" alt="" />
          </div>
          <div className="r-skills">
            <ul
              style={{
                columnCount: 2,
              }}
            >
              {projectObject.technicalSkills.map((skill) => {
                return <li className="skill-list">{skill}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="role-responsibilities">
          <div className="l-roles">
            <span className="side-headings">Roles & Responsibilites:</span>
            <br></br>
            <p>{projectObject.rolesAndResponsibility}</p>
          </div>
          <div className="r-roles-icons">
            <img src={Roles} className="img-section" alt="" />
          </div>
        </div>
        <div className="code-quality">
          <div className="l-code-quality-icon">
            <span className="side-headings">Code Quality:</span> <br></br>
            <img src={CodeQuality} className="img-section" alt="" />
          </div>
          <div className="r-code-quality">
            <p>{projectObject.codeQuality}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjectsComponent;
