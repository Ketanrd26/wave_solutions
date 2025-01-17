import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TwoCol.scss";

// images

import digital_marketing from "../../assets/digital_marketing.png";
gsap.registerPlugin(ScrollTrigger);

const TwoCol = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Pin the left section
  ScrollTrigger.create({
    trigger: ".right-section",
    start: "top top",
    end: "bottom bottom",
    pin: ".left-section",
    pinSpacing: false,
    markers: true,
  });
  const headingRef = useRef(null);
  const secondheadingref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },

      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".left-section",
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      secondheadingref.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".left-section",
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);
  //

  return (
    <>
      <div class="container">
        <div class="left-section">
          <div class="heading">
            <h2 ref={headingRef}>Exclusive</h2>
            <h2 ref={secondheadingref}>Services</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero
            atque voluptatem numquam voluptatibus fuga!
          </p>
        </div>
        <div class="right-section">
          <div class="content">
            <div class="content_section">
              <h1>w</h1>
              <div class="data">
                <img src={digital_marketing} alt="" />
                <h3>Digital <span>
                Marketing
                  </span></h3>

                <p className="para" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  itaque magni ad accusamus dolor? Et!
                </p>
                <p> instagram + facebook + twitter + linkdein </p>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_section">
              <h1>w</h1>
            </div>
          </div>
          <div class="content">
            <div class="content_section">
              <h1>w</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoCol;
