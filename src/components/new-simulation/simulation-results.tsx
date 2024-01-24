import React, { useState } from "react";
import { useAppContext } from "../../hooks/use-app-context";
import { SimulationGraphsCheckboxes } from "./simulation-graphs-checkboxes";
import { SimulationGraph } from "./simulation-graph";
import { getAllExperiments } from "../../utils/control-utils";

import "./simulation-results.scss";

interface ISimulationResultsProps {
  control1: boolean;
  control2: boolean;
  simulationTime: number;
  experimentsRun: boolean[][];
}

export function SimulationResults({ control1, control2, simulationTime, experimentsRun }: ISimulationResultsProps) {
  const ac = useAppContext();

  // Which checkboxes are checked
  const [graphsShowing, setGraphsShowing] = useState([[false, false], [false, false]]);
  graphsShowing[+control1][+control2] = true;

  function setGraphIsShowing(c1: boolean, c2: boolean, value: boolean) {
    const newArray = [ ... graphsShowing ];
    newArray[+c1][+c2] = value;
    setGraphsShowing(newArray);
  }

  return (
    <div className="simulation-graphs">
      <div className="graphs-header">
        {ac.o("SIMGRAPHTITLE")}
      </div>
      <SimulationGraph
        control1={control1}
        control2={control2}
        simulationTime={simulationTime}
        graphsShowing={graphsShowing}
        />
      <SimulationGraphsCheckboxes
        experiments={getAllExperiments(ac)}
        control1={control1}
        control2={control2}
        experimentsRun={experimentsRun}
        graphsShowing={graphsShowing}
        setGraphIsShowing={setGraphIsShowing}
      />
    </div>
  );
}
