import React, { useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>rajkudumala81@gmail.com</span>
        </div>

        <span>
          <a href="https://www.freepik.com/free-vector/concept-landing-page-with-mobile-design_6030122.htm#query=app%20development%203d&position=16&from_view=keyword&track=ais&uuid=79ebbc3c-6c9d-462b-82e1-213ba8ec271b">
            downloaded icons and all Freepik
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
