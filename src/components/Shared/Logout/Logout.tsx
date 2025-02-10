"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
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
