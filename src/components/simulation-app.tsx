import React, { useState } from "react";
import { VideoView } from "./video-view";
import { AppContainer } from "./app-container";
import { ControlOption, ControlOptionProps } from "./control-option";
import { SimGraph } from "./sim-graph";
import { AppContext } from "../hooks/use-app-context";

import { videos } from "../assets/videos/video-data";

import "./simulation-app.scss";

interface SimulationAppProps {
  ac: AppContext;
}
export const SimulationApp = ({ ac }: SimulationAppProps) => {
  const [playingTissue, setPlayingTissue] = useState(false);
  const [playingCell, setPlayingCell] = useState(false);
  const title = ac.o("SIMULATIONTITLE");

  const allControls: Record<string, (ControlOptionProps | string)[]> = {
    "heart": [
      {
        label: ac.o("SIMCONTROL1LABEL"),
        options: [ac.o("SIMCONTROL1OPTION1"), ac.o("SIMCONTROL1OPTION2")]
      },
      "divider",
      {
        label: ac.o("SIMCONTROL2LABEL"),
        options: [ac.o("SIMCONTROL2OPTION1"), ac.o("SIMCONTROL2OPTION2")]
      },
      "divider",
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
      "divider",
      {
        label: ac.o("SIMCONTROL2LABEL"),
        options: [ac.o("SIMCONTROL2OPTION1"), ac.o("SIMCONTROL2OPTION2")]
      },
      "divider",
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
      "divider",
      {
        label: ac.o("SIMCONTROL2LABEL"),
        options: [ac.o("SIMCONTROL2OPTION1"), ac.o("SIMCONTROL2OPTION2")]
      }
    ]
  };
  const controls = allControls[ac.organ];

  const disabledMessage = "Pause the Simulated Artery to see what happens in the cells";
  return (
    <div className="app">
      <AppContainer ac={ac} title={title}>
        <div className="options-row">
          <div className="row-header options-header">Options</div>
          { controls.map((control: ControlOptionProps | string) => (
            typeof control === "string"
              ? <div className="vertical-divider" style={{height: 40}}></div>
              : <ControlOption key={control.label} label={control.label} options={control.options} />
          )) }
        </div>
        <div className="app-row">
          <VideoView
            ac={ac}
            playing={playingTissue}
            setPlaying={setPlayingTissue}
            title={ac.o("LEFTSIMULATIONTITLE")}
            timelineMarks={{ 0: "20 years", .333: "30 years", .667: "40 years", 1: "50 years" }}
            videoFile={(videos.tissue as Record<string, any>)[ac.organ]}
          />
          <VideoView
            ac={ac}
            disabled={playingTissue}
            disabledMessage={disabledMessage}
            extraClass="cell-view"
            loop={true}
            playing={playingCell}
            setPlaying={setPlayingCell}
            title={ac.o("RIGHTSIMULATIONTITLE")}
            timelineMarks={{ 0: " ", 1: " " }}
            videoFile={(videos.cell as Record<string, Record<number, any>>)[ac.organ][0]}
          />
        </div>
        <div className="options-row">
          <div className="row-header results-header">
            Results: Response over time
          </div>
          <SimGraph ac={ac} />
          <SimGraph ac={ac} />
          <div className="vertical-divider" style={{height: 141}}></div>
          <div className="key-box">
            <button>Key</button>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
