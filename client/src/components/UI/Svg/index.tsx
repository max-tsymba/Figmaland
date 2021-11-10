import React from "react";
import { ISvgProps } from "./types";

const Svg = ({ width, height, d }: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={addViewBox(width, height)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {d.map((item: any, index: number) => (
        <path d={item} fill="currentColor" key={index} />
      ))}
    </svg>
  );
};

function addViewBox(width, height) {
  return `0 0 ${width} ${height}`;
}

export default Svg;
