// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import Slider from "rc-slider";
import { AppContext } from "../hooks/use-app-context";

import BloodVesselMP4 from "../assets/videos/BloodVessel.mp4";

import "./video-view.scss";

interface IPlayButton {
  ac: AppContext;
  playing: boolean;
  onClick: (event: any) => void;
}
const PlayButton = ({ ac, playing, onClick }: IPlayButton) => {
  const label = playing ? "Pause" : "Play";
  return (
    <button onClick={onClick} className={clsx("video-view-button", ac.mode)} >{label}</button>
  );
};

interface ITimeTrack {
  jumpToPosition: (position: number) => void;
  percentComplete: number;
  labels: any[];
}
const TimeTrack = ({ jumpToPosition, percentComplete, labels }: ITimeTrack) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [dragging, setDragging] = useState(false);

  const onBeforeChange = (value: number | number[]) => {
    if (Array.isArray(value)) return;
    setSliderValue(value);
    setDragging(true);
  };

  const onChange = (value: number | number[]) => {
    if (Array.isArray(value)) return;
    setSliderValue(value);
    jumpToPosition(value);
  };

  const onAfterChange = (value: number | number[]) => {
    if (Array.isArray(value)) return;
    setSliderValue(value);
    setDragging(false);
  };

  return (
    <div>
      <div className="slider-container">
        <Slider min={0} max={1} step={.001} defaultValue={0}
          onBeforeChange={onBeforeChange}
          onChange={onChange}
          onAfterChange={onAfterChange}
          value={dragging ? sliderValue : percentComplete} />
      </div>
      <div>
        {labels.forEach((label: any, index: number) => {
          return label;
        })}
      </div>
    </div>
  );
};

interface IVideoView {
  ac: AppContext;
  title: string;
}
export const VideoView = ({ ac, title }: IVideoView) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);
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
    }, 30);
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

  const jumpToPosition = (position: number) => {
    if (position >= 0 && position <= 1) {
      const video = videoRef.current;
      if (video) {
        video.currentTime = position * duration;
      }
      setPercentComplete(position);
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
        <PlayButton playing={playing} onClick={onButtonClick} ac={ac} />
        <div className="vertical-divider" />
        <TimeTrack
          jumpToPosition={jumpToPosition}
          percentComplete={percentComplete}
          labels={[<span key="sty"><b>Simulated Time</b> (years)</span>]}
        />
      </div>
    </div>
  );
};
