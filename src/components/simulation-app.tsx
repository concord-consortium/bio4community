import React, { useEffect, useState } from "react";
import { clsx } from "clsx";

import { VideoView } from "./video-view";
import { AppContainer } from "./app-container";
import { SimGraph } from "./sim-graph";
import { AppContext } from "../hooks/use-app-context";
import { renderControls } from "../utils/app-data";

import { videos } from "../assets/videos/video-data";

import "./simulation-app.scss";

interface SimulationAppProps {
  ac: AppContext;
}
export const SimulationApp = ({ ac }: SimulationAppProps) => {
  const [playingTissue, setPlayingTissue] = useState(false);
  const [playingCell, setPlayingCell] = useState(false);
  const [targetVideoIndex, setTargetVideoIndex] = useState(0);
  const title = ac.o("SIMULATIONTITLE");

  const [control1, setControl1] = useState(false);
  const [control2, setControl2] = useState(false);
  const [control3, setControl3] = useState(false);

  useEffect(() => {
    console.log(`${ac.o("SIMCONTROL1LABEL")}: ${ac.o(control1 ? "SIMCONTROL1OPTION2" : "SIMCONTROL1OPTION1")}`);
  }, [ac, control1]);

  useEffect(() => {
    console.log(`${ac.o("SIMCONTROL2LABEL")}: ${ac.o(control2 ? "SIMCONTROL2OPTION2" : "SIMCONTROL2OPTION1")}`);
  }, [ac, control2]);

  useEffect(() => {
    console.log(`${ac.o("SIMCONTROL3LABEL")}: ${ac.o(control3 ? "SIMCONTROL3OPTION2" : "SIMCONTROL3OPTION1")}`);
  }, [ac, control3]);

  const disabledMessage = "Pause the Simulated Artery to see what happens in the cells";
  return (
    <div className="app">
      <AppContainer ac={ac} title={title}>
        <div className="options-row">
          <div className="row-header options-header">Options</div>
          { renderControls({ ac, onChanges: [setControl1, setControl2, setControl3] }) }
        </div>
        <div className="app-row">
          <VideoView
            ac={ac}
            playing={playingTissue}
            setPlaying={setPlayingTissue}
            setTargetVideoIndex={setTargetVideoIndex}
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
            videoFile={(videos.cell as Record<string, Record<number, any>>)[ac.organ][targetVideoIndex]}
          />
        </div>
        <div className="options-row">
          <div className="row-header results-header">
            Results: Response over time
          </div>
          <SimGraph ac={ac} />
          <SimGraph ac={ac} />
          <div className={clsx("divider", ac.mode)} style={{height: 141}} />
          <div className="key-box">
            <button>Key</button>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
