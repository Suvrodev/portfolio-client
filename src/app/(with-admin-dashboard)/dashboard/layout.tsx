import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
}
const layout = ({ children }: Iprops) => {
  return (
    <div className="bg-[#192655]">
      {children}
      <h1>Admin Layout</h1>
    </div>
  );
};

export default layout;
