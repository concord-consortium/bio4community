import React from "react";

import { AppContext } from "../hooks/use-app-context";
import { useCommonState } from "../hooks/use-common-state";
import { ButtonToggle } from "./button-toggle";

import AmygdalaPerson from "../assets/new-sim/people/person-brain-amygdala.svg";
import HeartPerson from "../assets/new-sim/people/person-artery.svg";
import NosePerson from "../assets/new-sim/people/person-nose.svg";
// import PrefrontalCortexPerson from "../assets/new-sim/people/person-brain-prefrontal-cortex.svg";

// import PauseButton from "../assets/new-sim/buttons/pause-button-on.svg";
// import PauseButtonHover from "../assets/new-sim/buttons/pause-button-hover.svg";
import PlayButton from "../assets/new-sim/buttons/play-button-on.svg";
// import PlayButtonHover from "../assets/new-sim/buttons/play-button-hover.svg";

import "./simulation-settings.scss";

interface ISimulationSettingsProps {
  ac: AppContext;
}
export function SimulationSettings({ ac }: ISimulationSettingsProps) {
  const { control1, setControl1, control2, setControl2 } = useCommonState(ac);
  const Person = ac.organ === "heart" ? HeartPerson
    : ac.organ === "nose" ? NosePerson
    : AmygdalaPerson;
  const personStyle = ["heart", "nose"].includes(ac.organ)
    ? { bottom: "84px", right: "32px" }
    : { bottom: "21px", right: "30px" };
  return (
    <div className="simulation-settings">
      <div className="settings-header">
        Simulation Settings
      </div>
      <div className="setting video-control">
        <div className="setting-title">Simulation Time</div>
        <div className="video-control-row">
          <button className="play-button">
            <PlayButton />
          </button>
        </div>
      </div>
      <ButtonToggle
        ac={ac}
        controlPrefix={"SIMCONTROL1"}
        invert={["heart", "nose"].includes(ac.organ)}
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
