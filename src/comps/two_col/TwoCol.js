import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TwoCol.scss";

// images

import digital_marketing from "../../assets/digital_marketing.png";
import website from "../../assets/website.png";
import ecomm from "../../assets/e-commerce.png";

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
    markers: false,
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
          markers: false,
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
          markers: false,
        },
      }
    );
  }, []);
  //


  const serviceData = [
    {
      image:digital_marketing,
      serviceName:"Digital",
      serviceName_hightlight:"Marketing",
      para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque magni ad accusamus dolor? Et!",
      offer:"instagram + facebook + twitter + linkdein"
    },
    {
      image:website,
      serviceName:"Website",
      serviceName_hightlight:"Development",
      para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque magni ad accusamus dolor? Et!",
      offer:"seo + all device optimization + Custom design"
    },
    {
      image:ecomm,
      serviceName:"E-Commerce",
      serviceName_hightlight:"Development",
      para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque magni ad accusamus dolor? Et!",
      offer:"user authentication + security + admin panel "
    }
  ]
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
          <div class="btn">
            <div class="text">
              Contact Us
            </div>
          </div>
        </div>
        <div class="right-section">

          {
            serviceData.map((item,index)=>(
              <div class="content"  key={index} >
              <div class="content_section">
                <h1>w</h1>
                <div class="data">
                  <img src={item.image} alt="" />
                  <h3>
                    {item.serviceName} <span>{item.serviceName_hightlight}</span>
                  </h3>
  
                  <p className="para">
                   {item.para}
                  </p>
                  <p> {item.offer} </p>
                </div>
              </div>
            </div>
            ))
          }
         
          
        </div>
      </div>
    </>
  );
};

export default TwoCol;
