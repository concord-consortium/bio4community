import React from "react";
import { clsx } from "clsx";
import { AppContext } from "../hooks/use-app-context";
// import { useCommonState } from "../hooks/use-common-state";

import KeyLine from "../assets/new-sim/key-line.svg";


interface ISimulationGraphsCheckboxesProps {
  ac: AppContext;
  experiments: { option1: boolean, option2: boolean }[];
  control1: boolean;
  control2: boolean;
}


export function SimulationGraphsCheckboxes({ ac, experiments, control1, control2 }: 
  ISimulationGraphsCheckboxesProps) {

  function optionLabel(optionNumber: number, optionValue: boolean) {
    return ac.o(`SIMCONTROL${optionNumber}OPTION${optionValue ? 2 : 1}`);
  }

  const checkboxList = experiments.map((e) => {
      const key = "" + (e.option1 ? "t" : "f") + (e.option2 ? "t" : "f");
      const selected = e.option1===control1 && e.option2===control2;
      return (
        // TODO: why is eslint complaining about key here?
        // eslint-disable-next-line react/no-unknown-property
        <div className={clsx("checkbox-row", { selected })} key={key}>
          <span>
            <input id={"check" + key} type="checkbox" value={"val"+key}/>
            <label htmlFor={"check" + key}>
              {optionLabel(1, e.option1)}, {optionLabel(2, e.option2)}
            </label>
          </span>
          <KeyLine className={"line-style-" + key}/>
        </div>);    
  });

  return (
    <form>
      {checkboxList}
    </form>
  );

}
