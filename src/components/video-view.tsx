import React, { useCallback, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

import { PaneTitle } from "./pane-title";
import { VideoControls } from "./video-controls";
import { useAppContext } from "../hooks/use-app-context";

import { videoFadeIn } from "../data/zoom-data";
import { aniVideos } from "../data/video-data";

import "./disabled-overlay.scss";
import "./video-view.scss";

interface IVideoView {
  disabled?: boolean;
  disabledMessage?: string;
  extraClass?: string;
  loop?: boolean; // If true, video restarts when it reaches the end
  overlay?: any; // A component to display over the video
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
  disabled, disabledMessage, extraClass, loop, overlay, percentComplete, playing, setPercentComplete, setPlaying,
  setTargetVideoIndex, timelineMarks, title, videoFile
}: IVideoView) => {
  const ac = useAppContext();

  // Basic video state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(true);

  // The back video is used to prevent the video from flashing when the video file changes
  const backVideoRef = useRef<HTMLVideoElement | null>(null);
  const [backVideoFile, setBackVideoFile] = useState<any>();

  // Make the overlay fade out the first time it disappears, but just the first time
  const [initialFadeIn, setInitialFadeIn] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({ opacity: 1 });
  useEffect(() => {
    if (!initialFadeIn && !disabled) {
      setOverlayStyle({ opacity: 0 });
      setTimeout(() => {
        setOverlayStyle({ opacity: 1 });
        setInitialFadeIn(true);
      }, videoFadeIn * 1000);
    }
  }, [disabled, initialFadeIn]);

  // Keep percentComplete updated based on the video's state
  useEffect(() => {
    const tickInterval = setInterval(() => {
      if (videoRef.current && duration > 0) {
        const pc = videoRef.current.currentTime / duration;
        setPercentComplete(pc);
      }
    }, 30);
    return () => {
      clearInterval(tickInterval);
    };
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

  // Update the back video after the front video is finished loading
  const handleLoadedData = () => {
    setBackVideoFile(videoFile);
    setLoading(false);
  };

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
    setLoading(true);
  }, [pause, videoRef, videoFile]);

  // Reload the back video when its video file changes
  useEffect(() => {
    backVideoRef.current?.load();
  }, [backVideoFile, backVideoRef]);

  // Keep the back video up to date with the front video
  useEffect(() => {
    const backVideo = backVideoRef.current;
    if (backVideo && !loading) {
      backVideo.currentTime = percentComplete * duration;
    }
  }, [duration, loading, percentComplete]);

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

  const kDefaultVideo = aniVideos.tissue.heart[0][0];
  return (
    <div className={clsx("video-view", extraClass)}>
      <VideoControls
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
          ref={backVideoRef}
          className={clsx("video-view-video", extraClass)}
        >
          <source src={backVideoFile || kDefaultVideo} type={"video/mp4"} />
        </video>
        <video
          ref={videoRef}
          onLoadedData={handleLoadedData}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={onEnded}
          className={clsx("video-view-video", extraClass)}
        >
          <source src={videoFile || kDefaultVideo} type={"video/mp4"} />
        </video>
        <PaneTitle extraClass="video-title" title={title} />
        {overlay}
        {(disabled || !initialFadeIn) && (
          <div className="disabled-overlay" style={overlayStyle} >
            {disabledMessage && <div className="disabled-message">{disabledMessage}</div>}
          </div>
        )}
      </div>
    </div>
  );
};
