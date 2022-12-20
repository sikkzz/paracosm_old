import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./Loading.scss";

const Loading = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("defalut");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
  };

  const onApplyClick = () => {
    navigate("/phase");
    window.location.reload();
  };

  return (
    <>
      <div
        className="outer"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        onClick={onApplyClick}
      >
        <div className="inner">
          <div className="image_container">
            <img
              src={images.PhaseMobileImg}
              className="icon"
              alt="mobile_image"
            />
          </div>
          <div className="title_container">
            {/* APPLY NOW HERE */}
            <div className="cursor_container">
              <img src={images.PhaseCursor} alt="cursor" />
            </div>
          </div>
        </div>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        >
          <p className="test">APPLY NOW HERE</p>
        </motion.div>
      </div>
    </>
  );
};

export default Loading;
