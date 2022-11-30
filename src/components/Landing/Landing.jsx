import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { videos } from "../../constants";
import { images } from "../../constants";
import "./Landing.scss";

const Landing = () => {
  const [videoOn, setVideoOn] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/phase");
  };

  const videoCheck = () => {
    setVideoOn(1);
  };

  return (
    <div className="landing_container">
      {videoOn === 0 ? (
        <>
          <video
            className="landing_video"
            src={videos.LandingVideo}
            // src={videos.FaqVideo}
            autoPlay
            muted
            // loop
            type="video/mp4"
          />

          <img
            className="landing_icon_helmet"
            src={images.LandingHelmetImg}
            alt="helmet_image"
            onClick={handleClick}
          />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Landing;
