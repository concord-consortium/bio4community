// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useAppContext } from "../../hooks/use-app-context";
import { PaneTitle } from "../pane-title";
import { SimulationOutcome } from "./simulation-outcome";

import { simVideos } from "../../data/video-data";

import "../disabled-overlay.scss";
import "./simulation-video.scss";

interface ISimulationVideo {
  control1: boolean;
  control2: boolean;
  displayOutcome: boolean;
  playing: boolean;
  setDisplayOutcome: (val: boolean) => void;
  simulationTime: number;
}
export const SimulationVideo = ({
  control1, control2, displayOutcome, playing, setDisplayOutcome, simulationTime
}: ISimulationVideo) => {
  const ac = useAppContext();
  const videoFile = simVideos[ac.organ][+control1][+control2][simulationTime] ?? simVideos.heart[0][0][0];

  // Basic video state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);

  // The back video is used to prevent the video from flashing when the video file changes
  const backVideoRef = useRef<HTMLVideoElement | null>(null);
  const [backVideoFile, setBackVideoFile] = useState<any>();

  // pause() and play() are callbacks so they can be used in effects
  const pause = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [videoRef]);

  const play = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  // Update the back video after the front video is finished loading
  const handleLoadedData = () => {
    setBackVideoFile(videoFile);
    setLoading(false);
    if (playing) play();
  };

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
      backVideo.currentTime = videoRef.current?.currentTime || 0;
    }
  }, [loading]);

  useEffect(() => {
    if (playing) {
      play();
    } else {
      pause();
    }
  }, [pause, play, playing]);

  const onEnded = (event: any) => {
    if (playing && videoRef.current) {
      videoRef.current.currentTime = 0;
      play();
    }
    // Reveal the outcome when the final video is finished
    if (simulationTime === 2 && !displayOutcome) setDisplayOutcome(true);
  };

  return (
    <div className="video-area">
      <video
        ref={backVideoRef}
        className="simulation-video"
      >
        <source src={backVideoFile} type={"video/mp4"} />
      </video>
      <video
        ref={videoRef}
        onLoadedData={handleLoadedData}
        onEnded={onEnded}
        className="simulation-video"
      >
        <source src={videoFile} type={"video/mp4"} />
      </video>
      <PaneTitle extraClass="video-title top-video-title" title={ac.o("LEFTSIMULATIONTITLE")} />
      <PaneTitle extraClass="video-title bottom-video-title" title={ac.o("RIGHTSIMULATIONTITLE")} />
      {displayOutcome && <SimulationOutcome
        control1={control1}
        control2={control2}
      />}
    </div>
  );
};
