// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { VideoControls } from "./video-controls";
import { AppContext } from "../hooks/use-app-context";

import BloodVesselMP4 from "../assets/videos/BloodVessel.mp4";

import "./video-view.scss";

interface IVideoTitle {
  title: string;
}
const VideoTitle = ({ title }: IVideoTitle) => (
  <div className="video-title">
    {title}
  </div>
);

interface IVideoView {
  ac: AppContext;
  loop?: boolean; // If true, video restarts when it reaches the end
  timelineMarks?: Record<number, string>;
  title: string;
  videoFile?: any;
}
export const VideoView = ({ ac, loop, timelineMarks, title, videoFile }: IVideoView) => {
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

  const onPlayButtonClick = (event: any) => {
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

  const onEnded = (event: any) => {
    if (loop) {
      jumpToPosition(0);
      play();
    } else {
      pause();
    }
  };

  return (
    <div className="video-view">
      <div className={clsx("video-pane", ac.mode)}>
        <video
          ref={videoRef}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={onEnded}
          className="video-view-video"
        >
          <source src={videoFile || BloodVesselMP4} type={"video/mp4"} />
        </video>
        <VideoTitle title={title} />
      </div>
      <VideoControls
        ac={ac}
        jumpToPosition={jumpToPosition}
        onPlayButtonClick={onPlayButtonClick}
        percentComplete={percentComplete}
        playing={playing}
        timelineMarks={timelineMarks}
      />
    </div>
  );
};
