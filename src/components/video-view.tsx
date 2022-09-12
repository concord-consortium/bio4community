import React, { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { AppContext } from "../hooks/use-app-context";

import BloodVesselMP4 from "../assets/videos/BloodVessel.mp4";

import "./video-view.scss";

interface IVideoView {
  ac: AppContext;
  title: string;
}
export const VideoView = ({ ac, title }: IVideoView) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [videoRef]);

  return (
    <div className="video-view">
      <div className={clsx("video-pane", ac.mode)}>
        <video ref={videoRef}>
          <source src={BloodVesselMP4} type={"mp4"} />
        </video>
        <div className="video-title">{title}</div>
      </div>
      <div className={clsx("video-controls", ac.mode)}>Animation Controls</div>
    </div>
  );
};
