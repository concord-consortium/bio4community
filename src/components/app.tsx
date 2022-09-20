import React, { useState } from "react";
import { AnimationApp } from "./animation-app";
import { AppKey } from "./app-key";
import { SimulationApp } from "./simulation-app";
import { useAppContext } from "../hooks/use-app-context";

import "./app.scss";

export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const mode: string = params.get("mode") || "animation";
  const organ: string = params.get("organ") || "heart";
  const ac = useAppContext({ mode, organ });

  const [keyVisible, setKeyVisible] = useState(false);

  return (
    <div className="app">
      { mode === "animation" ? <AnimationApp ac={ac} setKeyVisible={setKeyVisible} />
        : mode === "simulation" ? <SimulationApp ac={ac} setKeyVisible={setKeyVisible} />
        : <div>Unknown mode.</div> }
      <AppKey ac={ac} visible={keyVisible} />
    </div>
  );
};
