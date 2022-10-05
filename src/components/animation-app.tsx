import React, { useState } from "react";

import { KeyButton } from "./app-button";
import { AppContainer } from "./app-container";
import { SilhouettePane } from "./silhouette-pane";
import { Title } from "./title";
import { VideoView } from "./video-view";
import { renderControls } from "../data/control-data";
import { aniVideos, timelines } from "../data/video-data";
import { AppContext } from "../hooks/use-app-context";
import { delayControl } from "../utils/app-common";

import "./animation-app.scss";

interface AnimationAppProps {
  ac: AppContext;
  setKeyVisible: (func: (value: boolean) => boolean) => void;
}
export const AnimationApp = ({ ac, setKeyVisible }: AnimationAppProps) => {
  const [hasZoomed, setHasZoomed] = useState(false);
  const [playingTissue, setPlayingTissue] = useState(false);
  const [tPercentComplete, setTPercentComplete] = useState(0);
  const [playingCell, setPlayingCell] = useState(false);
  const [cPercentComplete, setCPercentComplete] = useState(0);
  const [targetVideoIndex, setTargetVideoIndex] = useState(0);

  const [control1, setControl1] = useState(false);
  const [control2, setControl2] = useState(false);
  const [disableControls, setDisableControls] = useState(false);

  // State and components for stress pane
  const [lowStressExample, setLowStressExample] = useState("");
  const [highStressExample, setHighStressExample] = useState("");
  interface IStressPane {
    high: boolean;
  }
  const StressPane = ({ high }: IStressPane) => {
    const id = `${high ? "high" : "low"}-stress-input`;
    return (
      <div className="stress-pane">
        <Title ac={ac} text={ac.t("STRESSTITLE")} />
        <div className="details-box">
          <div>{ ac.t(high ? "HIGHSTRESSINTRO" : "LOWSTRESSINTRO") }</div>
          <div className="stress-example">{ ac.t(high ? "HIGHSTRESSEXAMPLE" : "LOWSTRESSEXAMPLE") }</div>
          <div className="stress-prompt">
            <label htmlFor={id}>
              { ac.t(high ? "HIGHSTRESSPROMPT" : "LOWSTRESSPROMPT") }
            </label>
          </div>
          <textarea
            className="stress-entry"
            id={id}
            cols={54}
            rows={3}
            onBlur={(event: any) => {
              if (high) {
                setHighStressExample(event.target.value);
              } else {
                setLowStressExample(event.target.value);
              }
            }}
            defaultValue={high ? highStressExample : lowStressExample}
          />
        </div>
      </div>
    );
  };

  const highStress = ac.organ === "brain" ? control2 : control1;
  const tissueTitle = ac.o("LEFTANIMATIONTITLE");
  const disabledMessage = hasZoomed ? ac.t("DISABLEDCELLMESSAGE").replace("VIDEOTITLE", tissueTitle) : "";
  return (
    <AppContainer ac={ac} title={ac.o("ANIMATIONTITLE")}>
      <div className="app-row ani-row">
        <SilhouettePane ac={ac} hasZoomed={hasZoomed} setHasZoomed={setHasZoomed} />
        <div className="controls-pane">
          <Title ac={ac} text={ac.t("CONTROLTITLE")} />
          { renderControls({ ac, disabled: disableControls,
            onChanges: [
              delayControl(setControl1, setDisableControls),
              delayControl(setControl2, setDisableControls)
            ] }) }
          <div className="key-box animation">
            <KeyButton ac={ac} onClick={() => setKeyVisible(state => !state)} />
          </div>
        </div>
        <StressPane high={highStress} />
      </div>
      <div className="app-row">
        <VideoView
          ac={ac}
          disabled={!hasZoomed}
          percentComplete={tPercentComplete}
          playing={playingTissue}
          setPercentComplete={setTPercentComplete}
          setPlaying={setPlayingTissue}
          setTargetVideoIndex={setTargetVideoIndex}
          timelineMarks={timelines[ac.mode].tissue[ac.organ][+control1][+control2][0]}
          title={tissueTitle}
          videoFile={aniVideos.tissue[ac.organ][+control1][+control2]}
        />
        <VideoView
          ac={ac}
          disabled={!hasZoomed || playingTissue}
          disabledMessage={disabledMessage}
          extraClass="cell-view"
          percentComplete={cPercentComplete}
          playing={playingCell}
          setPercentComplete={setCPercentComplete}
          setPlaying={setPlayingCell}
          timelineMarks={timelines[ac.mode].cell[ac.organ][+control1][+control2][0]}
          title={ac.o("RIGHTANIMATIONTITLE")}
          videoFile={aniVideos.cell[ac.organ][+control1][+control2][targetVideoIndex]}
        />
      </div>
    </AppContainer>
  );
};
