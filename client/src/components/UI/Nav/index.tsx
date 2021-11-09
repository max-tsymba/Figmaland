import React from "react";
import Link from "../Link";
import { IProps } from "./types";

const Nav = ({items}: IProps) => {
  return (
    <nav>
      <ul className="flex -mx-10">
        {items.map((item: any, index: number) => {
          return (
            <li className="p-10 mx-10" key={index}>
              <Link name={item.name} url={item.url} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
