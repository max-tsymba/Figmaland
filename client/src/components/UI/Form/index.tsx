import React from "react";
import { IForm } from "./types";

const Form = ({ children, title }: IForm) => {
  return (
    <form className="text-center border border-text-second p-50 border-opacity-40 rounded-20 shadow-form w-450 max-w-full">
      <h3 className="text-md leading-14 font-bold tracking-wide text-text pb-20">
        {title}
      </h3>
      {children}
    </form>
  );
};

export default Form;
