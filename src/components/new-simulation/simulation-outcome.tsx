import React, { useState } from "react";

import { AppContext } from "../../hooks/use-app-context";

import "./simulation-outcome.scss";

interface ISimulationOutcomeProps {
  ac: AppContext;
  control1: boolean;
  control2: boolean;
}
export function SimulationOutcome({ ac, control1, control2 }: ISimulationOutcomeProps) {
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
