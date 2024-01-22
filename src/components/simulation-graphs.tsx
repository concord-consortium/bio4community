import React from "react";
import { graphData } from "../data/graph-data";
import { useCommonState } from "../hooks/use-common-state";
import { AppContext } from "../hooks/use-app-context";
import { SimGraph } from "./sim-graph";
import { SimulationGraphsCheckboxes } from "./simulation-graphs-checkboxes";

import "./simulation-graphs.scss";

interface ISimulationGraphsProps {
  ac: AppContext;
}

export function SimulationGraphs({ ac }: ISimulationGraphsProps) {
  const { control1, control2, control3,
    getAllExperiments } = useCommonState(ac);

  return (
    <div className="simulation-graphs">
      <div className="graphs-header">
        {ac.o("SIMGRAPHTITLE")}
      </div>
      <SimGraph
        ac={ac}
        data={graphData[ac.organ].left[+control1][+control2][+control3]}
        percentComplete={0}
      />
      <SimulationGraphsCheckboxes
        ac={ac}
        experiments={getAllExperiments()}
      />
    </div>
  );
}
