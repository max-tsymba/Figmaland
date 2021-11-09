import React from "react";
import Svg from "../Svg";
import { IAdress } from "./types";

const Adress = ({ children }: IAdress) => {
  return (
    <div>
      <div>{children}</div>
      <div>7480 Mockingbird Hill undefined </div>
    </div>
  );
};

export default Adress;
