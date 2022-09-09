import React from "react";

export interface ControlOptionProps {
  label: string;
  options: [string, string];
}
export const ControlOption = ({ label, options }: ControlOptionProps) => {
  return (
    <div className="control-option">
      <div className="control-option-label">{`${label}:`}</div>
      <div>{`${options[0]} or ${options[1]}`}</div>
    </div>
  );
};
