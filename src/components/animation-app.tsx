import React, { useEffect, useState } from "react";

import { VideoView } from "./video-view";
import { AppContainer } from "./app-container";
import { Title } from "./title";
import { AppContext } from "../hooks/use-app-context";
import { renderControls } from "../utils/app-data";

import { aniVideos } from "../assets/videos/video-data";

import "./animation-app.scss";

interface AnimationAppProps {
  ac: AppContext;
}
export const AnimationApp = ({ ac }: AnimationAppProps) => {
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

  const tissueTitle = ac.o("LEFTANIMATIONTITLE");
  const disabledMessage = ac.t("DISABLEDCELLMESSAGE").replace("VIDEOTITLE", tissueTitle);
  return (
    <div className="app">
      <AppContainer ac={ac} title={ac.o("ANIMATIONTITLE")}>
        <div className="app-row">
          <div className="silhouette">Silhouette View</div>
          <div className="controls-pane">
            <Title ac={ac} text="Controls" />
            { renderControls({ ac, onChanges: [setControl1, setControl2] }) }
            <div className="details-box">
              <button>Show Key</button>
            </div>
          </div>
          <div className="details-pane">
            <Title ac={ac} text="Stress Input" />
            <div className="details-box">
              <p>Text text text more text</p>
              <p>Another paragraph with more text</p>
              <p>Keep the text coming</p>
              <p>And one more for good measure</p>
            </div>
          </div>
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
            loop={true}
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
    </div>
  );
};
