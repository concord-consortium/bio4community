import React, { useState } from "react";
import { clsx } from "clsx";
import Slider from "rc-slider";
import { AppContext } from "../hooks/use-app-context";

import "./disabled-overlay.scss";
import "./video-controls.scss";

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
  marks?: Record<number, string>;
}
const TimeTrack = ({ jumpToPosition, percentComplete, marks }: ITimeTrack) => {
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
          value={dragging ? sliderValue : percentComplete}
          marks={marks}
        />
      </div>
    </div>
  );
};

interface IVideoControls {
  ac: AppContext;
  disabled?: boolean;
  extraClass?: string;
  jumpToPosition: (pos: number) => void;
  onPlayButtonClick: (event: any) => void;
  percentComplete: number;
  playing: boolean;
  timelineMarks?: Record<number, string>;
}
export const VideoControls = ({
  ac, disabled, extraClass, jumpToPosition, onPlayButtonClick, percentComplete, playing, timelineMarks
}: IVideoControls) => {
  // Default including marks at the end of the timeline
  const marks = timelineMarks || { 0: " ", 1: " " };

  return (
    <div className={clsx("video-controls", ac.mode, extraClass)}>
      <PlayButton playing={playing} onClick={onPlayButtonClick} ac={ac} />
      <div className="vertical-divider" />
      <TimeTrack
        jumpToPosition={jumpToPosition}
        percentComplete={percentComplete}
        marks={ marks }
      />
      {disabled && <div className="disabled-overlay" />}
    </div>
  );
};
