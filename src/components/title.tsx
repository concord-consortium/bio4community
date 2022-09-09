import React from "react";
import { clsx } from "clsx";
import { AppContext } from "../hooks/use-app-context";

import "./title.scss";

interface TitleProps {
  ac: AppContext;
  text: string;
}
export const Title = ({ ac, text }: TitleProps) => {
  return (
    <div className={ clsx("title-box", ac.mode) }>{ text }</div>
  );
};
