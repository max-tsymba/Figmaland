import React from "react";
import { IButton } from "./types";

const buttonClasses =
  "text-center bg-primary-100 text-md leading-10 rounded-35 text-white py-16 px-62 hover:bg-secondary-100 duration-300 tracking-wider ";

const Button = ({ isButton, text, url, className }: IButton) => {
  return (
    <>
      {isButton ? (
        <button className={buttonClasses + className}>{text}</button>
      ) : (
        <a className={buttonClasses + className} href={url}>
          {text}
        </a>
      )}
    </>
  );
};

export default Button;
