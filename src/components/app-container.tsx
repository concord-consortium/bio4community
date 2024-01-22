import React from "react";
import { clsx } from "clsx";
import { Title } from "./title";
import { useAppContext } from "../hooks/use-app-context";

interface AppContainerProps {
  title?: string;
  children: any;
}
export const AppContainer = ({ title, children }: AppContainerProps) => {
  const ac = useAppContext();
  return (
    <div className={clsx("app-container", ac.mode)}>
      {title && <Title text={title} />}
      {children}
    </div>
  );
};
