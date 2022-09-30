// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

import { PaneTitle } from "./pane-title";
import { VideoControls } from "./video-controls";
import { AppContext } from "../hooks/use-app-context";

import { aniVideos } from "../assets/videos/video-data";

import "./disabled-overlay.scss";
import "./video-view.scss";

interface IVideoView {
  ac: AppContext;
  disabled?: boolean;
  disabledMessage?: string;
  extraClass?: string;
  loop?: boolean; // If true, video restarts when it reaches the end
  percentComplete: number;
  playing: boolean;
  setPercentComplete: (percent: number) => void;
  setPlaying: (value: boolean) => void;
  setTargetVideoIndex?: (index: number) => void;
  timelineMarks?: Record<number, string>;
  title: string;
  videoFile?: any;
}
export const VideoView = ({
  ac, disabled, disabledMessage, extraClass, loop, percentComplete, playing, setPercentComplete, setPlaying,
  setTargetVideoIndex, timelineMarks, title, videoFile
}: IVideoView) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);

  // Keep percentComplete updated based on the video's state
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
  }, [duration, setPercentComplete]);

  // Update the target index (timelineMark) to be the closest to the percent complete
  useEffect(() => {
    if (timelineMarks && setTargetVideoIndex) {
      let closestMark = 0;
      let shortestDistance = 1;
      for (const [key] of Object.entries(timelineMarks)) {
        const mark = +key;
        const distance = Math.abs(mark - percentComplete);
        if (distance < shortestDistance) {
          shortestDistance = distance;
          closestMark = mark;
        }
      }
      setTargetVideoIndex(closestMark);
    }
  }, [percentComplete, setTargetVideoIndex, timelineMarks]);

  // Set the duration of the video when its length is known
  const handleLoadedMetadata = () => {
    setDuration(videoRef.current?.duration || 0);
  };

  // pause() is a callback so it can be used in an effect
  const pause = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [videoRef, setPlaying]);

  // Reload the video when it changes
  useEffect(() => {
    pause();
    videoRef.current?.load();
  }, [pause, videoRef, videoFile]);

  // Pause the video when it becomes disabled
  useEffect(() => {
    if (disabled) {
      pause();
    }
  }, [disabled, pause]);

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
    if (loop && playing) {
      jumpToPosition(0);
      play();
    } else {
      pause();
    }
  };

  return (
    <div className={clsx("video-view", extraClass)}>
      <VideoControls
        ac={ac}
        disabled={disabled}
        extraClass={extraClass}
        jumpToPosition={jumpToPosition}
        onPlayButtonClick={onPlayButtonClick}
        percentComplete={percentComplete}
        playing={playing}
        timelineMarks={timelineMarks}
      />
      <div className={clsx("video-pane", ac.mode, extraClass)}>
        <video
          ref={videoRef}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={onEnded}
          className={clsx("video-view-video", extraClass)}
        >
          <source src={videoFile || aniVideos.tissue.heart[0][0]} type={"video/mp4"} />
        </video>
        <PaneTitle extraClass="video-title" title={title} />
        {disabled && (
          <div className="disabled-overlay">
            {disabledMessage && <div className="disabled-message">{disabledMessage}</div>}
          </div>
        )}
      </div>
    </div>
  );
};
