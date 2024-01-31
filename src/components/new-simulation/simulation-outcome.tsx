import React from "react";

import { useAppContext } from "../../hooks/use-app-context";

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
    return (
      <div className="outcome-area">
        {ac.o(message)}
        <button className="hide-button" onClick={() => setOutcomeHidden(true)} />
      </div>
    );
  }
}
