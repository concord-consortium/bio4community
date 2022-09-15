import React, { useState } from "react";
import { VideoView } from "./video-view";
import { AppContainer } from "./app-container";
import { ControlOption } from "./control-option";
import { Title } from "./title";
import { AppContext } from "../hooks/use-app-context";

import { videos } from "../assets/videos/video-data";

interface AnimationAppProps {
  ac: AppContext;
}
export const AnimationApp = ({ ac }: AnimationAppProps) => {
  const [playingTissue, setPlayingTissue] = useState(false);
  const [playingCell, setPlayingCell] = useState(false);

  const title = ac.o("ANIMATIONTITLE");

  return (
    <div className="app">
      <AppContainer ac={ac} title={title}>
        <div className="app-row">
          <div className="silhouette">Silhouette View</div>
          <div className="controls-pane">
            <Title ac={ac} text="Controls" />
            <ControlOption label="Stress Level" options={["Low", "High"]} />
            <div className="divider"></div>
            <ControlOption label="Cholesterol in Diet" options={["Low", "High"]} />
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
            title={ac.o("LEFTANIMATIONTITLE")}
            videoFile={(videos.tissue as Record<string, any>)[ac.organ]}
          />
          <VideoView
            ac={ac}
            disabled={playingTissue}
            extraClass="cell-view"
            loop={true}
            playing={playingCell}
            setPlaying={setPlayingCell}
            title={ac.o("RIGHTANIMATIONTITLE")}
            videoFile={(videos.cell as Record<string, Record<number, any>>)[ac.organ][0]}
          />
        </div>
      </AppContainer>
    </div>
  );
};
