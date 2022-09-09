import React from "react";
import { clsx } from "clsx";
import { AppContext } from "../hooks/use-app-context";

import "./video-view.scss";

interface IVideoView {
  ac: AppContext;
  title: string;
}
export const VideoView = ({ ac, title }: IVideoView) => {
  return (
    <div className="video-view">
      <div className={clsx("video-pane", ac.mode)}>
        <div className="video-title">{title}</div>
      </div>
      <div className={clsx("video-controls", ac.mode)}>Animation Controls</div>
    </div>
  );
};
