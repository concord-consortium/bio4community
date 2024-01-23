import React from "react";
import { useCommonState } from "../hooks/use-common-state";
import { useAppContext } from "../hooks/use-app-context";
import { SimulationGraphsCheckboxes } from "./simulation-graphs-checkboxes";
import { SimulationGraph } from "./simulation-graph";

import "./simulation-graphs.scss";

interface ISimulationGraphsProps {
  control1: boolean;
  control2: boolean;
}

export function SimulationGraphs({ control1, control2 }: ISimulationGraphsProps) {
  const ac = useAppContext();
  const { getAllExperiments } = useCommonState(ac);

  return (
    <div className="simulation-graphs">
      <div className="graphs-header">
        {ac.o("SIMGRAPHTITLE")}
      </div>
      <SimulationGraph
        control1={control1}
        control2={control2}
        />
      <SimulationGraphsCheckboxes
        experiments={getAllExperiments()}
        control1={control1}
        control2={control2}
      />
    </div>
  );
}
