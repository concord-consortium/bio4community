import React, { useState } from "react";

import { AppContext, getAppContext } from "../hooks/use-app-context";
import { modeFromString, Modes, organFromString, Organs } from "../utils/app-constants";
import { AnimationApp } from "./animation-app";
import { AppKey } from "./app-key";
import { SimulationApp } from "./simulation-app";

import "./app.scss";

export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const mode = modeFromString(params.get("mode"));
  const organ = organFromString(params.get("organ"));
  const ac = getAppContext({ mode, organ });

  // Key state
  const [keyVisible, setKeyVisible] = useState(false);
  // Starts horizontally centered for animation or left of center for simulation based on hard coded size of app and key
  const keyX = ac.mode === Modes.animation ? (window.innerWidth - 255) / 2 : (window.innerWidth - 940) / 2 + 114;
  // Starts vertically centered based on hard coded height of key
  const appMiddle = window.innerHeight / 2;
  const keyY = ac.organ === Organs.heart ? appMiddle - 462 / 2
    : ac.organ === Organs.nose ? appMiddle - 582 / 2
    : appMiddle - 428 / 2;
  const [keyPosition, setKeyPosition] = useState([keyX, keyY]);
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
        { mode === Modes.animation ? <AnimationApp setKeyVisible={setKeyVisible} />
          : mode === Modes.simulation ? <SimulationApp keyVisible={keyVisible} setKeyVisible={setKeyVisible} />
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
