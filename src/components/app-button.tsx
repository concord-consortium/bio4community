import React from "react";
import { clsx } from "clsx";

import { useAppContext } from "../hooks/use-app-context";

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
  onClick: (event: any) => void;
}
export const KeyButton = ({ onClick }: IKeyButton) => {
  const ac = useAppContext();
  return (
    <AppButton
      buttonClass={clsx("app-button", "key-button", ac.mode)}
      icon={<ShowIcon className={clsx("button-icon", "show-button-icon", ac.mode)} />}
      label="Key"
      onClick={onClick}
    />
  );
};

interface IPlayButton {
  playing: boolean;
  onClick: (event: any) => void;
}
export const PlayButton = ({ playing, onClick }: IPlayButton) => {
  const ac = useAppContext();
  const icon = playing
    ? <PauseIcon className="button-icon pause-button-icon" />
    : <PlayIcon className="button-icon play-button-icon" />;
  const label = playing ? "Pause" : "Play";
  return (
    <AppButton
      buttonClass={clsx("app-button", "play-button", ac.mode)}
      icon={icon}
      label={label}
      onClick={onClick}
    />
  );
};
