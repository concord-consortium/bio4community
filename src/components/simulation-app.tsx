
import React, { useState } from "react";

// import { renderControls } from "../data/control-data";
// import { graphData, graphRanges } from "../data/graph-data";
// import { simVideos, timelines } from "../data/video-data";
// import { cellZoomData } from "../data/zoom-data";
import { AppContext } from "../hooks/use-app-context";
import { useCommonState } from "../hooks/use-common-state";
// import { useInitialPause } from "../hooks/use-initial-pause";
// import { delayControl } from "../utils/app-common";
// import { KeyButton } from "./app-button";
import { AppContainer } from "./app-container";
import { PaneTitle } from "./pane-title";
// import { SimGraph } from "./sim-graph";
import { SimulationSettings } from "./new-simulation/simulation-settings";
// import { VideoView } from "./video-view";
// import { ZoomLayer } from "./zoom-layer";

// import OptionsLabelBack from "../assets/backgrounds/options-label-back.svg";
// import ResultsLabelBack from "../assets/backgrounds/results-label-back.svg";

import "./simulation-app.scss";
import { SimulationOutcome } from "./new-simulation/simulation-outcome";

interface SimulationAppProps {
  ac: AppContext;
  setKeyVisible: (func: (value: boolean) => boolean) => void;
}
export const SimulationApp = ({ ac/*, setKeyVisible*/ }: SimulationAppProps) => {
  const { control1, setControl1, control2, setControl2 } = useCommonState(ac);
  const [simulationTime, setSimulationTime] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(false);
  // const { playingTissue, setPlayingTissue, tPercentComplete, setTPercentComplete, playingCell, setPlayingCell,
  //   cPercentComplete, setCPercentComplete, targetVideoIndex, setTargetVideoIndex, cellEnabled, setCellEnabled,
  //   control1, setControl1, control2, setControl2, control3, setControl3, disableControls, setDisableControls
  // } = useCommonState(ac);
  // const [tissueComplete, setTissueComplete] = useState(false);

  // const initialPause = useInitialPause({ percentComplete: tPercentComplete, playing: playingTissue });

  // Mark the video as incomplete whenever a control changes
  // useEffect(() => {
  //   setTissueComplete(false);
  // }, [control1, control2, control3]);

  // Track whether the tissue video has been completed
  // useEffect(() => {
  //   if (tPercentComplete === 1) {
  //     setTissueComplete(true);
  //   }
  // }, [tPercentComplete]);

  // interface IRowHeader {
  //   backgroundSvg: any;
  //   headerText: string;
  //   headerTextSub?: string;
  // }
  // const RowHeader = ({ backgroundSvg, headerText, headerTextSub }: IRowHeader) => (
  //   <div className="row-header">
  //     {backgroundSvg}
  //     <div className="row-header-text">
  //       {headerText}
  //       {headerTextSub && (
  //         <div className="row-header-text-sub">
  //           {headerTextSub}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

  // const tissueTitle = ac.organ === "brain" && control1
  //   ? ac.o("ALTERNATESIMULATIONTITLE") : ac.o("LEFTSIMULATIONTITLE");
  // const disabledMessage = ac.t("DISABLEDCELLMESSAGE").replace("VIDEOTITLE", tissueTitle);
  // const hLabel = (bold: string, regular: string) => <><span className="bold">{bold}</span>&nbsp;{regular}</>;
  // const leftHLabel = hLabel(ac.o("LEFTXLABEL1"), ac.o("LEFTXLABEL2"));
  // const rightHLabel = hLabel(ac.o("RIGHTXLABEL1"), ac.o("RIGHTXLABEL2"));
  return (
    <AppContainer ac={ac}>
      <div className="simulation-body">
        <div className="control-column">
          <SimulationSettings
            ac={ac}
            control1={control1}
            setControl1={setControl1}
            control2={control2}
            setControl2={setControl2}
            playingVideo={playingVideo}
            setPlayingVideo={setPlayingVideo}
            simulationTime={simulationTime}
            setSimulationTime={setSimulationTime}
            title={ac.o("SIMULATIONTITLE")}
          />
          <div className="simulation-graphs">
            <div className="graphs-header">
              {ac.o("SIMGRAPHTITLE")}
            </div>
          </div>
        </div>
        <div className="video-column">
          <div className="video">
            <PaneTitle title={ac.o("LEFTSIMULATIONTITLE")} />
          </div>
          <div className="video">
            <PaneTitle title={ac.o("RIGHTSIMULATIONTITLE")} />
            <SimulationOutcome ac={ac} message="Outcome" />
          </div>
        </div>
      </div>
      {/* <div className="options-row">
        <RowHeader backgroundSvg={<OptionsLabelBack />} headerText={ac.t("SIMOPTIONSHEADER")} />
        { renderControls({ ac, disabled: disableControls,
          onChanges: [
            delayControl(setControl1, setDisableControls),
            delayControl(setControl2, setDisableControls),
            delayControl(setControl3, setDisableControls)
          ] }) }
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
          timelineMarks={timelines[ac.mode].tissue[ac.organ][+control1][+control2][+control3]}
          videoFile={simVideos.tissue[ac.organ][+control1][+control2][+control3]}
        />
        <VideoView
          ac={ac}
          disabled={!cellEnabled || playingTissue}
          disabledMessage={disabledMessage}
          extraClass="cell-view"
          percentComplete={cPercentComplete}
          playing={playingCell}
          setPercentComplete={setCPercentComplete}
          setPlaying={setPlayingCell}
          title={ac.o("RIGHTSIMULATIONTITLE")}
          timelineMarks={timelines[ac.mode].cell[ac.organ][+control1][+control2][+control3]}
          videoFile={simVideos.cell[ac.organ][+control1][+control2][+control3][targetVideoIndex]}
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
          data={graphData[ac.organ].left[+control1][+control2][+control3]}
          percentComplete={tPercentComplete}
          horizontalLabel={leftHLabel}
          verticalLabel={ac.o("LEFTYLABEL")}
          verticalRange={graphRanges[ac.organ].left[+control1][+control2][+control3]}
          videoComplete={tissueComplete}
        />
        <SimGraph
          ac={ac}
          data={graphData[ac.organ].right[+control1][+control2][+control3]}
          percentComplete={tPercentComplete}
          horizontalLabel={rightHLabel}
          verticalLabel={ac.o("RIGHTYLABEL")}
          verticalRange={graphRanges[ac.organ].right[+control1][+control2][+control3]}
          videoComplete={tissueComplete}
        />
        <div className={clsx("divider", ac.mode)} style={{height: 141}} />
        <div className="key-box simulation">
          <KeyButton ac={ac} onClick={() => setKeyVisible(state => !state)} />
        </div>
      </div>
      <ZoomLayer
        ac={ac}
        setVideoEnabled={setCellEnabled}
        show={initialPause}
        type="cell"
        zoomInfo={cellZoomData.simulation[ac.organ][+control1][+control2][0]}
      /> */}
    </AppContainer>
  );
};
