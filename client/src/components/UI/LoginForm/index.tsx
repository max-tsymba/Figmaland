import React from "react";
import { ILoginForm } from "./types";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

const LoginForm = ({}: ILoginForm) => {
  return (
    <>
      <Form title="Login">
        <Input type="email" placeholder="Your Email" required={true} />
        <Input type="password" placeholder="Your Password" required={true} />
        <Button isButton={true} text="Login" className="mt-22" type="submit" />
      </Form>
    </>
  );
};

export default LoginForm;
