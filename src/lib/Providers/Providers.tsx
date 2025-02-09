"use client";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface IProps {
  children: ReactNode;
}
const Providers = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
