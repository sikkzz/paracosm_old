import React, { useState, useEffect } from "react";

import { images } from "../../constants";
import { videos } from "../../constants";
import axios from "axios";

import "./Phase1.scss";

const Phase1 = () => {
  const [length, setLength] = useState(0);
  const [length1, setLength1] = useState(0);
  const [length2, setLength2] = useState(0);
  const [length3, setLength3] = useState(0);
  const [length4, setLength4] = useState(0);
  const [length5, setLength5] = useState(0);

  const counting = () => {
    // console.log(length)
    setLength1(Math.floor(length / 10000));
    // console.log(length1)
    setLength2(Math.floor((length % 10000) / 1000));
    // console.log(length2)
    setLength3(Math.floor((length % 1000) / 100));
    // console.log(length3)
    setLength4(Math.floor((length % 100) / 10));
    // console.log(length4)
    setLength5(Math.floor(length % 10));
    // console.log(length5)
  };

  const goTwitter = (e) => {
    e.stopPropagation();
    window.open(
      "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Eparacosmdao&screen_name=paracosmdao"
    );
  };

  const reload = () => {
    window.location.reload();
  };

  // const api = axios.create({
  //   baseURL: '/api',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_DB_HOST + "/api/para"
        );
        // console.log(response);
        // console.log(response.data.data.data[0].public_metrics.followers_count);
        setLength(response.data.data.data[0].public_metrics.followers_count);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    counting();
  });

  return (
    <>
      <div className="phase1_mobile_container">
        <div className="phase1_mobile_wrapper">
          <div className="phase1_mobile_main_image_container">
            <img
              src={images.PhaseMobileImg}
              className="phase1_mobile_main_image"
              alt="mobile_image"
            />
          </div>
          <div className="phase1_mobile_main_title">APPLY NOW HERE</div>
        </div>
        <div className="phase1_mobile_header">
          <div className="phase1_mobile_header_button">HOME</div>
          <div className="phase1_mobile_header_button">CASTING LIST</div>
        </div>
        <div className="phase1_mobile_info_container">
          <div className="phase1_mobile_info_title">VIP CONCIERGE SERVICE</div>
          <div className="phase1_mobile_info_content">
            CA$TING LIST is not for everyone.
            <br />
            In fact, it is limited to only 10% of total supply to ensure the
            highest
            <br />
            caliber of personal service is provided to every member.
          </div>
          <div className="phase1_mobile_info_content">
            Become a CA$TING LIST member today and enjoy our concierge
            <br />
            service ready to support VIP Preview.
          </div>
        </div>
        <div className="phase1_mobile_cartoon_container">
          <img
            src={images.PhaseMobileCartoon}
            className="phase1_mobile_cartoon_image"
            alt="cartoon_image"
          />
        </div>
        <div className="phase1_mobile_info_container">
          <div className="phase1_mobile_info_title">
            CA$TING LIST MEMBERS ENJOY THESE
            <br />
            EXCLUSIVE PRIVILEGES
          </div>
        </div>
        <div className="phase1_mobile_info_list_container">
          <div className="phase1_mobile_info_list">
            <div className="phase1_mobile_info_list_icon" />
            <div className="phase1_mobile_info_list_text">
              Limited Membership
            </div>
          </div>
          <div className="phase1_mobile_info_list">
            <div className="phase1_mobile_info_list_icon" />
            <div className="phase1_mobile_info_list_text">
              24-Hour Concierge Service
            </div>
          </div>
          <div className="phase1_mobile_info_list">
            <div className="phase1_mobile_info_list_icon" />
            <div className="phase1_mobile_info_list_text">
              VIP PREVEIW
              <br />
              <span>
                CA$TING LIST Member can buy preview the collection before public
                sale.
              </span>
            </div>
          </div>
          <div className="phase1_mobile_info_list">
            <div className="phase1_mobile_info_list_icon" />
            <div className="phase1_mobile_info_list_text">
              Exclusive Rewards Program
            </div>
          </div>
          <div className="phase1_mobile_info_list">
            <div className="phase1_mobile_info_list_icon" />
            <div className="phase1_mobile_info_list_text">
              Luxury Gifts (No More Black Hoodie)
            </div>
          </div>
        </div>
        <div className="phase1_mobile_casting_image_container">
          <div className="phase1_mobile_casting_image_title">CA$TING</div>
          <img src={images.Phase1MainImg} alt="casting_image" />
        </div>
        <div className="phase1_mobile_apply_container">
          <div className="phase1_mobile_apply_text">APPLY NOW</div>
        </div>
        <div className="phase1_mobile_apply_title_container">
          APPLY HERE FOR THE PARACOSM CASTING LIST
        </div>
        <div className="phase1_mobile_casting_list_container">
          <div className="phase1_mobile_casting_list_wrapper">
            <div>CastingList</div>
            <div>CastingList</div>
          </div>
          <div className="phase1_mobile_casting_list_wrapper">
            <div>CastingList</div>
            <div>CastingList</div>
          </div>
          <div className="phase1_mobile_casting_list_wrapper">
            <div>CastingList</div>
            <div>CastingList</div>
          </div>
        </div>

        <div className="phase1_mobile_sub_title">Follow the PARACOSM news:</div>
        <div className="phase1_mobile_social_container">
          <div className="phase1_mobile_social_wrapper">
            <div className="phase1_mobile_social_icon_container1">
              <img
                src={images.PhaseSocialIcon1}
                className="phase1_mobile_social_icon"
                alt="sociai_icon1"
              />
            </div>
            <div className="phase1_mobile_social_icon_container2">
              <img
                src={images.PhaseSocialIcon2}
                className="phase1_mobile_social_icon"
                alt="sociai_icon1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="phase1_container">
        <div className="phase1_title_container">
          <div className="phase1_title_sub1">PHASE 1 : CASTINGCALL</div>
          <div className="phase1_title_main">
            ‘It’s like a members’ club,
            <br />
            but for non-members only.’
          </div>
          <div className="phase1_title_sub2">
            TRUST THE PROCESS BY PARACOSMDAO
          </div>
        </div>

        <div className="phase1_image_container">
          <div className="phase1_image_title">CA$TING</div>
          <img
            className="phase1_image_main"
            src={images.Phase1MainImg}
            alt="phase1_image"
          />
        </div>

        <div className="phase1_content_container">
          <div className="phase1_content_1">
            #CASTING at PARACOSMDAO is about assembling a diverse group of
            people who i<br />
            ’d like to hang out with. I don’t really have a lot of friends in my
            life,
            <br />
            so if i had a magic power, it would be to suddenly have this big
            group of friends.
            <br />
            Because these are the people I want to play with.
          </div>
          <div className="phase1_content_2">
            <span>PHASE 1 : #CASTING CALL 👀</span>
            <br />
            I’m so happy about the way we find people.
            <br />
            We want distinctive people. it’s not about looking for standardized
            measurements.
          </div>
          <div className="phase1_content_3">
            <span>PHASE 2 : 🤫</span>
            <br />
            Go back to main page and find the hint.
          </div>
        </div>

        <div className="phase1_casting_container">
          <div className="phase1_casting_title">CA$TING LIST 👀</div>
          <div className="phase1_casting_count_container">
            <div className="phase1_casting_count_box">
              <img
                className="phase1_casting_count_image"
                src={images.Phase1CountBox}
                alt="phase1_casting_count_image"
              />
              <div className="phase1_casting_count_num">{length1}</div>
            </div>

            <div className="phase1_casting_count_box">
              <img
                className="phase1_casting_count_image"
                src={images.Phase1CountBox}
                alt="phase1_casting_count_image"
              />
              <div className="phase1_casting_count_num">{length2}</div>
            </div>

            <div className="phase1_casting_count_box2">
              <div className="phase1_casting_count_comma">,</div>
            </div>

            <div className="phase1_casting_count_box">
              <img
                className="phase1_casting_count_image"
                src={images.Phase1CountBox}
                alt="phase1_casting_count_image"
              />
              <div className="phase1_casting_count_num">{length3}</div>
            </div>

            <div className="phase1_casting_count_box">
              <img
                className="phase1_casting_count_image"
                src={images.Phase1CountBox}
                alt="phase1_casting_count_image"
              />
              <div className="phase1_casting_count_num">{length4}</div>
            </div>

            <div className="phase1_casting_count_box">
              <img
                className="phase1_casting_count_image"
                src={images.Phase1CountBox}
                alt="phase1_casting_count_image"
              />
              <div className="phase1_casting_count_num">{length5}</div>
            </div>
          </div>

          <div className="phase1_casting_subtitle">TOGETHER, WE ARE STRONG</div>
        </div>

        <div className="phase1_icon_container">
          <video
            className="phase1_icon_video"
            src={videos.PhaseVideo}
            autoPlay
            muted
            loop
          />
        </div>

        <div className="phase1_button_container">
          <div className="phase1_button_container_div">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-text="Hiiii222"
              data-url="https://twitter.com/MCU_Direct/status/1599908110973517825"
              data-via="choco"
              data-hashtags="hashtag"
              data-related="username"
              data-show-count="false"
            >
              test
            </a>
          </div>
          <div className="phase1_button_main2">APPLY NOW</div>
          <div className="phase1_button_main" onClick={reload}>
            FOLLOW FOR UPDATE
          </div>
        </div>
      </div>
    </>
  );
};

export default Phase1;
