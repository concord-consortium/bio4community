import React from "react";
import { AnimationApp } from "./animation-app";

import "./app.scss";

export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const mode: string = params.get("mode") || "animation";
  console.log("urlparam", params);
  const organ: string = params.get("organ") || "brain";

  return mode === "animation" ? <AnimationApp organ={organ} />
    : mode === "simulation" ? <div>Simulation not yet implemented.</div>
    : <div>Unknown mode.</div>;
};
