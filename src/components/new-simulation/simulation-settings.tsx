import { clsx } from "clsx";
import Slider from "rc-slider";
import React from "react";

import { AppContext } from "../../hooks/use-app-context";
import { ButtonToggle } from "./button-toggle";

import AmygdalaPerson from "../../assets/new-sim/people/person-brain-amygdala.svg";
import HeartPerson from "../../assets/new-sim/people/person-artery.svg";
import NosePerson from "../../assets/new-sim/people/person-nose.svg";
import PrefrontalCortexPerson from "../../assets/new-sim/people/person-brain-prefrontal-cortex.svg";

import "./simulation-settings.scss";

interface ISimulationSettingsProps {
  ac: AppContext;
  control1: boolean;
  setControl1: (val: boolean) => void;
  control2: boolean;
  setControl2: (val: boolean) => void;
  playingVideo: boolean;
  setPlayingVideo: (val: boolean) => void;
  simulationTime: number;
  setSimulationTime: (val: number) => void;
}
export function SimulationSettings({
  ac, control1, setControl1, control2, setControl2,
  playingVideo, setPlayingVideo, simulationTime, setSimulationTime
}: ISimulationSettingsProps) {
  // Set up slider
  const onSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) return;
    setSimulationTime(value);
  };
  const timePoints = [0, 1, 2];
  const marks: Record<number, string> = {};
  timePoints.forEach(time => marks[time] = simulationTime === time ? ac.o(`SIMTIMELABEL${time}`) : " ");

  // Set up person image
  const isBrain = ac.organ === "brain";
  const Person = ac.organ === "heart" ? HeartPerson
    : ac.organ === "nose" ? NosePerson
    : control1 ? AmygdalaPerson : PrefrontalCortexPerson;
  const personStyle = isBrain
    ? { bottom: "80px", right: "31" }
    : { bottom: "107px", right: "25px" };

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
              max={timePoints[timePoints.length -1]}
              min={timePoints[0]}
              onChange={onSliderChange}
              step={1}
              value={simulationTime}
            />
          </div>
        </div>
      </div>
      <ButtonToggle
        ac={ac}
        controlPrefix={"SIMCONTROL1"}
        invert={["heart", "nose"].includes(ac.organ)}
        leftClass={isBrain && "brain1"}
        playVideo={() => setPlayingVideo(true)}
        rightClass={isBrain && "brain2"}
        setValue={setControl1}
        twoLines={true}
        value={control1}
      />
      <ButtonToggle
        ac={ac}
        controlPrefix={"SIMCONTROL2"}
        invert={ac.organ === "brain"}
        playVideo={() => setPlayingVideo(true)}
        setValue={setControl2}
        value={control2}
      />
      <Person className="person" style={personStyle} />
      <button className="simulation-button reset" />
      <button className="simulation-button key" />
    </div>
  );
}
