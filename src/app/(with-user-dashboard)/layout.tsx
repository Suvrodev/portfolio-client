import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
const layout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <div className="w-[20%] bg-blue-500">
        <h1>Dashboard</h1>
      </div>
      <div className="w-[80%]">{children}</div>
    </div>
  );
};

export default layout;
