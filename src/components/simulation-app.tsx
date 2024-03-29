
import React, { useState } from "react";
import { useAppContext } from "../hooks/use-app-context";
import { useCommonState } from "../hooks/use-common-state";
import { useExperimentState } from "../hooks/use-experiment-state";
import { AppContainer } from "./app-container";
import { MagnifyImage } from "./new-simulation/magnify-image";
import { SimulationResults } from "./new-simulation/simulation-results";
import { SimulationSettings } from "./new-simulation/simulation-settings";
import { SimulationVideo } from "./new-simulation/simulation-video";

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
  const [outcomeHidden, setOutcomeHidden] = useState(false);

  const { experimentState, setExperimentIsFirstSeen, setExperimentIsRun, setGraphIsShowing, resetExperiments }
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
            setOutcomeHidden={setOutcomeHidden}
            setPlayingVideo={setPlayingVideo}
            simulationTime={simulationTime}
            setSimulationTime={setSimulationTime}
            resetExperiments={resetExperiments}
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
        <SimulationVideo
          control1={control1}
          control2={control2}
          displayOutcome={experimentState[+control1][+control2].complete}
          outcomeHidden={outcomeHidden}
          playing={playingVideo}
          setExperimentIsRun={setExperimentIsRun}
          setOutcomeHidden={setOutcomeHidden}
          simulationTime={simulationTime}
        />
        <MagnifyImage control1={control1} />
      </div>
    </AppContainer>
  );
};
