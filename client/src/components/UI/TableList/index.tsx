import React from "react";
import { ITableList } from "./types";
import Link from "../Link";

const TableList = ({ title, links }: ITableList) => {
  return (
    <div className="py-10">
      <h3 className="text-md leading-14 font-bold mb-30">{title}</h3>
      <ul className="-my-8">
        {links.map((item: any, index: number) => (
          <li className="py-8" key={index}>
            <Link name={item.name} url={item.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
