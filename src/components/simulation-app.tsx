import React from "react";
import { Animation } from "./animation";
import { AppContainer } from "./app-container";
import { ControlOption, ControlOptionProps } from "./control-option";
import { Translator } from "../hooks/use-translator";

import "./simulation-app.scss";

interface SimulationAppProps {
  organ: string;
  t: Translator;
}
export const SimulationApp = ({ organ, t }: SimulationAppProps) => {
  const title = t.o("SIMULATIONTITLE");

  const allControls: Record<string, ControlOptionProps[]> = {
    "heart": [
      {
        label: t.o("SIMCONTROL1LABEL"),
        options: [t.o("SIMCONTROL1OPTION1"), t.o("SIMCONTROL1OPTION2")]
      },
      {
        label: t.o("SIMCONTROL2LABEL"),
        options: [t.o("SIMCONTROL2OPTION1"), t.o("SIMCONTROL2OPTION2")]
      },
      {
        label: t.o("SIMCONTROL3LABEL"),
        options: [t.o("SIMCONTROL3OPTION1"), t.o("SIMCONTROL3OPTION2")]
      }
    ],
    "nose": [
      {
        label: t.o("SIMCONTROL1LABEL"),
        options: [t.o("SIMCONTROL1OPTION1"), t.o("SIMCONTROL1OPTION2")]
      },
      {
        label: t.o("SIMCONTROL2LABEL"),
        options: [t.o("SIMCONTROL2OPTION1"), t.o("SIMCONTROL2OPTION2")]
      },
      {
        label: t.o("SIMCONTROL3LABEL"),
        options: [t.o("SIMCONTROL3OPTION1"), t.o("SIMCONTROL3OPTION2")]
      }
    ],
    "brain": [
      {
        label: t.o("SIMCONTROL1LABEL"),
        options: [t.o("SIMCONTROL1OPTION1"), t.o("SIMCONTROL1OPTION2")]
      },
      {
        label: t.o("SIMCONTROL2LABEL"),
        options: [t.o("SIMCONTROL2OPTION1"), t.o("SIMCONTROL2OPTION2")]
      }
    ]
  };
  const controls = allControls[organ];

  return (
    <div className="app">
      <AppContainer title={title}>
        <div className="options-row">
          <div className="row-header options-header">Options</div>
          { controls.map(({ label, options }: ControlOptionProps) =>
            <ControlOption key={label} label={label} options={options} />) }
        </div>
        <div className="app-row">
          <Animation title={t.o("LEFTSIMULATIONTITLE")} />
          <Animation title={t.o("RIGHTSIMULATIONTITLE")} />
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
