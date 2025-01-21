import React, { useEffect, useRef } from "react";
import "./Whychoose.scss";

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
            <h4>Proin est lacus, sagittis lobortis iaculise get.</h4>
            <p>
              There are many variations of passages of available but the
              majority have suffered. Alteration in some form, lipsum is simply
              free text by injected humou or randomised words even believable.
            </p>
          </div>
          <div className="right">
            <div className="image"></div>
            <div className="tag">
                <p class="text">w</p>
              <p className="p" ref={textRef}>Grow Together</p>
            </div>
          </div>

          <div class="why_choose_content">
            <div class="card">
                
            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
