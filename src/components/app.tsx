import React from "react";
import { AnimationApp } from "./animation-app";
import { SimulationApp } from "./simulation-app";
import { useAppContext } from "../hooks/use-app-context";

import "./app.scss";

export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const mode: string = params.get("mode") || "animation";
  const organ: string = params.get("organ") || "heart";
  const ac = useAppContext({ mode, organ });

  return mode === "animation" ? <AnimationApp ac={ac} />
    : mode === "simulation" ? <SimulationApp ac={ac} />
    : <div>Unknown mode.</div>;
};
