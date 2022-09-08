import React from "react";
import { Title } from "./title";

interface AppContainerProps {
  title: string;
  children: any;
}
export const AppContainer = ({title, children}: AppContainerProps) => {
  return (
    <div className="app-popup">
      <Title text={title} />
      {children}
    </div>
  );
};
