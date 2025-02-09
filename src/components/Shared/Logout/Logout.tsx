"use client";

import { Tuser } from "@/utils/types/globalTypes";
import { signOut } from "next-auth/react";

interface IProps {
  user: Tuser;
}

const Logout = ({ user }: IProps) => {
  console.log("User: from Logout", user);
  return (
    <button
      onClick={() => signOut()}
      className="btn btn-error text-white relative left-4 py-2 px-4 rounded-md mt-4"
    >
      Logout
    </button>
  );
};

export default Logout;
