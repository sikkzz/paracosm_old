import React, { useState } from "react";
import "./Phase.scss";
import { useNavigate } from "react-router-dom";
import Iframe from "./Iframe";
import { images } from "../../constants";
import { useEffect } from "react";

const Phase = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState([1, 2, 3, 4, 5]);
  const [count2, setCount2] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14
  ]);

  const [mobile, setMobile] = useState(false);

  const onTwitterClick = (e) => {
    e.stopPropagation();
    window.open("https://twitter.com/PARACOSMDAO");
  };

  const onInstaClick = (e) => {
    e.stopPropagation();
    window.open("https://www.instagram.com/paracosmdao");
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
      setCount([1, 2, 3]);
      setCount2([1, 2, 3, 4, 5, 6]);
    } else {
      setMobile(false);
      setCount([1, 2]);
      setCount2([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
      ]);
    }
  }, []);

  const onHomeClick = () => {
    navigate("/");
    window.location.reload();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div className="page_container">
      <div className="mobile_header">
        <div className="mobile">
          <p className="header_button" onClick={onHomeClick}>
            HOME
          </p>
          <p className="header_button" onClick={scrollToTop}>
            <img src={images.PhaseCastingImg} alt="casting_image" />
          </p>
        </div>
      </div>

      <div className="pc_header">
        <div className="pc">
          <div className="title">
            <div className="home" onClick={onHomeClick}>
              HOME
            </div>
            <div className="image" onClick={scrollToTop}>
              <img src={images.PhaseCastingImg} alt="casting_image" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="wrap"
        // style={{ transform: mobile ? `` : `translateY(${offset * 0.5}px)` }}
      >
        <div className="title_container">
          <p className="title">VIP CONCIERGE SERVICE</p>
        </div>
        <div className="cartoon">
          <img src={images.PhaseMobileCartoon} alt="cartoon_image" />
        </div>
        <div className="info_container">
          <div className="content">
            CA$TING LIST is not for everyone. In fact, it is limited to only
            <br />
            10% of total supply to ensure the highest caliber of personal
            <br />
            service is provided to every member. Become a member today
            <br />
            and enjoy our concierge service ready to support VIP Preview.
          </div>
          <div className="content_mobile">
            CA$TING LIST is not for everyone. In fact, it is
            <br />
            limited to only 10% of total supply to ensure the
            <br />
            highest caliber of personal service is provided to
            <br />
            every member. Become a member today and enjoy
            <br />
            our concierge service ready to support VIP Preview.
          </div>
        </div>
      </div>

      <div
        className="wrap2"
        // style={{ transform: mobile ? `` : `translateY(-${offset * 0.5}px)` }}
      >
        <div className="info_container2">
          <p className="title">
            MEMBERS ENJOY THESE
            <br />
            EXCLUSIVE PRIVILEGES
          </p>
        </div>

        <div className="casting_image_container">
          <div className="casting_image_box">
            <img src={images.Phase1MainImg} alt="casting_image" />
          </div>
        </div>

        <div className="apply_subtitle">
          Members can select the preview collection before launch.
        </div>

        <div className="apply_container">
          <div className="parent">
            {count.map((index) => (
              <div className="child" key={index}>
                {count2.map((index) => (
                  <Iframe key={index} />
                ))}
              </div>
            ))}
          </div>
          <div className="apply_text">APPLY NOW</div>
        </div>

        <div className="bottom">
          <p>APPLY HERE FOR THE PARACOSM CA$TING LIST</p>
        </div>

        <div className="casting_list_container">
          <div className="">
            <span>
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
            </span>
            <span>
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
            </span>
            <span>
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
              OPEN CASTING LIST 👀 OPEN CASTING LIST 👀
            </span>
          </div>
        </div>

        <div className="footer">
          <div className="left">
            <div className="left_container">
              <div className="top">
                <div className="title">PARACOSM</div>
                <div className="image">
                  {/* <img src={images.PhaseFooterIcon} alt="footer_icon" /> */}
                </div>
              </div>
              <div className="left_bottom">WEB3 FASHION THE NEW ERA.</div>
            </div>
          </div>
          <div className="right">
            <div className="right_container">
              <div className="top">
                <div className="go_top">
                  <div className="top_icon">
                    <img src={images.PhaseFooterArrow} alt="footer_arrow" />
                  </div>
                  <div className="top_text" onClick={scrollToTop}>
                    Back to the top
                  </div>
                </div>
                <div className="news">Follow the latest news :</div>
              </div>
              <div className="social">
                <div className="wrapper">
                  <div className="icon_box">
                    <img
                      src={images.PhaseSocialIcon1}
                      alt="social_icon1"
                      onClick={onTwitterClick}
                    />
                  </div>
                  <div className="icon_box">
                    <img
                      src={images.PhaseSocialIcon2}
                      alt="social_icon2"
                      onClick={onInstaClick}
                    />
                  </div>
                </div>
              </div>

              <div className="copyright">ⒸPARACOSM</div>
            </div>
          </div>
        </div>

        <div className="mobile_footer">
          <div className="left">
            <div className="m_title_container">PARACOSM</div>
            <div className="m_sub_container">WEB3 FASHION THE NEW ERA.</div>
            <div className="m_go_top_container">
              <div className="m_top_icon">
                <img src={images.PhaseFooterArrow} alt="footer_arrow" />
              </div>
              <div className="m_top_text" onClick={scrollToTop}>
                Back to the top
              </div>
            </div>
            <div className="m_news_container">Follow the latest news :</div>
            <div className="m_social_container">
              <div className="m_wrapper">
                <div className="m_icon_box">
                  <img
                    src={images.PhaseSocialIcon1}
                    alt="social_icon1"
                    onClick={onTwitterClick}
                  />
                </div>
                <div className="m_icon_box">
                  <img
                    src={images.PhaseSocialIcon2}
                    alt="social_icon2"
                    onClick={onInstaClick}
                  />
                </div>
              </div>
            </div>
            <div className="m_copyright">ⒸPARACOSM</div>
          </div>
          <div className="right">
            <div className="m_footer_icon">
              {/* <img src={images.PhaseFooterIcon} alt="footer_icon" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase;
