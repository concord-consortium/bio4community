import React, { useState } from "react";

import { AppContext } from "../../hooks/use-app-context";

import "./simulation-outcome.scss";

interface ISimulationOutcomeProps {
  ac: AppContext;
  message: string;
}
export function SimulationOutcome({ ac, message }: ISimulationOutcomeProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return <button className="simulation-button result" onClick={() => setHidden(false)} />;
  } else {
    return (
      <div className="outcome-area">
        {message}
        <button className="hide-button" onClick={() => setHidden(true)} />
      </div>
    );
  }
}
