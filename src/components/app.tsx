import React from "react";
import { AnimationApp } from "./animation-app";
import { useText } from "../hooks/use-text";

import "./app.scss";

export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const mode: string = params.get("mode") || "animation";
  const organ: string = params.get("organ") || "heart";
  const { t } = useText({organ});

  return mode === "animation" ? <AnimationApp organ={organ} t={t} />
    : mode === "simulation" ? <div>Simulation not yet implemented.</div>
    : <div>Unknown mode.</div>;
};
