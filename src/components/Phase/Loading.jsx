import React from "react";

import { images } from "../../constants";

import "./Loading.scss";

const Loading = () => {

  return (
    <>
      <div className="outer">
          <div className="inner">
            <img
              src={images.PhaseMobileImg}
              className="icon"
              alt="mobile_image"
            />
          <p className="title">APPLY NOW HERE</p>

          </div>
      </div>
    </>
  );
};

export default Loading;
