import React from "react";
import "./HerosectionTwo.scss";
import ReactPlayer from "react-player";
import hero_video from "../../assets/hero_video.mp4";
const HerosectionTwo = () => {
  return (
    <>
      <div class="herosection_two parent">
        <div class="herosection_two_cont cont">
          <div class="top">
            <div class="react-wrapper">
              <ReactPlayer
                className="react-player"
                url={hero_video}
                width="100%"
                height="100%"
                playing={true}
                playsinline
                loop
                muted
              />
            </div>
          </div>
          <div class="bottom">
            <h2>
              Building <span>Website</span> <br /> Development
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odio?
            </p>
            <div class="btn btn2">
              <div class="text">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HerosectionTwo;
