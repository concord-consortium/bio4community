import React from "react";
import { VideoView } from "./video-view";
import { AppContainer } from "./app-container";
import { ControlOption, ControlOptionProps } from "./control-option";
import { AppContext } from "../hooks/use-app-context";

import "./simulation-app.scss";

interface SimulationAppProps {
  ac: AppContext;
}
export const SimulationApp = ({ ac }: SimulationAppProps) => {
  const title = ac.o("SIMULATIONTITLE");

  const allControls: Record<string, ControlOptionProps[]> = {
    "heart": [
      {
        label: ac.o("SIMCONTROL1LABEL"),
        options: [ac.o("SIMCONTROL1OPTION1"), ac.o("SIMCONTROL1OPTION2")]
      },
      {
        label: ac.o("SIMCONTROL2LABEL"),
        options: [ac.o("SIMCONTROL2OPTION1"), ac.o("SIMCONTROL2OPTION2")]
      },
      {
        label: ac.o("SIMCONTROL3LABEL"),
        options: [ac.o("SIMCONTROL3OPTION1"), ac.o("SIMCONTROL3OPTION2")]
      }
    ],
    "nose": [
      {
        label: ac.o("SIMCONTROL1LABEL"),
        options: [ac.o("SIMCONTROL1OPTION1"), ac.o("SIMCONTROL1OPTION2")]
      },
      {
        label: ac.o("SIMCONTROL2LABEL"),
        options: [ac.o("SIMCONTROL2OPTION1"), ac.o("SIMCONTROL2OPTION2")]
      },
      {
        label: ac.o("SIMCONTROL3LABEL"),
        options: [ac.o("SIMCONTROL3OPTION1"), ac.o("SIMCONTROL3OPTION2")]
      }
    ],
    "brain": [
      {
        label: ac.o("SIMCONTROL1LABEL"),
        options: [ac.o("SIMCONTROL1OPTION1"), ac.o("SIMCONTROL1OPTION2")]
      },
      {
        label: ac.o("SIMCONTROL2LABEL"),
        options: [ac.o("SIMCONTROL2OPTION1"), ac.o("SIMCONTROL2OPTION2")]
      }
    ]
  };
  const controls = allControls[ac.organ];

  return (
    <div className="app">
      <AppContainer ac={ac} title={title}>
        <div className="options-row">
          <div className="row-header options-header">Options</div>
          { controls.map(({ label, options }: ControlOptionProps) =>
            <ControlOption key={label} label={label} options={options} />) }
        </div>
        <div className="app-row">
          <VideoView ac={ac} title={ac.o("LEFTSIMULATIONTITLE")} />
          <VideoView ac={ac} title={ac.o("RIGHTSIMULATIONTITLE")} />
        </div>
        <div className="app-row">
          <div className="row-header results-header">
            Results: Response over time
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
