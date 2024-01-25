import { clsx } from "clsx";
import Slider from "rc-slider";
import React from "react";

import { useAppContext } from "../../hooks/use-app-context";
import { Organs } from "../../utils/app-constants";
import { ButtonToggle } from "./button-toggle";

import AmygdalaPerson from "../../assets/new-sim/people/person-brain-amygdala.svg";
import HeartPerson from "../../assets/new-sim/people/person-artery.svg";
import NosePerson from "../../assets/new-sim/people/person-nose.svg";
import PrefrontalCortexPerson from "../../assets/new-sim/people/person-brain-prefrontal-cortex.svg";

import "./simulation-settings.scss";

interface ISimulationSettingsProps {
  control1: boolean;
  setControl1: (val: boolean) => void;
  control2: boolean;
  setControl2: (val: boolean) => void;
  keyVisible: boolean;
  playingVideo: boolean;
  setKeyVisible: (val: boolean) => void;
  setPlayingVideo: (val: boolean) => void;
  simulationTime: number;
  setSimulationTime: (val: number) => void;
  setExperimentIsRun: (c1: boolean, c2: boolean) => void;
}
export function SimulationSettings({
  control1, setControl1, control2, setControl2, keyVisible,
  playingVideo, setKeyVisible, setPlayingVideo, simulationTime, setSimulationTime, setExperimentIsRun
}: ISimulationSettingsProps) {
  const ac = useAppContext();

  // Set up slider
  const onSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) return;
    setSimulationTime(value);
    setPlayingVideo(true);
  };
  const timePoints = [0, 1, 2];
  const marks: Record<number, string> = {};
  timePoints.forEach(time => marks[time] = simulationTime === time ? ac.o(`SIMTIMELABEL${time}`) : " ");

  // Set up person image
  const isBrain = ac.organ === Organs.brain;
  const Person = ac.organ === Organs.heart ? HeartPerson
    : ac.organ === Organs.nose ? NosePerson
    : control1 ? AmygdalaPerson : PrefrontalCortexPerson;

  return (
    <div className="simulation-settings">
      <div className="settings-header">
        <span className="title">{ac.o("SIMULATIONTITLE")}</span>{ac.t("SIMSETTINGSPOSTFIX")}
      </div>
      <div className="setting video-control">
        <div className="setting-title">{ac.t("SIMSETTINGSTIMETITLE")}</div>
        <div className="video-control-row">
          <button
            className={clsx("play-button", { playing: playingVideo })}
            onClick={() => setPlayingVideo(!playingVideo)}
          />
          <div className="slider-container">
            <Slider
              marks={marks}
              max={timePoints[timePoints.length - 1]}
              min={timePoints[0]}
              onChange={onSliderChange}
              step={1}
              value={simulationTime}
            />
          </div>
        </div>
      </div>
      <ButtonToggle
        controlNumber={1}
        leftClass={isBrain && "brain1"}
        playVideo={() => setPlayingVideo(true)}
        rightClass={isBrain && "brain2"}
        setValue={(v) => setControl1(v)}
        value={control1}
      />
      <ButtonToggle
        controlNumber={2}
        playVideo={() => setPlayingVideo(true)}
        setValue={(v) => setControl2(v)}
        value={control2}
      />
      <Person className={clsx("person", ac.organ)} />
      <button className="simulation-button reset" />
      <button
        className="simulation-button key"
        disabled={keyVisible}
        onClick={() => setKeyVisible(true)}
      />
    </div>
  );
}
