import React from "react";
import { clsx } from "clsx";
import { useAppContext } from "../hooks/use-app-context";

import KeyLine from "../assets/new-sim/key-line.svg";

interface ISimulationGraphsCheckboxesProps {
  experiments: { option1: boolean, option2: boolean }[];
  control1: boolean;
  control2: boolean;
  experimentsRun: boolean[][];
  graphsShowing: boolean[][];
  setGraphIsShowing: (c1: boolean, c2: boolean, value: boolean) => void;
}

export function SimulationGraphsCheckboxes(
    { experiments, control1, control2, experimentsRun, graphsShowing, setGraphIsShowing }: 
    ISimulationGraphsCheckboxesProps) {
  const ac = useAppContext();

  function optionLabel(optionNumber: number, optionValue: boolean) {
    return ac.o(`SIMCONTROL${optionNumber}OPTION${optionValue ? 2 : 1}`);
  }

  const checkboxList = experiments.map((e) => {
      const key = "" + (e.option1 ? "t" : "f") + (e.option2 ? "t" : "f");
      const enabled = experimentsRun[+e.option1][+e.option2];
      const selected = e.option1===control1 && e.option2===control2;
      return (
        // TODO: why is eslint complaining about key here, and checked below?
        // eslint-disable-next-line react/no-unknown-property
        <div className={clsx("checkbox-row", { enabled, selected })} key={key}>
          <span>
            <input id={"check" + key} type="checkbox" value={"val"+key} disabled={!enabled}
              // eslint-disable-next-line react/no-unknown-property
              checked={graphsShowing[+e.option1][+e.option2]} 
              onChange={(ev) => { setGraphIsShowing(e.option1, e.option2, ev.target.checked); }}
              />
            <label htmlFor={"check" + key}>
              {optionLabel(1, e.option1)}, {optionLabel(2, e.option2)}
            </label>
          </span>
          {graphsShowing[+e.option1][+e.option2] && 
            <KeyLine className={"line-style-" + key}/>}
        </div>);    
  });

  return (
    <form>
      {checkboxList}
    </form>
  );

}
