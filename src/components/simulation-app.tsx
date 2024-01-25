
import React, { useState } from "react";
import { useAppContext } from "../hooks/use-app-context";
import { useCommonState } from "../hooks/use-common-state";
import { useExperimentState } from "../hooks/use-experiment-state";
import { AppContainer } from "./app-container";
import { PaneTitle } from "./pane-title";
import { SimulationOutcome } from "./new-simulation/simulation-outcome";
import { SimulationSettings } from "./new-simulation/simulation-settings";
import { SimulationResults } from "./new-simulation/simulation-results";

import "./simulation-app.scss";

interface SimulationAppProps {
  keyVisible: boolean;
  setKeyVisible: (value: boolean) => void;
}
export const SimulationApp = ({ keyVisible, setKeyVisible }: SimulationAppProps) => {
  const ac = useAppContext();
  const { control1, setControl1, control2, setControl2 } = useCommonState(ac);
  const [simulationTime, setSimulationTime] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(false);

  const { experimentState, setExperimentIsFirstSeen, setExperimentIsRun, setGraphIsShowing }
    = useExperimentState();

  return (
    <AppContainer>
      <div className="simulation-body">
        <div className="control-column">
          <SimulationSettings
            control1={control1}
            setControl1={setControl1}
            control2={control2}
            setControl2={setControl2}
            keyVisible={keyVisible}
            playingVideo={playingVideo}
            setKeyVisible={setKeyVisible}
            setPlayingVideo={setPlayingVideo}
            simulationTime={simulationTime}
            setSimulationTime={setSimulationTime}
            setExperimentIsRun={setExperimentIsRun}
          />
          <SimulationResults
            control1={control1}
            control2={control2}
            experimentState={experimentState}
            setExperimentIsFirstSeen={setExperimentIsFirstSeen}
            setGraphIsShowing={setGraphIsShowing}
            simulationTime={simulationTime}
          />
        </div>
        <div className="video-column">
          <div className="video">
            <PaneTitle title={ac.o("LEFTSIMULATIONTITLE")} />
          </div>
          <div className="video">
            <PaneTitle title={ac.o("RIGHTSIMULATIONTITLE")} />
            <SimulationOutcome
              control1={control1}
              control2={control2}
            />
          </div>
        </div>
      </div>
    </AppContainer>
  );
};
