import React, { useState } from "react";

const Pixel = ({ id, color, newColor }) => {
  const [pixelColor, changeColor] = useState(color);
  return (
    <span
      className="pixel"
      onClick={() => {
        changeColor(newColor);
      }}
      style={{ backgroundColor: pixelColor }}
    ></span>
  );
};

export default Pixel;
