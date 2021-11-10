import React, { FunctionComponent } from "react";
import LoginForm from "./UI/LoginForm";

const LoginPage: FunctionComponent = () => {
  return (
    <>
      <section className="py-100">
        <div className="container">
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
