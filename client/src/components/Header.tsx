import React, { FunctionComponent } from "react";
import { RouteNames } from "../routes/index";
import Logo from "./UI/Logo";
import Nav from "./UI/Nav";
import Social from "./UI/Social";

const Header: FunctionComponent = () => {
  return (
    <header className="bg-black-100">
      <div className="container">
        <div>
          <Nav
            items={[
              { name: "Home", url: RouteNames.HOME },
              { name: "Product", url: "#" },
              { name: "Pricing", url: "#" },
              { name: "About", url: "#" },
              { name: "Contact", url: "#" },
            ]}
          />
          <a className="inline-block" href={RouteNames.HOME}>
            <Logo />
          </a>
          <Social color="text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
