import React from "react";
import "./Collection.scss";

import { images } from "../../constants";
import { videos } from "../../constants";

const Collection = () => {
  return (
    <>
      <div className="collection">
        <div className="collection_container">
          <img
            className="collection_main_background"
            src={images.CollectionMainBackground}
            alt="collection_main_bg"
          />
          <img
            className="collection_main_image"
            src={images.CollectionMainImage}
            alt="collection_main_image"
          />
          <img
            className="collection_main_title"
            src={images.CollectionMainTitle}
            alt="collection_main_title"
          />
          <div className="collection_content_box">
            <p className="collection_content_title">THE COLLECTION</p>
            <p className="collection_content1">
              BSS is sci-fi art, consisting of 4 species and more than +580
              traits. <br />
              @paracosmdao blended the cybergoth aesthetic, asian philosophy,
              and cyberpunk fashion genre.
            </p>
            <p className="collection_content2">
              - <span className="collection_content_span">RUNNER</span> - The
              worker's savior, or the mediator <br />-{" "}
              <span className="collection_content_span">GROT</span> - Guardian
              of the BSS CITY <br />-{" "}
              <span className="collection_content_span">HEL</span> - A symbol of
              light for the workers <br />-{" "}
              <span className="collection_content_span">FREDERSON</span> - The
              mastermind of BSS CITY
            </p>
            <p className="collection_content3">
              BSS NFT is an interface that lets them to reach their goals as
              effectively as possible. <br />
              For the owner, is the interface that delivers engages, benefit,
              inspires, and loves.
            </p>
          </div>

          <video
            className="collection_video"
            autoPlay
            muted
            loop
            src={videos.CollectionVideo}
            type="video/mp4"
          />
          <img
            className="collection_frame"
            src={images.CollectionVideoBackground}
            alt="collection_frame"
          />
          <img
            className="collection_frame_title"
            src={images.CollectionVideoTitle}
            alt="collection_frame_title"
          />
          <img
            className="collection_frame_subtitle"
            src={images.CollectionVideoSubTitle}
            alt="collection_frame_subtitle"
          />
          <div className="collection_frame_box">
            <p className="collection_frame_content1">THE BACKGROUND</p>
            <p className="collection_frame_content2">
              SCIENCE-FICTION is one of most popular genres in media for its
              ability to create new worlds,
              <br /> offer new sets of rules, and provide imaginative
              narratives. Sci-fi has also been responsible for <br />
              some of the best films and shows in pop culture, so it’s no wonder
              it has amassed such large <br />
              fan bases through popular titles like Metropolis, Starwars,
              Bladerunner, Cyberpunk…and now BSS city. <br />
              <br />
              It's the time to shine for all Sci-fi lovers.
              <br /> The birth of new medium has inspired more and more artists
              to try new things and create their own sci-fi interface. <br />
              The reason why @paracosmdao likes this genre is that we can look
              at and express our society from a different perspective.
            </p>
          </div>
          <img
            className="collection_bottom_background"
            src={images.CollectionBottomBackground}
            alt="bottom_background"
          />
          <img
            className="collection_bottom_image"
            src={images.CollectionBottomImage}
            alt="bottom_image"
          />
          <div className="collection_bottom_content_box">
            <p className="collection_bottom_content_title">THE PROJECT</p>
            <p className="collection_bottom_content1">
              NO, this isn’t a page out of some dystopian, sci-fi script, but a
              new evolution
              <br />
              within fashion that snowballed during the pandemic.
              <br />
              <br /> We started as the fashion brand from scratch. and we cannot
              <br />
              adapt a 2-years-old fashion brand to industry rules that are a
              century old.
              <br />
              in fashion now, take risks to survive.
              <br />
              <br />
              We’re an all-in
              <br />
              we had nothing, but we had the web3.
              <br />
              we was obsessed with crypto culture.
              <br />
              we was obsessed with finding thing out that is still my driving
              force to find something new.
              <br />
              we want to discover and make other people discover.
              <br />
              <br />
              BSS city is only the beginning.
              <br />
              One thing about BSS city is theirs is all about rare everything.
              <br />
              Rare clothes, rare shoes and….. rare people!
            </p>
            <img
              className="collection_bottom_subtitle"
              src={images.CollectionBottomSubTitle}
              alt="bottom_subtitle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
