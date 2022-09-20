import React from "react";
import { clsx } from "clsx";

import { AppContext } from "../hooks/use-app-context";

import PauseIcon from "../assets/icons/pause-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";
import ShowIcon from "../assets/icons/show-icon.svg";

import "./app-button.scss";

interface IAppButton {
  buttonClass?: string;
  icon?: any;
  iconClass?: string;
  label?: string;
  labelClass?: string;
  onClick: (event: any) => void;
}
export const AppButton = ({ buttonClass, icon, iconClass, label, labelClass, onClick }: IAppButton) => {
  return (
    <button onClick={onClick} className={buttonClass || "app-button"} >
      {icon ? (
        <div className={iconClass || "button-icon-container"}>
          {icon}
        </div>
      ) : ""}
      {label ? (
        <div className={labelClass || "button-label"}>
          {label}
        </div>
      ) : ""}
    </button>
  );
};

interface IKeyButton {
  ac: AppContext;
  onClick: (event: any) => void;
}
export const KeyButton = ({ ac, onClick }: IKeyButton) => {
  return (
    <AppButton
      buttonClass={clsx("app-button", "key-button", ac.mode)}
      icon={<ShowIcon className="button-icon show-button-icon" />}
      label="Key"
      onClick={onClick}
    />
  );
};

interface IPlayButton {
  ac: AppContext;
  playing: boolean;
  onClick: (event: any) => void;
}
export const PlayButton = ({ ac, playing, onClick }: IPlayButton) => {
  const icon = playing
    ? <PauseIcon className="button-icon pause-button-icon" />
    : <PlayIcon className="button-icon play-button-icon" />;
  const label = playing ? "Pause" : "Play";
  return (
    <AppButton
      buttonClass={clsx("app-button", ac.mode)}
      icon={icon}
      label={label}
      onClick={onClick}
    />
  );
};
