import React from "react";

import { AppContext } from "../hooks/use-app-context";

import "./button-toggle.scss";

interface IButtonToggleProps {
  ac: AppContext;
  title?: string;
}
export function ButtonToggle({ ac, title }: IButtonToggleProps) {
  return (
    <div className="setting button-toggle">
      <div className="setting-title">{title}</div>
      <div className="button-row">
        <button className="toggle-button selected">Left</button>
        <button className="toggle-button">Right</button>
      </div>
    </div>
  );
}
