import React, { useState } from "react";
import "./Test.scss";
import pc_img from "../assets/splash-tv.webp";
import facebookicon from "../assets/facebook_icon.png";
import insta_icon from "../assets/insta_icon.png"
const Test = () => {
  const [activatedBoxes, setActivatedBoxes] = useState(new Set());

  const handleBoxHover = (index) => {
    setActivatedBoxes((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const removeBoxHover = (index) => {
    setActivatedBoxes((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };
  return (
    <>
      <div className="grid-container">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className={`grid-box ${activatedBoxes.has(index) ? "active" : ""}`}
            onMouseOver={() => handleBoxHover(index)}
            onMouseLeave={() => removeBoxHover(index)}
          ></div>
        ))}

        <div className="text">
          <h2 className="first_text">
            lorem
            <span className="img">
              <img src={pc_img} alt="" />
            </span>
            lipsum
          </h2>
          <h2>
            <span className="stroke">Building</span>
            Website
          </h2>
          <h2>
            <span style={{ color: "var(--accent2)" }}>Development</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odio?
          </p>
        </div>

        <div class="face_icon">
          <img src={facebookicon} alt="" />
        </div>
        <div class="inst_icon">
          <img src={insta_icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Test;
