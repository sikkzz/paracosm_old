import React from "react";
import "./Faq.scss";

import { images } from "../../constants";
import { videos } from "../../constants";

const Faq = () => {
  return (
    <>
      <div className="faq">
        <div className="faq_container">
          <img className="faq_title" src={images.FaqTitleImg} alt="faq_title" />
          <img className="faq_icon1" src={images.FaqIcon1} alt="faq_icon1" />
          <img className="faq_icon2" src={images.FaqIcon2} alt="faq_icon2" />
          <img className="faq_icon3" src={images.FaqIcon3} alt="faq_icon3" />
          <img className="faq_icon4" src={images.FaqIcon4} alt="faq_icon4" />
          <img
            className="faq_icon_text1"
            src={images.FaqIconText1}
            alt="faq_icon_text1"
          />
          <img
            className="faq_icon_text2"
            src={images.FaqIconText2}
            alt="faq_icon_text2"
          />
          <img
            className="faq_icon_text3"
            src={images.FaqIconText3}
            alt="faq_icon_text3"
          />
          <img
            className="faq_icon_text4"
            src={images.FaqIconText4}
            alt="faq_icon_text4"
          />
          <div className="faq_content">
            <p className="faq_content1">
              Distance is no longer a barrier with the closeness of web3
              <br />
              Web3 is built together, governed together, and benefit together.
            </p>
            <p className="faq_content2">
              Basketball team?
              <br />
              wouldn't be better to buy a fashion brand?
              <br />
              Crypto l*mh LIt!!!!!!!!!!!!!!!!!
            </p>
            <p className="faq_content3">
              Going end-to-end is hard work, but it's how we accomplish
              <br />
              what we're after big ideas that capture imaginations,
              <br />
              win hearts and build franchises.
            </p>
            <p className="faq_content4">
              The first decentralized fashion brand
            </p>
          </div>
          <video
            className="faq_video"
            autoPlay
            muted
            loop
            src={videos.FaqVideo}
            type="video/mp4"
          />
          <img className="faq_icon" src={images.FaqIcon} alt="faq_icon" />
          <img
            className="faq_icon_title"
            src={images.FaqIconTitle}
            alt="faq_icon_title"
          />
          <div className="faq_icon_content">
            <p className="faq_icon_content1">What is the project about? +</p>
            <p className="faq_icon_content2">Who is paracosmdao? +</p>
            <p className="faq_icon_content3">
              When will be the bss city mint? +
            </p>
            <p className="faq_icon_content4">What is the supply? +</p>
            <p className="faq_icon_content5">
              How can i mint and how much it will cost? +
            </p>
            <p className="faq_icon_content6">How to get wl? +</p>
          </div>
          <img
            className="faq_social_icon1"
            src={images.FaqSocialIcon1}
            alt="faq_social_icon1"
          />
          <img
            className="faq_social_icon2"
            src={images.FaqSocialIcon2}
            alt="faq_social_icon2"
          />
          <img
            className="faq_social_icon3"
            src={images.FaqSocialIcon3}
            alt="faq_social_icon3"
          />
          <img
            className="faq_social_icon4"
            src={images.FaqSocialIcon4}
            alt="faq_social_icon4"
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
