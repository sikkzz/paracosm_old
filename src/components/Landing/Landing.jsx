import React from "react";
import { useNavigate } from "react-router-dom";
import { videos } from "../../constants";
import { images } from "../../constants";
import "./Landing.scss";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/phase");
  };


  return (
    <div className="landing_container">
      <video
        className="landing_video"
        autoPlay
        muted
        loop
        src={videos.LandingVideo}
        type="video/mp4"
      />

      <img
        className="landing_icon_helmet"
        src={images.LandingHelmetImg}
        alt="helmet_image"
        onClick={handleClick}
      />
    </div>
  );
};

export default Landing;
