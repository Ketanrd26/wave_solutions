import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TwoCol.scss";
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
});

// // Transition to the next section
// ScrollTrigger.create({
//   trigger: ".next-section",
//   start: "top bottom",
//   end: "bottom bottom",
//   markers: true, // Remove in production
//   onEnter: () => console.log("Entered next section!"),
// });

  return (
    <>
   <div class="container">
  <div class="left-section">
  
    <h2>Left Section (Fixed)</h2>
    <p>This content remains fixed while scrolling.</p>
  </div>
  <div class="right-section">

    <div class="content">
      <h2>Right Section</h2>
      <p>Scroll through this content...</p>
      <p>More content...</p>
      <p>And even more content...</p>
    </div>
    <div class="content">
      <h2>Right Section</h2>
      <p>Scroll through this content...</p>
      <p>More content...</p>
      <p>And even more content...</p>
    </div>
    <div class="content">
      <h2>Right Section</h2>
      <p>Scroll through this content...</p>
      <p>More content...</p>
      <p>And even more content...</p>
    </div>
    <div class="content">
      <h2>Right Section</h2>
      <p>Scroll through this content...</p>
      <p>More content...</p>
      <p>And even more content...</p>
    </div>

   
  </div>
</div>


    </>
  )
};

export default TwoCol;
