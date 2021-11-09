import React from "react";
import { SOCIAL_SVG } from "../../../utils/svg.const";
import Svg from "../Svg";
import { IProps } from "./types";

const Social = ({ urls, color }: IProps) => {
  return (
    <div className="-mx-12 ml-auto">
      {SOCIAL_SVG.map((item: any, index: number) => (
        <a
          className={"inline-block mx-12 " + color}
          href={urls[index]}
          key={index}
        >
          <Svg width={item.width} height={item.height} d={item.d} />
        </a>
      ))}
    </div>
  );
};

export default Social;
