import React from "react";
import "./Phase.scss";

import { images } from "../../constants";

const Phase = () => {
  return (
    <div className="page_container">
       <div className="header">

        <div className="mobile">
          <p className="header_button">HOME</p>
          <p className="header_button">
            <img src={images.PhaseCastingImg} alt="casting_image" />
          </p>
        </div>

        <div className="pc">
          <div className="title">
            <div className="home">HOME</div>
            <div className="image">
              <img src={images.PhaseCastingImg} alt="casting_image" />
            </div>
          </div>
        </div>
      </div>

        <div className="info_container">
          <p className="title">VIP CONCIERGE SERVICE</p>
          <p className="content">
            CA$TING LIST is not for everyone.
            <br />
            In fact, it is limited to only 10% of total supply to ensure the
            highest
            <br />
            caliber of personal service is provided to every member.
          </p>
          <p className="content">
            Become a CA$TING LIST member today and enjoy our concierge
            <br />
            service ready to support VIP Preview.
          </p>
        </div>
        <div className="cartoon">
          <img
            src={images.PhaseMobileCartoon}
            alt="cartoon_image"
          />
        </div>
        <div className="info_container">
          <p className="title">
            CA$TING LIST MEMBERS ENJOY THESE
            <br />
            EXCLUSIVE PRIVILEGES
          </p>
        </div>

        <div className="info">
          <div className="info_list">
            <p className="info_list_icon" />
            <p >
              Limited Membership
            </p>
          </div>
          <div className="info_list">
            <p className="info_list_icon" />
            <p >
              24-Hour Concierge Service
            </p>
          </div>
          <div className="info_list">
            <p className="info_list_icon" />
            <p >
              VIP PREVEIW
              <br />
            </p>
            
          </div>
          <span>
                CA$TING LIST Member can buy preview the collection before public
                sale.
            </span>

          <div className="info_list">
            <p className="info_list_icon" />
            <p >
              Exclusive Rewards Program
            </p>
          </div>
          <div className="info_list">
            <p className="info_list_icon" />
            <p >
              Luxury Gifts (No More Black Hoodie)
            </p>
          </div>
        </div>

        <div className="casting_image_container">
          <img src={images.Phase1MainImg} alt="casting_image" />
        </div>


        <div className="apply_container">
          <div className="apply_text">APPLY NOW</div>
        </div>
        <div className="apply_subtitle">
          APPLY HERE FOR THE PARACOSM CASTING LIST
        </div>
        
        <div className="casting_list_container">
          <div className="">
            <span>OPEN CASTING LIST OPEN CASTING LIST OPEN CASTING</span>
            <span>OPEN CASTING LIST OPEN CASTING LIST OPEN CASTING </span>
            <span>OPEN CASTING LIST OPEN CASTING LIST OPEN CASTING  </span>
          </div>
        </div>

        <div className="bottom">
          <p>Follow the PARACOSM news:</p>
          <div className="phase1_mobile_social_wrapper">
            <img
                src={images.PhaseSocialIcon1}
                className="phase1_mobile_social_icon"
                alt="sociai_icon1"
              />
            <img
                src={images.PhaseSocialIcon2}
                className="phase1_mobile_social_icon"
                alt="sociai_icon1"
              />
          </div>
        </div>
    </div>
  );
};

export default Phase;
