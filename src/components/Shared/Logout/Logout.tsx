"use client";

import { signOut } from "next-auth/react";

interface IProps {
  admin: boolean;
}
const Logout = ({ admin }: IProps) => {
  return (
    <button
      onClick={() => signOut()}
      className={`btn btn-error  text-white relative  py-2 px-4 rounded-md ${
        admin ? "left-4  mt-4" : ""
      }`}
    >
      Logout
    </button>
  );
};

export default Logout;
