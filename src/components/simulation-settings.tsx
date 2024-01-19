import { clsx } from "clsx";
import Slider from "rc-slider";
import React from "react";

import { AppContext } from "../hooks/use-app-context";
import { useCommonState } from "../hooks/use-common-state";
import { useSimulationState } from "../hooks/use-simulation-state";
import { ButtonToggle } from "./button-toggle";

import AmygdalaPerson from "../assets/new-sim/people/person-brain-amygdala.svg";
import HeartPerson from "../assets/new-sim/people/person-artery.svg";
import NosePerson from "../assets/new-sim/people/person-nose.svg";
import PrefrontalCortexPerson from "../assets/new-sim/people/person-brain-prefrontal-cortex.svg";

import "./simulation-settings.scss";

// interface ITimeTrack {
//   ac: AppContext;
//   percentComplete: number;
//   marks?: Record<number, string>;
// }
// const TimeTrack = ({ ac, percentComplete, marks }: ITimeTrack) => {
//   const [sliderValue, setSliderValue] = useState(0);
//   const [dragging, setDragging] = useState(false);
//   const { setSimulationTime, simulationTime } = useSimulationState(ac);

//   const onBeforeChange = (value: number | number[]) => {
//     if (Array.isArray(value)) return;
//     setSliderValue(value);
//     setDragging(true);
//   };

//   const onChange = (value: number | number[]) => {
//     if (Array.isArray(value)) return;
//     setSimulationTime(value);
//   };

//   const onAfterChange = (value: number | number[]) => {
//     if (Array.isArray(value)) return;
//     setSliderValue(value);
//     setDragging(false);
//   };

//   return (
//     <div>
//       <div className="slider-container">
//         <Slider min={0} max={1} step={.001} defaultValue={0}
//           onBeforeChange={onBeforeChange}
//           onChange={onChange}
//           onAfterChange={onAfterChange}
//           value={dragging ? sliderValue : percentComplete}
//           marks={marks}
//         />
//       </div>
//     </div>
//   );
// };

interface ISimulationSettingsProps {
  ac: AppContext;
}
export function SimulationSettings({ ac }: ISimulationSettingsProps) {
  const {
    control1, setControl1, control2, setControl2
  } = useCommonState(ac);
  const { playingVideo, setPlayingVideo, setSimulationTime, simulationTime } = useSimulationState(ac);
  const isBrain = ac.organ === "brain";
  const Person = ac.organ === "heart" ? HeartPerson
    : ac.organ === "nose" ? NosePerson
    : control1 ? AmygdalaPerson : PrefrontalCortexPerson;
  const personStyle = isBrain
    ? { bottom: "21px", right: "30px" }
    : { bottom: "84px", right: "32px" };

  const onSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) return;
    setSimulationTime(value);
  };
  return (
    <div className="simulation-settings">
      <div className="settings-header">
        Simulation Settings
      </div>
      <div className="setting video-control">
        <div className="setting-title">Simulation Time</div>
        <div className="video-control-row">
          <button
            className={clsx("play-button", { playing: playingVideo })}
            onClick={() => setPlayingVideo(!playingVideo)}
          />
          <div className="slider-container">
            <Slider
              marks={{
                0: simulationTime === 0 ? "20 years" : " ",
                1: simulationTime === 1 ? "30 years" : " ",
                2: simulationTime === 2 ? "40 years" : " "
              }}
              max={2}
              min={0}
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
        rightClass={isBrain && "brain2"}
        setValue={setControl1}
        twoLines={true}
        value={control1}
      />
      <ButtonToggle
        ac={ac}
        controlPrefix={"SIMCONTROL2"}
        invert={ac.organ === "brain"}
        setValue={setControl2}
        value={control2}
      />
      <Person className="person" style={personStyle} />
    </div>
  );
}
