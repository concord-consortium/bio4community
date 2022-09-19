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
  onChange?: (value: boolean) => void;
}
export const ControlOption = ({ ac, label, onChange, options }: ControlOptionProps) => {
  return (
    <div className="control-option">
      <div className="control-option-label">{`${label}:`}</div>
      <div className="control-option-main">
        {options[0]}
        <ToggleControl ac={ac} onChange={onChange} />
        {options[1]}
      </div>
    </div>
  );
};
