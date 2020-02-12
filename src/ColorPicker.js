import React from "react";

const colorChoices = [
  "#f44336",
  "#f06292",
  "#9c27b0",
  "#2196f3",
  "#009688",
  "#8bc34a",
  "#ffeb3b",
  "#ff9800",
  "#ffffff",
  "#212121"
];

const Color = props => (
  <span
    className="palette-color"
    style={{ backgroundColor: props.color }}
    onClick={() => {
      props.handleClick(props.color);
    }}
  ></span>
);

const ColorPicker = props => (
  <div className="palette">
    {colorChoices.map((color, id) => (
      <Color handleClick={() => props.changeColor(color)} color={color} key={id} />
    ))}
  </div>
);

export default ColorPicker;
