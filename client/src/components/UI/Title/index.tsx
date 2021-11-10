import React from "react";
import { ITtitle } from "./types";

const Title = ({ title, subtitle, align }: ITtitle) => {
  return (
    <>
      <h2
        className={
          "text-xl leading-12 text-text tracking-wide mb-20 text-" + align
        }
      >
        {title}
      </h2>
      <h4
        className={
          "text-lg leading-14 text-text-second tracking-wide mb-10 text-" +
          align
        }
      >
        {subtitle}
      </h4>
    </>
  );
};

export default Title;
