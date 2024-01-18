import { clsx } from "clsx";
import React from "react";

import { AppContext } from "../hooks/use-app-context";

import "./button-toggle.scss";

interface IButtonToggleProps {
  ac: AppContext;
  controlPrefix: string; // Used to generate keys for labels
  invert?: boolean; // Set to true when the order of the boolean value should switch (true on the left)
  setValue: (value: boolean) => void;
  twoLines?: boolean; // Set to true to force the button's label to render as two lines
  value: boolean;
}
export function ButtonToggle({ ac, controlPrefix, invert, setValue, twoLines, value }: IButtonToggleProps) {
  const leftSelected = invert ? value : !value;
  const rightSelected = invert ? !value : value;
  const leftOnClick = () => setValue(!!invert);
  const rightOnClick = () => setValue(!invert);
  const falseLabel = ac.o(controlPrefix + "OPTION1");
  const trueLabel = ac.o(controlPrefix + "OPTION2");
  const leftLabel = invert ? trueLabel : falseLabel;
  const rightLabel = invert ? falseLabel : trueLabel;
  return (
    <div className="setting button-toggle">
      <div className="setting-title">{ac.o(controlPrefix + "LABEL")}</div>
      <div className="button-row">
        <button
          className={clsx("toggle-button", { selected: leftSelected, "two-lines": twoLines })}
          onClick={leftOnClick}
        >
          {leftLabel}
        </button>
        <button
          className={clsx("toggle-button", { selected: rightSelected, "two-lines": twoLines })}
          onClick={rightOnClick}
        >
          {rightLabel}
        </button>
      </div>
    </div>
  );
}
