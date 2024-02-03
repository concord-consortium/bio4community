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
    // The border uses the same dashed style as the graph curves, so it must be an svg
    const index = getAllExperiments(ac).findIndex(
      controls => controls.option1 === control1 && controls.option2 === control2);
    const borderClass = "line-style-" + index;
    const strokeWidth = 3; // Keep in sync with .outcome-border stroke-width in simulation-outcome.scss
    const halfStrokeWidth = strokeWidth / 2;
    const borderHeight = 48; // Based on .outcome-area height in simulation-outcome.scss - margin space
    const borderWidth = 392; // Based on .outcome-area width in simulation-outcome.scss - margin space
    return (
      <div className="outcome-area">
        <svg
          className="outcome-svg"
          height={borderHeight} 
          width={borderWidth}
          xmlns="http://www.w3.org/2000/svg" 
        >
          <rect
            x={halfStrokeWidth}
            y={halfStrokeWidth}
            height={borderHeight - strokeWidth}
            width={borderWidth - strokeWidth}
            rx={2}
            className={clsx("outcome-border", borderClass)}
          />
        </svg>
        {`${ac.t("OUTCOMEPREFIX")}${ac.o(message)}`}
        <button className="hide-button" onClick={() => setOutcomeHidden(true)} />
      </div>
    );
  }
}
