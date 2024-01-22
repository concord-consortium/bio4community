import React, { useState } from "react";

import { ArteryOverlay } from "../components/artery-overlay";
import { Modes, Organs } from "../utils/app-constants";
import { IAppContext } from "./use-app-context";

// Some simulation controls are inverted. In other words, they start true, and true is the left option.
export function invertedControl(ac: IAppContext, controlNumber: number) {
  if (ac.mode === Modes.simulation) {
    if (ac.organ === Organs.brain) {
      if (controlNumber === 2) {
        return true;
      }
    } else {
      if (controlNumber === 1) {
        return true;
      }
    }
  }
  return false;
}

export const useCommonState = (ac: IAppContext) => {
  const [playingTissue, setPlayingTissue] = useState(false);
  const [tPercentComplete, setTPercentComplete] = useState(0);
  const [playingCell, setPlayingCell] = useState(false);
  const [cPercentComplete, setCPercentComplete] = useState(0);
  const [targetVideoIndex, setTargetVideoIndex] = useState(0);
  const [cellEnabled, setCellEnabled] = useState(false);
  const [control1, setControl1] = useState(invertedControl(ac, 1));
  const [control2, setControl2] = useState(invertedControl(ac, 2));
  const [control3, setControl3] = useState(invertedControl(ac, 3));
  const [disableControls, setDisableControls] = useState(false);

  const tissueOverlay = ac.organ === Organs.heart ? <ArteryOverlay /> : "";

  return { playingTissue, setPlayingTissue, tPercentComplete, setTPercentComplete, playingCell, setPlayingCell,
    cPercentComplete, setCPercentComplete, targetVideoIndex, setTargetVideoIndex, cellEnabled, setCellEnabled,
    control1, setControl1, control2, setControl2, control3, setControl3, disableControls, setDisableControls,
    tissueOverlay };
};
