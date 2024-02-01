import { clsx } from "clsx";
import React from "react";

import { useAppContext } from "../../hooks/use-app-context";
import { getAllExperiments } from "../../utils/control-utils";

import "./simulation-outcome.scss";

interface ISimulationOutcomeProps {
  control1: boolean;
  control2: boolean;
  outcomeHidden: boolean;
  setOutcomeHidden: (v: boolean) => void;
}
export function SimulationOutcome({ control1, control2, outcomeHidden, setOutcomeHidden }: ISimulationOutcomeProps) {
  const ac = useAppContext();
  let message = "OUTCOMEHEALTHY";
  if (ac.organ === "brain") {
    if (control2){
      message = "OUTCOMECHRONIC";
    }
  } else {
    if ((!control1 && !control2) || (control1 && control2)) {
      message = "OUTCOMEINTERMEDIATE";
    } else if (control1 && !control2) {
      message = "OUTCOMECHRONIC";
    }
  }

  if (outcomeHidden) {
    return <button className="simulation-button result" onClick={() => setOutcomeHidden(false)} />;
  } else {
    const index = getAllExperiments(ac).findIndex(
      controls => controls.option1 === control1 && controls.option2 === control2);
    const borderClass = "line-style-" + index;
    return (
      <div className="outcome-area">
        <div className={clsx("outcome-border", borderClass)} />
        {`${ac.t("OUTCOMEPREFIX")}${ac.o(message)}`}
        <button className="hide-button" onClick={() => setOutcomeHidden(true)} />
      </div>
    );
  }
}
