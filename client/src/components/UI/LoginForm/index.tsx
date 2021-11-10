import React from "react";
import { ILoginForm } from "./types";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

const LoginForm = ({}: ILoginForm) => {
  return (
    <>
      <Form title="Login">
        <Input type="email" placeholder="Your Email" />
        <Input type="password" placeholder="Your Password" />
        <Button isButton={true} text="Login" className="mt-22" />
      </Form>
    </>
  );
};

export default LoginForm;
