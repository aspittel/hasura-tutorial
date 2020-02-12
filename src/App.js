import React, { useState } from "react";
import Pixel from "./Pixel";
import ColorPicker from "./ColorPicker";

const pixels = new Array(400).fill("white");

function App() {
  const [color, changeColor] = useState("white");

  return (
    <div className="content">
      <div className="logo">Draw</div>
      <p>Pick a Color</p>
      <ColorPicker changeColor={changeColor} />
      <p>Click a Pixel</p>
      <div className="container">
        {pixels.map((pixel, idx) => (
          <Pixel color={pixel} key={idx} newColor={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
