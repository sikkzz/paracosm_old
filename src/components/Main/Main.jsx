import React, { useState } from "react";
import {images, videos} from '../../constants'
import './Main.scss'

const Main = () => {
  const [videoOn, setVideoOn] = useState(0);
  const videoCheck = () => {
    setVideoOn(1);
  };
  return (
    <div className="main_container">
      {videoOn === 0 ? (
        <video
          className="main_video"
          src={videos.MainVideo}
          autoPlay
          muted
          type="video/mp4"
          onEnded={() => videoCheck()}
        />
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={images.MainFrame} className="main_frame" alt="main_frame" />
      )}
    </div>
  );
};

export default Main;
