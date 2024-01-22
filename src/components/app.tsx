import React, { useState } from "react";
import { AnimationApp } from "./animation-app";
import { AppKey } from "./app-key";
import { SimulationApp } from "./simulation-app";
import { AppContext, getAppContext } from "../hooks/use-app-context";

import "./app.scss";

export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const mode: string = params.get("mode") || "animation";
  const organ: string = params.get("organ") || "heart";
  const ac = getAppContext({ mode, organ });

  // Key state
  const [keyVisible, setKeyVisible] = useState(false);
  // Starts approximately centered based on hard coded size of app and key
  const [keyPosition, setKeyPosition] = useState([(940 - 255) / 2, (598 - 439) / 2]);
  const [keyDragging, setKeyDragging] = useState(false);
  const [keyOffset, setKeyOffset] = useState([0, 0]);

  // Key movement is handled in the app so fast mouse movement is captured
  const handleMouseMove = (event: any) => {
    if (keyDragging) {
      setKeyPosition([event.clientX - keyOffset[0], event.clientY - keyOffset[1]]);
    }
  };

  return (
    <AppContext.Provider value={ac}>
      <div
        className="app"
        onMouseMove={handleMouseMove}
      >
        { mode === "animation" ? <AnimationApp setKeyVisible={setKeyVisible} />
          : mode === "simulation" ? <SimulationApp setKeyVisible={setKeyVisible} />
          : <div>Unknown mode.</div> }
        <AppKey
          handleClose={() => setKeyVisible(false)}
          position={keyPosition}
          setDragging={setKeyDragging}
          setOffset={setKeyOffset}
          visible={keyVisible}
        />
      </div>
    </AppContext.Provider>
  );
};
