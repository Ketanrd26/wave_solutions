import React, { useEffect, useRef } from "react";
import "./Whychoose.scss";

// icon
import success from "../../assets/sucess.png";
import leader from "../../assets/key.png";
import solution from "../../assets/promotion.png";
const Whychoose = () => {
  const textRef = useRef(null); // Ref for the text container

  useEffect(() => {
    if (textRef.current) {
      const text = "Grow Together"; // Define the text content
      textRef.current.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span style="transform: rotate(${i * 20}deg);">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <>
      <div className="why_choose_parent parent bg-img-cover">
        <div className="why_choose_cont cont">
          <div className="left">
            <h2>Why should choose our agency?</h2>
            <h4>Accelerate Your Business Growth with Smart Strategies & <br /> Expert Execution</h4>

            <p>
              At Wave Solutions, we don’t just offer services—we build success stories. Our innovative approach, combined with industry expertise, ensures that your brand gains maximum exposure and conversion in the digital space. Whether it's strategic marketing, high-performing websites, or seamless eCommerce solutions, we’ve got you covered.<br/>Let's create something impactful together!
            </p> 
           
          </div>
          <div className="right">
            <div className="image bg-img-cover"></div>
            <div className="tag">
              <p class="text">w</p>
              <p className="p" ref={textRef}>
                Grow Together
              </p>
            </div>
          </div>

          <div class="why_choose_content">
            <div class="card">
              <div class="left">
                <img src={leader} alt="" />
              </div>
              <p>Innovators in Digital Marketing</p>
            </div>
            <div class="card">
              <div class="left">
                <img src={success} alt="" />
              </div>
              <p>Proven Track Record of Success</p>
            </div>
            <div class="card">
              <div class="left">
                <img src={solution} alt="" />
              </div>
              <p>Comprehensive & Scalable Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
