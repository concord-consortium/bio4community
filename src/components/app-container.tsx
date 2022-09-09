import React from "react";
import { clsx } from "clsx";
import { Title } from "./title";
import { AppContext } from "../hooks/use-app-context";

interface AppContainerProps {
  ac: AppContext;
  title: string;
  children: any;
}
export const AppContainer = ({ ac, title, children }: AppContainerProps) => {
  return (
    <div className={clsx("app-container", ac.mode)}>
      <Title ac={ac} text={title} />
      {children}
    </div>
  );
};
