import React from "react";
import "./Prolog.scss";
import { images } from "../../constants";

const Prolog = () => {
  return (
    <div className="prolog_container">
      <img
        className="prolog_background"
        src={images.PrologBackground}
        alt="prolog_background"
      />
      <div className="prolog_background_shadow" />
      <img className="bg_crypto" src={images.BgIconCrypto} alt="icon_crypto" />
      <img className="bg_bm" src={images.BgIconBm} alt="icon_bm" />
      <img className="bg_alien" src={images.BgIconAlien} alt="icon_alien" />
      <img className="bg_love" src={images.BgIconLove} alt="icon_love" />
      <img
        className="bg_paracosm"
        src={images.BgIconParacosm}
        alt="icon_paracosm"
      />
      <img className="bg_house" src={images.BgIconHouse} alt="icon_house" />
      <img className="bg_rocket" src={images.BgIconRocket} alt="icon_rocket" />
      <img className="bg_market" src={images.BgIconMarket} alt="icon_market" />
      <img className="bg_tree" src={images.BgIconTree} alt="icon_tree" />
      <img className="bg_light" src={images.BgIconLight} alt="icon_light" />
      <img className="bg_gmgmgm" src={images.BgIconGmgmgm} alt="icon_gmgmgm" />
      <img className="bg_nft" src={images.BgIconNft} alt="icon_nft" />
      <div className="prolog_title_image_container">
        <img
          className="prolog_title_image"
          src={images.PrologGif}
          alt="prolog_title_image"
        />
      </div>
      <div className="prolog_title_container">
        <img
          className="prolog_title"
          src={images.PrologTitle}
          alt="prolog_title"
        />
      </div>
      <div className="prolog_content_container">
        <p className="prolog_content_title">PROLOGUE</p>
        <div className="prolog_content_text_container">
          <div className="prolog_content_text_1">
            BSS CITY is the only territory that officially owns the title of
            <span className="text_bomber"> ”</span>
            <span className="text_upsize">Autonomous City.</span>
            <span className="text_bomber">”</span>
            <br />
            Here is not part of any state, nor does it belong to any country.
          </div>
          <div className="prolog_content_text_2">
            A place where hate and love coexist. <br />
            Sure, it might be a place where dreams come true. <br />
            BSS CITY exists for those who are enterprising for long-term
            success, though this city will <br />
            punish people who are too-much ambitious and have the f**king
            malevolent purpose. (hope that's not you.)
          </div>
          <div className="prolog_content_text_3">
            The War to take over <span className="text_yellow">Cyberware</span>{" "}
            is still ongoing now. <br />
            They are obsessed with cyber technologies and their desire to
            constantly improve their bodies. <br />
            Eventually, they themselves have turned into being inhumane and
            cyborg creatures…….
          </div>
        </div>
      </div>
      <div className="prolog_content_hover_container">
        <hr className="prolog_content_line" />
        <div className="prolog_content_text_4">
          Cyber fashion, which replaces the body with cyberware, is a trend.
          <br />
          However, not all cyberware is used to make appearance and reveal
          social status, <br />
          but also to make practical efficiency better through functional
          enhancement.
        </div>
      </div>
    </div>
  );
};

export default Prolog;
