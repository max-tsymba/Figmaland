import React, { FunctionComponent } from "react";
import { RouteNames } from "../routes/index";
import Logo from "./UI/Logo";
import Nav from "./UI/Nav";
import Social from "./UI/Social";

const Header: FunctionComponent = () => {
  return (
    <header className="bg-black-100 py-40">
      <div className="container">
        <div className="flex items-center justify-center px-40">
          <Nav
            items={[
              { name: "Home", url: RouteNames.HOME },
              { name: "Product", url: "#" },
              { name: "Pricing", url: "#" },
              { name: "About", url: "#" },
              { name: "Contact", url: "#" },
            ]}
          />
          <a className="inline-block ml-20" href={RouteNames.HOME}>
            <Logo />
          </a>
          <div className="ml-auto">
            <Social urls={[RouteNames.HOME, "#", "#"]} color="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
