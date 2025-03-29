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
      para:" Boost your brand with data-driven strategies, SEO, social media marketing, and paid ads to maximize reach and conversions.",
      offer:"instagram + facebook + twitter + linkdein"
    },
    {
      image:website,
      serviceName:"Website",
      serviceName_hightlight:"Development",
      para:"Get a stunning, user-friendly, and responsive website that enhances your brand identity and delivers a seamless experience.",
      offer:"seo + all device optimization + Custom design"
    },
    {
      image:ecomm,
      serviceName:"E-Commerce",
      serviceName_hightlight:"Development",
      para:" Build a powerful online store with secure payments, smooth navigation, and optimized performance to drive sales effortlessly.",
      offer:"user authentication + security + admin panel "
    }
  ]
  return (
    <>
      <div class="container"  id="service" >
        <div class="overlay bg-img-cover"></div>
        <div class="left-section">
          <div class="heading">
            <h2 ref={headingRef}>Exclusive</h2>
            <h2 ref={secondheadingref}>Services</h2>
          </div>
          <p>
          We specialize in digital marketing, website design, and e-commerce development to help your brand grow, engage, and succeed online.
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
