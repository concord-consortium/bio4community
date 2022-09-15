import React from "react";
import ToggleControl from "./toggle-control";
import { AppContext } from "../hooks/use-app-context";

import "./control-option.scss";

export interface PartialControlOptionProps {
  label: string;
  options: [string, string];
}
export interface ControlOptionProps extends PartialControlOptionProps{
  ac: AppContext;
}
export const ControlOption = ({ ac, label, options }: ControlOptionProps) => {
  return (
    <div className="control-option">
      <div className="control-option-label">{`${label}:`}</div>
      <div className="control-option-main">
        {options[0]}
        <ToggleControl ac={ac} />
        {options[1]}
      </div>
    </div>
  );
};
