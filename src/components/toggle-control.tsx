// Taken and modified from the CLUE codebase
import React, { useState } from "react";
import { clsx } from "clsx";
import { IAppContext } from "../hooks/use-app-context";

import "./toggle-control.scss";

interface IProps {
  ac: IAppContext;
  className?: string;
  dataTest?: string;
  disabled?: boolean;
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
  title?: string;
}

const ToggleControl: React.FC<IProps> = ({ ac, className, dataTest, disabled, initialValue, onChange, title }) => {
  const [value, setValue] = useState(initialValue || false);

  const handleClick = () => {
    if (!disabled) {
      onChange?.(!value);
      setValue(!value);
    }
  };

  const onClass = value ? "toggle-on" : "";

  return (
    <div className={clsx(`toggle-control`, className, ac.mode)}
      data-test={dataTest} title={title} onClick={handleClick}
    >
      <div className={clsx(`track`, onClass, ac.mode)}/>
      <div className={clsx(`ball`, onClass, ac.mode)}/>
    </div>
  );
};

export default ToggleControl;
