import React from "react";
import ToggleControl from "./toggle-control";
import { IAppContext } from "../hooks/use-app-context";

import "./control-option.scss";

export interface PartialControlOptionProps {
  label: string;
  options: [string, string];
}
export interface ControlOptionProps extends PartialControlOptionProps{
  ac: IAppContext;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}
export const ControlOption = ({ ac, disabled, label, onChange, options }: ControlOptionProps) => {
  return (
    <div className="control-option">
      <div className="control-option-label">{`${label}:`}</div>
      <div className="control-option-main">
        <div className="control-option-option">{options[0]}</div>
        <ToggleControl ac={ac} disabled={disabled} onChange={onChange} />
        <div className="control-option-option">{options[1]}</div>
      </div>
    </div>
  );
};
