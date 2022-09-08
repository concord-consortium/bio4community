import React from "react";
import { AnimationApp } from "./animation-app";
import { SimulationApp } from "./simulation-app";
import { useTranslator } from "../hooks/use-translator";

import "./app.scss";

export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const mode: string = params.get("mode") || "animation";
  const organ: string = params.get("organ") || "heart";
  const t = useTranslator({organ});

  return mode === "animation" ? <AnimationApp organ={organ} t={t} />
    : mode === "simulation" ? <SimulationApp organ={organ} t={t} />
    : <div>Unknown mode.</div>;
};
