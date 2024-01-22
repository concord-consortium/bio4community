import React from "react";
import { AppContext } from "../hooks/use-app-context";
// import { useCommonState } from "../hooks/use-common-state";

import KeyLine from "../assets/new-sim/key-line.svg";


interface ISimulationGraphsCheckboxesProps {
  ac: AppContext;
  experiments: { option1: boolean, option2: boolean }[];
}


export function SimulationGraphsCheckboxes({ ac, experiments }: ISimulationGraphsCheckboxesProps) {
  // const { control1 } = useCommonState(ac);

  function optionLabel(optionNumber: number, optionValue: boolean) {
    return ac.o(`SIMCONTROL${optionNumber}OPTION${optionValue ? 2 : 1}`);
  }

  const checkboxList = experiments.map((e) => {
      const key = "" + (e.option1 ? "t" : "f") + (e.option2 ? "t" : "f");
      return (
        // TODO: why is eslint complaining about key here?
        // eslint-disable-next-line react/no-unknown-property
        <div className="checkbox-row" key={key}>
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
