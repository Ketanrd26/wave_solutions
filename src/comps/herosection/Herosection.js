import React, { useState } from "react";
import "./Herosection.scss";
import pc_img from "../../assets/splash-tv.webp";
import facebookicon from "../../assets/facebook_icon.png";
import insta_icon from "../../assets/insta_icon.png";

const Herosection = () => {
  const [hoveredBox, setHoveredBox] = useState(null); // Track only the hovered box index
  const gridSize = 32; // 10x10 grid

  const calculateNeighborClasses = (index) => {
    if (index === null) return {}; // No hover effect if no box is hovered

    const topNeighbor = index - gridSize >= 0 ? index - gridSize : null;
    const bottomNeighbor = index + gridSize < gridSize * gridSize ? index + gridSize : null;
    const leftNeighbor = index % gridSize !== 0 ? index - 1 : null;
    const rightNeighbor = (index + 1) % gridSize !== 0 ? index + 1 : null;

    return { topNeighbor, bottomNeighbor, leftNeighbor, rightNeighbor };
  };

  const neighbors = calculateNeighborClasses(hoveredBox);

  return (
    <div className="grid-container">
      {Array.from({ length: gridSize * gridSize }).map((_, index) => (
        <div
          key={index}
          className={`grid-box ${
            index === hoveredBox
              ? "active" // Add active class for the hovered box
              : index === neighbors.topNeighbor ||
                index === neighbors.bottomNeighbor ||
                index === neighbors.leftNeighbor ||
                index === neighbors.rightNeighbor
              ? "neighbor" // Add neighbor class for the immediate neighbors
              : ""
          }`}
          onMouseEnter={() => setHoveredBox(index)} // Set hovered box
          onMouseLeave={() => setHoveredBox(null)} // Reset hover
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

      <div className="face_icon">
        <img src={facebookicon} alt="" />
      </div>
      <div className="inst_icon">
        <img src={insta_icon} alt="" />
      </div>
    </div>
  );
};

export default Herosection;
