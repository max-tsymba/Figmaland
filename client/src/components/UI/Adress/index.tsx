import React from "react";
import { IAdress } from "./types";

const Adress = ({ children, text }: IAdress) => {
  return (
    <div className="flex items-center mb-10">
      <span className="inline-block">{children}</span>
      <span className="text-sm leading-18 tracking-wider inline-block text-white">
        {text}
      </span>
    </div>
  );
};

export default Adress;
