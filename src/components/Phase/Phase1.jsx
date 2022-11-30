import React, { useState, useEffect }from "react";

import { images } from "../../constants";
import axios from 'axios'

import "./Phase1.scss";

const Phase1 = () => {
  const [length, setLength] = useState(0)
  const [length1, setLength1] = useState(0)
  const [length2, setLength2] = useState(0)
  const [length3, setLength3] = useState(0)
  const [length4, setLength4] = useState(0)
  const [length5, setLength5] = useState(0)
  
  const counting = () => {
    // console.log(length)
    setLength1(Math.floor(length / 10000))
    // console.log(length1)
    setLength2(Math.floor((length % 10000) / 1000))
    // console.log(length2)
    setLength3(Math.floor((length % 1000) / 100))
    // console.log(length3)
    setLength4(Math.floor((length % 100) / 10))
    // console.log(length4)
    setLength5(Math.floor(length % 10))
    // console.log(length5)
  }

  const goTwitter = (e) => {
    e.stopPropagation();
    window.open(
      "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Eparacosmdao&screen_name=paracosmdao"
    );
  };

  const reload = () => {
    window.location.reload();
  }

  // const api = axios.create({
  //   baseURL: '/api',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_DB_HOST + '/api/para')
        console.log(response)
        console.log(response.data.data.data[0].public_metrics.followers_count);
        setLength(response.data.data.data[0].public_metrics.followers_count)
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
    counting()
  })

  return (
    <>
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
          #CASTING at PARACOSMDAO is about assembling a diverse group of people
          who i<br />
          ’d like to hang out with. I don’t really have a lot of friends in my
          life,
          <br />
          so if i had a magic power, it would be to suddenly have this big group
          of friends.
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
        <img
          className="phase1_icon_image"
          src={images.Phase1Icon}
          alt="phase1_icon"
        />
      </div>

      <div className="phase1_button_container">
        <div className="phase1_button_main" onClick={goTwitter}>APPLY NOW</div>
        <div className="phase1_button_main" onClick={reload}>FOLLOW FOR UPDATE</div>
      </div>
    </div>
    </>
  );
};

export default Phase1;
