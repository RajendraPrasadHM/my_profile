import React from "react";
import "./Footer.css";
import Wave from "../../assests/img/wave4.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="footerImage"
        src={Wave}
        alt=""
        style={{ width: "100%", height: "50%" }}
      />
      <div className="f-content">
        <span>rajkudumala81@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
