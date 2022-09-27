import React, { useEffect, useState } from "react";

import { VideoView } from "./video-view";
import { KeyButton } from "./app-button";
import { AppContainer } from "./app-container";
import { Title } from "./title";
import { AppContext } from "../hooks/use-app-context";
import { renderControls } from "../utils/app-data";

import { aniVideos } from "../assets/videos/video-data";

import "./animation-app.scss";

interface AnimationAppProps {
  ac: AppContext;
  setKeyVisible: (func: (value: boolean) => boolean) => void;
}
export const AnimationApp = ({ ac, setKeyVisible }: AnimationAppProps) => {
  const [playingTissue, setPlayingTissue] = useState(false);
  const [playingCell, setPlayingCell] = useState(false);
  const [targetVideoIndex, setTargetVideoIndex] = useState(0);

  const [control1, setControl1] = useState(false);
  const [control2, setControl2] = useState(false);
  useEffect(() => {
    console.log(`${ac.o("ANICONTROL1LABEL")}: ${ac.o(control1 ? "ANICONTROL1OPTION2" : "ANICONTROL1OPTION1")}`);
  }, [ac, control1]);
  useEffect(() => {
    console.log(`${ac.o("ANICONTROL2LABEL")}: ${ac.o(control2 ? "ANICONTROL2OPTION2" : "ANICONTROL2OPTION1")}`);
  }, [ac, control2]);

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
  const disabledMessage = ac.t("DISABLEDCELLMESSAGE").replace("VIDEOTITLE", tissueTitle);
  return (
    <AppContainer ac={ac} title={ac.o("ANIMATIONTITLE")}>
      <div className="app-row">
        <div className="silhouette">Silhouette View</div>
        <div className="controls-pane">
          <Title ac={ac} text="Controls" />
          { renderControls({ ac, onChanges: [setControl1, setControl2] }) }
          <div className="key-box animation">
            <KeyButton ac={ac} onClick={() => setKeyVisible(state => !state)} />
          </div>
        </div>
        <StressPane high={highStress} />
      </div>
      <div className="app-row">
        <VideoView
          ac={ac}
          playing={playingTissue}
          setPlaying={setPlayingTissue}
          setTargetVideoIndex={setTargetVideoIndex}
          timelineMarks={{ 0: "20 years", .333: "30 years", .667: "40 years", 1: "50 years" }}
          title={tissueTitle}
          videoFile={(
            aniVideos.tissue as Record<string, any[][]>)[ac.organ][+control1][+control2]
          }
        />
        <VideoView
          ac={ac}
          disabled={playingTissue}
          disabledMessage={disabledMessage}
          extraClass="cell-view"
          playing={playingCell}
          setPlaying={setPlayingCell}
          title={ac.o("RIGHTANIMATIONTITLE")}
          videoFile={
            (aniVideos.cell as
              Record<string, Record<number, any>[][]>)[ac.organ][+control1][+control2][targetVideoIndex]
          }
        />
      </div>
    </AppContainer>
  );
};
