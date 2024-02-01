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
    // Determine style and path of outcome border
    // The border uses the same dashed style as the graph curves, so it must be an svg
    // The border has rounded corners, so it's a combination of lines and arcs
    const index = getAllExperiments(ac).findIndex(
      controls => controls.option1 === control1 && controls.option2 === control2);
    const borderClass = "line-style-" + index;
    const strokeWidth = 3; // Keep in sync with .outcome-border stroke-width in simulation-outcome.scss
    const borderHeight = 48; // Based on .outcome-area height in simulation-outcome.scss - margin space
    const borderWidth = 392; // Based on .outcome-area width in simulation-outcome.scss - margin space
    const borderRadius = 3;
    const bWidth = borderWidth - (2 * borderRadius + strokeWidth);
    const bHeight = borderHeight - (2 * borderRadius + strokeWidth);
    const aPrefix = `${borderRadius},${borderRadius} 0 0 1`;
    const top = `h ${bWidth} a ${aPrefix} ${borderRadius},${borderRadius}`;
    const right = `v ${bHeight} a ${aPrefix} -${borderRadius},${borderRadius}`;
    const bottom = `h -${bWidth} a ${aPrefix} -${borderRadius},-${borderRadius}`;
    const left = `v -${bHeight} a ${aPrefix} ${borderRadius},-${borderRadius}`;
    const path = `M ${borderRadius + strokeWidth / 2},${strokeWidth / 2} ${top} ${right} ${bottom} ${left} z`;
    return (
      <div className="outcome-area">
        <svg
          className="outcome-svg"
          height={borderHeight} 
          width={borderWidth}
          xmlns="http://www.w3.org/2000/svg" 
        >
          <path d={path} className={clsx("outcome-border", borderClass)} />
        </svg>
        {`${ac.t("OUTCOMEPREFIX")}${ac.o(message)}`}
        <button className="hide-button" onClick={() => setOutcomeHidden(true)} />
      </div>
    );
  }
}
