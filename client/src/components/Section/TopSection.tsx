import React, { FunctionComponent } from "react";
import { RouteNames } from "../../routes";
import Button from "../UI/Button";

const TopSection: FunctionComponent = () => {
  return (
    <>
      <h1 className="text-xxl leading-11 text-white font-bold text-center mb-20">
        The best products <br /> start with Figma
      </h1>
      <h4 className="text-lg leading-14 text-white text-center">
        Most calendars are designed for teams. Slate is designed for freelancers
      </h4>
      <Button isButton={false} text="Try for free" url={RouteNames.LOGIN} />
    </>
  );
};

export default TopSection;
