import React, { useState } from "react";

import { useAppContext } from "../../hooks/use-app-context";

import "./simulation-outcome.scss";

interface ISimulationOutcomeProps {
  control1: boolean;
  control2: boolean;
}
export function SimulationOutcome({ control1, control2 }: ISimulationOutcomeProps) {
  const ac = useAppContext();
  const [hidden, setHidden] = useState(false);
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

  if (hidden) {
    return <button className="simulation-button result" onClick={() => setHidden(false)} />;
  } else {
    return (
      <div className="outcome-area">
        {ac.o(message)}
        <button className="hide-button" onClick={() => setHidden(true)} />
      </div>
    );
  }
}
