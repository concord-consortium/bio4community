import { clsx } from "clsx";
import React from "react";

import { useAppContext } from "../../hooks/use-app-context";
import { invertedControl } from "../../hooks/use-common-state";

import "./button-toggle.scss";

interface IButtonToggleProps {
  controlNumber: number; // 1 for the top control, 2 for the bottom control
  leftClass?: string | boolean;
  playVideo: () => void;
  rightClass?: string | boolean;
  setValue: (value: boolean) => void;
  value: boolean;
}
export function ButtonToggle({
  controlNumber, leftClass, playVideo, rightClass, setValue, value
}: IButtonToggleProps) {
  const ac = useAppContext();
  // Some controls are rendered inverted (true is on the left)
  // This is necessary to maintain backwards compatibility with the old animations
  const invert = invertedControl(ac, controlNumber);
  const leftSelected = invert ? value : !value;
  const rightSelected = invert ? !value : value;
  const handleButtonClick = (val: boolean) => {
    playVideo();
    setValue(val);
  };
  const leftOnClick = () => handleButtonClick(!!invert);
  const rightOnClick = () => handleButtonClick(!invert);
  const controlPrefix = `SIMCONTROL${controlNumber}`;
  const falseLabel = ac.o(controlPrefix + "OPTION1");
  const trueLabel = ac.o(controlPrefix + "OPTION2");
  const leftLabel = invert ? trueLabel : falseLabel;
  const rightLabel = invert ? falseLabel : trueLabel;
  const twoLines = controlNumber === 1; // The top button set has longer labels that need to take two lines
  const leftClasses = clsx("toggle-button", leftClass, { selected: leftSelected, "two-lines": twoLines });
  const rightClasses = clsx("toggle-button", rightClass, { selected: rightSelected, "two-lines": twoLines });
  return (
    <div className="setting button-toggle">
      <div className="setting-title">{ac.o(controlPrefix + "LABEL")}</div>
      <div className="button-row">
        <button
          className={leftClasses}
          onClick={leftOnClick}
        >
          {leftLabel}
        </button>
        <button
          className={rightClasses}
          onClick={rightOnClick}
        >
          {rightLabel}
        </button>
      </div>
    </div>
  );
}
