import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Pixel from "./Pixel";
import ColorPicker from "./ColorPicker";

const pixels = new Array(400).fill("white");

const GET_PIXELS = gql`
  query GetPixels {
    pixels(order_by: { id: asc }) {
      color
      id
    }
  }
`;

function App() {
  const [color, changeColor] = useState("white");
  const { loading, error, data } = useQuery(GET_PIXELS);

  if (loading) {
    return <></>;
  }
  return (
    <div className="content">
      <div className="logo">Draw</div>
      <p>Pick a Color</p>
      <ColorPicker changeColor={changeColor} />
      <p>Click a Pixel</p>
      <div className="container">
        {data.pixels.map(pixel => (
          <Pixel {...pixel} key={pixel.id} newColor={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
