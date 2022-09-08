import React from "react";
import { Animation } from "./animation";
import { AppContainer } from "./app-container";
import { ControlOption } from "./control-option";
import { Title } from "./title";
import { Translator } from "../hooks/use-translator";

interface AnimationAppProps {
  organ: string;
  t: Translator;
}
export const AnimationApp = ({ organ, t }: AnimationAppProps) => {
  const title = t.o("ANIMATIONTITLE");
  return (
    <div className="app">
      <AppContainer title={title}>
        <div className="app-row">
          <div className="silhouette">Silhouette View</div>
          <div className="controls-pane">
            <Title text="Controls" />
            <ControlOption label="Stress Level" options={["Low", "High"]} />
            <div className="divider"></div>
            <ControlOption label="Cholesterol in Diet" options={["Low", "High"]} />
            <div className="details-box">
              <button>Show Key</button>
            </div>
          </div>
          <div className="details-pane">
            <Title text="Stress Input" />
            <div className="details-box">
              <p>Text text text more text</p>
              <p>Another paragraph with more text</p>
              <p>Keep the text coming</p>
              <p>And one more for good measure</p>
            </div>
          </div>
        </div>
        <div className="app-row">
          <Animation title={t.o("LEFTANIMATIONTITLE")} />
          <Animation title={t.o("RIGHTANIMATIONTITLE")} />
        </div>
      </AppContainer>
    </div>
  );
};
