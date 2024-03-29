import React, { useState } from "react";

import { KeyButton } from "./app-button";
import { AppContainer } from "./app-container";
import { StressPane } from "./stress-pane";
import { SilhouettePane } from "./silhouette-pane";
import { Title } from "./title";
import { VideoView } from "./video-view";
import { ZoomLayer } from "./zoom-layer";
import { renderControls } from "../data/control-data";
import { aniVideos, timelines } from "../data/video-data";
import { silhouetteZoomData, cellZoomData } from "../data/zoom-data";
import { useAppContext } from "../hooks/use-app-context";
import { useCommonState } from "../hooks/use-common-state";
import { useInitialPause } from "../hooks/use-initial-pause";
import { delayControl } from "../utils/app-common";

import "./animation-app.scss";

interface AnimationAppProps {
  setKeyVisible: (func: (value: boolean) => boolean) => void;
}
export const AnimationApp = ({ setKeyVisible }: AnimationAppProps) => {
  const ac = useAppContext();
  const { playingTissue, setPlayingTissue, tPercentComplete, setTPercentComplete, playingCell, setPlayingCell,
    cPercentComplete, setCPercentComplete, targetVideoIndex, setTargetVideoIndex, cellEnabled, setCellEnabled,
    control1, setControl1, control2, setControl2, disableControls, setDisableControls }
    = useCommonState(ac);
  const [hasZoomed, setHasZoomed] = useState(false);
  const [tissueEnabled, setTissueEnabled] = useState(false);

  const initialPause = useInitialPause({ percentComplete: tPercentComplete, playing: playingTissue });

  const highStress = ac.organ === "brain" ? control2 : control1;
  const tissueTitle = ac.organ === "brain" && control1 ? ac.o("ALTERNATEANIMATIONTITLE") : ac.o("LEFTANIMATIONTITLE");
  const cellTitle = ac.organ === "brain" && control1
    ? ac.o("ALTERNATERIGHTANIMATIONTITLE") : ac.o("RIGHTANIMATIONTITLE");
  const disabledMessage = hasZoomed ? ac.t("DISABLEDCELLMESSAGE").replace("VIDEOTITLE", tissueTitle) : "";
  return (
    <AppContainer title={ac.o("ANIMATIONTITLE")}>
      <div className="app-row ani-row">
        <SilhouettePane control1={control1} hasZoomed={hasZoomed} setHasZoomed={setHasZoomed} />
        <div className="controls-pane">
          <Title text={ac.t("CONTROLTITLE")} />
          { renderControls({ ac, disabled: disableControls,
            onChanges: [
              delayControl(setControl1, setDisableControls),
              delayControl(setControl2, setDisableControls)
            ] }) }
          <div className="key-box animation">
            <KeyButton onClick={() => setKeyVisible(state => !state)} />
          </div>
        </div>
        <StressPane high={highStress} />
      </div>
      <div className="app-row">
        <VideoView
          disabled={!tissueEnabled}
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
          disabled={!hasZoomed || !cellEnabled || playingTissue}
          disabledMessage={disabledMessage}
          extraClass="cell-view"
          percentComplete={cPercentComplete}
          playing={playingCell}
          setPercentComplete={setCPercentComplete}
          setPlaying={setPlayingCell}
          timelineMarks={timelines[ac.mode].cell[ac.organ][+control1][+control2][0]}
          title={cellTitle}
          videoFile={aniVideos.cell[ac.organ][+control1][+control2][targetVideoIndex]}
        />
      </div>
      <ZoomLayer
        setVideoEnabled={setCellEnabled}
        show={initialPause}
        type="cell"
        zoomInfo={cellZoomData.animation[ac.organ][+control1][+control2][0]}
      />
      <ZoomLayer
        setVideoEnabled={setTissueEnabled}
        show={hasZoomed}
        type="silhouette"
        zoomInfo={silhouetteZoomData[ac.organ][+control1][+control2]}
      />
    </AppContainer>
  );
};
