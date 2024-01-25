import React, { useEffect } from "react";
import { useAppContext } from "../../hooks/use-app-context";
import { ExperimentState } from "../../hooks/use-experiment-state";
import { SimulationGraphsCheckboxes } from "./simulation-graphs-checkboxes";
import { SimulationGraph } from "./simulation-graph";

import "./simulation-results.scss";

interface ISimulationResultsProps {
  control1: boolean;
  control2: boolean;
  experimentState: ExperimentState[][];
  setExperimentIsFirstSeen: (c1: boolean, c2: boolean) => void;
  setGraphIsShowing: (c1: boolean, c2: boolean, val: boolean) => void;
  simulationTime: number;
}

export function SimulationResults({
  control1, control2, experimentState, setExperimentIsFirstSeen, setGraphIsShowing, simulationTime
}: ISimulationResultsProps) {
  const ac = useAppContext();

  // When selected state changes, the graph must be shown
  useEffect(() => {
    setExperimentIsFirstSeen(control1, control2);
  }, [control1, control2, setExperimentIsFirstSeen]);

  return (
    <div className="simulation-graphs">
      <div className="graphs-header">
        {ac.o("SIMGRAPHTITLE")}
      </div>
      <SimulationGraph
        control1={control1}
        control2={control2}
        experimentState={experimentState}
        simulationTime={simulationTime}
        />
      <SimulationGraphsCheckboxes
        control1={control1}
        control2={control2}
        experimentState={experimentState}
        setGraphIsShowing={setGraphIsShowing}
      />
    </div>
  );
}
