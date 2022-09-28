import React, { useEffect, useState } from "react";
import { clsx } from "clsx";

import { VideoView } from "./video-view";
import { KeyButton } from "./app-button";
import { AppContainer } from "./app-container";
import { Coord, SimGraph } from "./sim-graph";
import { AppContext } from "../hooks/use-app-context";
import { graphData, renderControls } from "../utils/app-data";

import { simVideos } from "../assets/videos/video-data";
import OptionsLabelBack from "../assets/backgrounds/options-label-back.svg";
import ResultsLabelBack from "../assets/backgrounds/results-label-back.svg";

import "./simulation-app.scss";

interface SimulationAppProps {
  ac: AppContext;
  setKeyVisible: (func: (value: boolean) => boolean) => void;
}
export const SimulationApp = ({ ac, setKeyVisible }: SimulationAppProps) => {
  const [playingTissue, setPlayingTissue] = useState(false);
  const [tPercentComplete, setTPercentComplete] = useState(0);
  const [tissueComplete, setTissueComplete] = useState(false);
  const [playingCell, setPlayingCell] = useState(false);
  const [cPercentComplete, setCPercentComplete] = useState(0);
  const [targetVideoIndex, setTargetVideoIndex] = useState(0);

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

  // Mark the video as incomplete whenever a control changes
  useEffect(() => {
    setTissueComplete(false);
  }, [control1, control2, control3]);

  // Track whether the tissue video has been completed
  useEffect(() => {
    if (tPercentComplete === 1) {
      setTissueComplete(true);
    }
  }, [tPercentComplete]);

  interface IRowHeader {
    backgroundSvg: any;
    headerText: string;
    headerTextSub?: string;
  }
  const RowHeader = ({ backgroundSvg, headerText, headerTextSub }: IRowHeader) => (
    <div className="row-header">
      {backgroundSvg}
      <div className="row-header-text">
        {headerText}
        {headerTextSub && (
          <div className="row-header-text-sub">
            {headerTextSub}
          </div>
        )}
      </div>
    </div>
  );

  const tissueTitle = ac.o("LEFTSIMULATIONTITLE");
  const disabledMessage = ac.t("DISABLEDCELLMESSAGE").replace("VIDEOTITLE", tissueTitle);
  return (
    <AppContainer ac={ac} title={ac.o("SIMULATIONTITLE")}>
      <div className="options-row">
        <RowHeader backgroundSvg={<OptionsLabelBack />} headerText={ac.t("SIMOPTIONSHEADER")} />
        { renderControls({ ac, onChanges: [setControl1, setControl2, setControl3] }) }
        <div />
      </div>
      <div className="app-row">
        <VideoView
          ac={ac}
          percentComplete={tPercentComplete}
          playing={playingTissue}
          setPercentComplete={setTPercentComplete}
          setPlaying={setPlayingTissue}
          setTargetVideoIndex={setTargetVideoIndex}
          title={tissueTitle}
          timelineMarks={{ 0: "20 years", .333: "30 years", .667: "40 years", 1: "50 years" }}
          videoFile={(simVideos.tissue as
            Record<string, Record<number, any>[][][]>)[ac.organ][+control1][+control2][+control3]
          }
        />
        <VideoView
          ac={ac}
          disabled={playingTissue}
          disabledMessage={disabledMessage}
          extraClass="cell-view"
          percentComplete={cPercentComplete}
          playing={playingCell}
          setPercentComplete={setCPercentComplete}
          setPlaying={setPlayingCell}
          title={ac.o("RIGHTSIMULATIONTITLE")}
          timelineMarks={{ 0: " ", 1: " " }}
          videoFile={(simVideos.cell as
            Record<string, Record<number, any>[][][]>)[ac.organ][+control1][+control2][+control3][targetVideoIndex]
          }
        />
      </div>
      <div className="options-row">
        <RowHeader
          backgroundSvg={<ResultsLabelBack />}
          headerText={ac.t("SIMRESULTSHEADER")}
          headerTextSub={ac.t("SIMRESULTSSUB")}
        />
        <SimGraph
          ac={ac}
          data={(graphData as
            Record<string, Record<string, Coord[][][][]>>)[ac.organ].left[+control1][+control2][+control3]}
          percentComplete={tPercentComplete}
          horizontalLabel={ac.o("LEFTXLABEL")}
          verticalLabel={ac.o("LEFTYLABEL")}
          verticalRange={{min: 0, max: 100}}
          videoComplete={tissueComplete}
        />
        <SimGraph
          ac={ac}
          data={(graphData as
            Record<string, Record<string, Coord[][][][]>>)[ac.organ].right[+control1][+control2][+control3]}
          percentComplete={tPercentComplete}
          horizontalLabel={ac.o("RIGHTXLABEL")}
          verticalLabel={ac.o("RIGHTYLABEL")}
          verticalRange={{min: 0, max: 10}}
          videoComplete={tissueComplete}
        />
        <div className={clsx("divider", ac.mode)} style={{height: 141}} />
        <div className="key-box simulation">
          <KeyButton ac={ac} onClick={() => setKeyVisible(state => !state)} />
        </div>
      </div>
    </AppContainer>
  );
};
