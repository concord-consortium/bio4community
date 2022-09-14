import React from "react";
import { VideoView } from "./video-view";
import { AppContainer } from "./app-container";
import { ControlOption } from "./control-option";
import { Title } from "./title";
import { AppContext } from "../hooks/use-app-context";

interface AnimationAppProps {
  ac: AppContext;
}
export const AnimationApp = ({ ac }: AnimationAppProps) => {
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
            title={ac.o("LEFTANIMATIONTITLE")}
          />
          <VideoView
            ac={ac}
            disabled={true}
            extraClass="cell-view"
            loop={true}
            title={ac.o("RIGHTANIMATIONTITLE")}
          />
        </div>
      </AppContainer>
    </div>
  );
};
