import React/*, { useState }*/ from "react";

import { AppContext } from "../../hooks/use-app-context";

import "./simulation-outcome.scss";

interface ISimulationOutcomeProps {
  ac: AppContext;
  message: string;
}
export function SimulationOutcome({ ac, message }: ISimulationOutcomeProps) {
  // const [hidden, setHidden] = useState(false);

  return (
    <div className="outcome-area">
      {message}
    </div>
  );
}
