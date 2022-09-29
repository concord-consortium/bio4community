import React from "react";
import { clsx } from "clsx";

import "./pane-title.scss";

interface IPaneTitle {
  extraClass?: string;
  title: string;
}
export const PaneTitle = ({ extraClass, title }: IPaneTitle) => {
  return (
    <div className={clsx("pane-title", extraClass)}>{title}</div>
  );
};
