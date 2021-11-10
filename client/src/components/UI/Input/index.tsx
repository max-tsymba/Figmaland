import React from "react";
import { IInput } from "./types";

const Input = ({ type, placeholder, name, id }: IInput) => {
  return (
    <div className="py-22">
      <input
        className="c-input text-sm text-text leading-11 p-20 w-full border border-transparent focus:border-opacity-40 focus:border-text-second rounded-40 bg-white-200 outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </div>
  );
};

export default Input;
