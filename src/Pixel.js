import React, { useState, useEffect } from "react";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const UPDATE_COLOR = gql`
  mutation ChangePixelColor($id: Int!, $color: String!) {
    update_pixels(where: { id: { _eq: $id } }, _set: { color: $color }) {
      returning {
        x
        y
        color
        id
      }
    }
  }
`;

const Pixel = ({ id, color, newColor }) => {
  const [pixelColor, changeColor] = useState(color);
  const [updatePixelColor] = useMutation(UPDATE_COLOR);

  useEffect(() => {
    changeColor(color);
  }, [color]);
  
  return (
    <span
      className="pixel"
      onClick={() => {
        changeColor(newColor);
        updatePixelColor({ variables: { id, color: newColor } });
      }}
      style={{ backgroundColor: pixelColor }}
    ></span>
  );
};

export default Pixel;
