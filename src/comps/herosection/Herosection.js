import React, { useState } from "react";
import "./Herosection.scss"
import pc_img from "../../assets/splash-tv.webp";
import facebookicon from "../../assets/facebook_icon.png";
import insta_icon from "../../assets/insta_icon.png"

const Herosection = () => {
    const [activatedBoxes, setActivatedBoxes] = useState(new Set());
    const gridSize = 10; // 10x10 grid
    
    const handleBoxHover = (index) => {
      setActivatedBoxes((prev) => {
        const newSet = new Set(prev);
        newSet.add(index);
    
        // Calculate neighbors (previous, next, above, below)
        const neighbors = [
          index - 1, // Left
          index + 1, // Right
          index - gridSize, // Up
          index + gridSize, // Down
        ];
    
        // Add valid neighbors (those within grid bounds)
        neighbors.forEach((neighbor) => {
          if (neighbor >= 0 && neighbor < gridSize * gridSize) {
            newSet.add(neighbor);
          }
        });
    
        return newSet;
      });
    };
    
    const removeBoxHover = (index) => {
      setActivatedBoxes((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
    
        // Remove neighbors as well when hovering off
        const neighbors = [
          index - 1,
          index + 1,
          index - gridSize,
          index + gridSize,
        ];
    
        neighbors.forEach((neighbor) => {
          if (neighbor >= 0 && neighbor < gridSize * gridSize) {
            newSet.delete(neighbor);
          }
        });
    
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
  )
}

export default Herosection
