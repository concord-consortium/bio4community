// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { AppContext } from "../hooks/use-app-context";

import BloodVesselMP4 from "../assets/videos/BloodVessel.mp4";

import "./video-view.scss";

interface IPlayButton {
  playing: boolean;
  onClick: (event: any) => void;
}
const PlayButton = ({ playing, onClick }: IPlayButton) => {
  const label = playing ? "Pause" : "Play";
  return (
    <button onClick={onClick}>{label}</button>
  );
};

interface IVideoView {
  ac: AppContext;
  title: string;
}
export const VideoView = ({ ac, title }: IVideoView) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [percentComplete, setPercentComplete] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      if (videoRef.current && duration > 0) {
        const pc = videoRef.current.currentTime / duration;
        setPercentComplete(pc);
      }
      return () => {
        clearInterval(tickInterval);
      };
    }, 100);
  }, [duration]);

  useEffect(() => {
    videoRef.current?.load();
  }, [videoRef]);

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current?.duration || 0);
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const play = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const onButtonClick = (event: any) => {
    if (videoRef.current) {
      if (playing) {
        pause();
      } else {
        play();
      }
    }
  };

  return (
    <div className="video-view">
      <div className={clsx("video-pane", ac.mode)}>
        <video ref={videoRef} onLoadedMetadata={handleLoadedMetadata} onEnded={(event: any) => pause()} >
          <source src={BloodVesselMP4} type={"video/mp4"} />
        </video>
        <div className="video-title">{title}</div>
      </div>
      <div className={clsx("video-controls", ac.mode)}>
        <PlayButton playing={playing} onClick={onButtonClick} />
      </div>
    </div>
  );
};
