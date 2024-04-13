import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../assests/img/Vector1.png";
import Vector2 from "../../assests/img/Vector2.png";
import boy from "../../assests/img/my_image_edit_final.png";
// import boy from "../../assests/img/boy.png";
import glassesimoji from "../../assests/img/glassesimoji.png";
import thumbup from "../../assests/img/thumbup.png";
import crown from "../../assests/img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../assests/img/icons8-github-512.png";
import LinkedIn from "../../assests/img/icons8-linkedin-512.png";
import Instagram from "../../assests/img/icons8-instagram-512.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "../../assests/resume.pdf";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Rajendra Prasad K</span>
          <span>
            MERN Stack developer is responsible for developing and designing
            front-end web architecture and building interactive consumer data
            from multiple systems.
          </span>
        </div>
        <a href={Resume} download>
          <button className="button i-button">Hire me</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" className="my-image" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
