import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Marketron from "../../assests/img/Marketron.png";
import Cukzz from "../../assests/img/Cukzz.png";
import VeriOnce from "../../assests/img/VeriOnce.png";
import { themeContext } from "../../Context";
// import MyProjectsComponent from "../MyProjects/MyProjectsComponent";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <Link to="/my-project-details/Marketron">
            <img className="project-image" src={Marketron} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/my-project-details/Cukzz">
            <img className="project-image" src={Cukzz} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/my-project-details/VeriOnce">
            <img className="project-image" src={VeriOnce} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
