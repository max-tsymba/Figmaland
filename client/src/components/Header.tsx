import React, { FunctionComponent } from "react";
import { RouteNames } from "../routes/index";
import Logo from "./UI/Logo";
import Nav from "./UI/Nav";
import Social from "./UI/Social";
import UserBar from "./UI/UserBar";

const Header: FunctionComponent = () => {
  const isAuth = false;
  return (
    <header className="bg-black-100 py-40 dark:bg-white">
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

          <div className={isAuth ? "mx-auto" : "ml-auto"}>
            <Social urls={[RouteNames.HOME, "#", "#"]} color="text-white" />
          </div>

          {isAuth && (
            <button className="flex items-center text-white ml-auto">
              <UserBar user="User" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
