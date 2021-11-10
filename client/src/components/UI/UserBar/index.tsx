import React from "react";
import { IUserBar } from "./types";
// @ts-ignore
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";

const UserBar = ({ user }: IUserBar) => {
  return (
    <>
      <span className="inline-block px-10">{user}</span>
      <span className="inline-block">
        <UserIcon />
      </span>
    </>
  );
};

export default UserBar;
