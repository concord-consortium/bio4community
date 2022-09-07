import React from "react";
import { Title } from "./title";

interface AppContainerProps {
  title: string;
  children: any;
}
const AppContainer = ({title, children}: AppContainerProps) => {
  return (
    <div className="app-popup">
      <Title text={title} />
      {children}
    </div>
  );
};

interface AnimationProps {
  title: string;
}
const Animation = ({ title }: AnimationProps) => {
  return (
    <div className="animation">
      <div className="animation-pane">
        <div className="animation-title">{title}</div>
      </div>
      <div className="animation-controls">Animation Controls</div>
    </div>
  );
};

interface ControlOptionProps {
  label: string;
  options: [string, string];
}
const ControlOption = ({ label, options }: ControlOptionProps) => {
  return (
    <div className="control-option">
      <div className="control-option-label">{`${label}:`}</div>
      <div>{`${options[0]} or ${options[1]}`}</div>
    </div>
  );
};

interface AnimationAppProps {
  organ: string;
}
export const AnimationApp = ({ organ }: AnimationAppProps) => {
  const title = "Plaque Animation";
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
          <Animation title="Artery View" />
          <Animation title="Cell View" />
        </div>
      </AppContainer>
    </div>
  );
};
