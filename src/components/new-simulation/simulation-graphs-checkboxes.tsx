import React from "react";
import { clsx } from "clsx";
import { useAppContext } from "../../hooks/use-app-context";
import { ExperimentState } from "../../hooks/use-experiment-state";
import { getAllExperiments } from "../../utils/control-utils";

import KeyLine from "../../assets/new-sim/key-line.svg";

interface ExperimentDef {
  option1: boolean;
  option2: boolean;
}

interface ISimulationGraphsCheckboxesProps {
  control1: boolean;
  control2: boolean;
  experimentState: ExperimentState[][];
  setGraphIsShowing: (c1: boolean, c2: boolean, value: boolean) => void;
}

export function SimulationGraphsCheckboxes(
    { control1, control2, experimentState, setGraphIsShowing }: 
    ISimulationGraphsCheckboxesProps) {
  const ac = useAppContext();
  const experiments = getAllExperiments(ac);

  function optionLabel(optionNumber: number, optionValue: boolean) {
    return ac.o(`SIMCONTROL${optionNumber}OPTION${optionValue ? 2 : 1}`);
  }

  function optionLabelPair(e: ExperimentDef) {
    const fullLabel = `${optionLabel(1, e.option1)}, ${optionLabel(2, e.option2)}`;
    return fullLabel.slice(0, 1).toUpperCase() + fullLabel.slice(1).toLowerCase();
  }

  const checkboxList = experiments.map((e, index) => {
    const key = "" + (e.option1 ? "t" : "f") + (e.option2 ? "t" : "f");
    const enabled = experimentState[+e.option1][+e.option2].seen;
    const selected = e.option1===control1 && e.option2===control2;
    const displayGraph = experimentState[+e.option1][+e.option2].displayGraph;
    return (
      <div className={clsx("checkbox-row", { enabled, selected })} key={key}>
        <span>
          <input id={"check" + key} type="checkbox" value={"val"+key} disabled={!enabled}
            checked={displayGraph} 
            onChange={(ev) => { setGraphIsShowing(e.option1, e.option2, ev.target.checked); }}
            />
          <label htmlFor={"check" + key}>
            {optionLabelPair(e)}
          </label>
        </span>
        {displayGraph && <KeyLine className={"line-style-" + index}/>}
      </div>
    );    
  });

  return (
    <form>
      {checkboxList}
    </form>
  );
}
