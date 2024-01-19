import { clsx } from "clsx";
import React from "react";

import { AppContext } from "../hooks/use-app-context";

import "./button-toggle.scss";

interface IButtonToggleProps {
  ac: AppContext;
  controlPrefix: string; // Used to generate keys for labels
  invert?: boolean; // Set to true when the order of the boolean value should switch (true on the left)
  leftClass?: string | boolean;
  playVideo: () => void;
  rightClass?: string | boolean;
  setValue: (value: boolean) => void;
  twoLines?: boolean; // Set to true to force the button's label to render as two lines
  value: boolean;
}
export function ButtonToggle({
  ac, controlPrefix, invert, leftClass, playVideo, rightClass, setValue, twoLines, value
}: IButtonToggleProps) {
  const leftSelected = invert ? value : !value;
  const rightSelected = invert ? !value : value;
  const handleButtonClick = (val: boolean) => {
    playVideo();
    setValue(val);
  };
  const leftOnClick = () => handleButtonClick(!!invert);
  const rightOnClick = () => handleButtonClick(!invert);
  const falseLabel = ac.o(controlPrefix + "OPTION1");
  const trueLabel = ac.o(controlPrefix + "OPTION2");
  const leftLabel = invert ? trueLabel : falseLabel;
  const rightLabel = invert ? falseLabel : trueLabel;
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
