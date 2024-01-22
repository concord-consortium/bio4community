import React, { useState } from "react";
import { IAppContext } from "./use-app-context";
import { ArteryOverlay } from "../components/artery-overlay";

export const useCommonState = (ac: IAppContext) => {
  const [playingTissue, setPlayingTissue] = useState(false);
  const [tPercentComplete, setTPercentComplete] = useState(0);
  const [playingCell, setPlayingCell] = useState(false);
  const [cPercentComplete, setCPercentComplete] = useState(0);
  const [targetVideoIndex, setTargetVideoIndex] = useState(0);
  const [cellEnabled, setCellEnabled] = useState(false);

  // Some simulation controls start true
  const startControl = (controlNumber: number) => {
    if (ac.mode === "simulation") {
      if (ac.organ === "brain") {
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
  };
  const [control1, setControl1] = useState(startControl(1));
  const [control2, setControl2] = useState(startControl(2));
  const [control3, setControl3] = useState(startControl(3));
  const [disableControls, setDisableControls] = useState(false);

  const tissueOverlay = ac.organ === "heart" ? <ArteryOverlay /> : "";

  return { playingTissue, setPlayingTissue, tPercentComplete, setTPercentComplete, playingCell, setPlayingCell,
    cPercentComplete, setCPercentComplete, targetVideoIndex, setTargetVideoIndex, cellEnabled, setCellEnabled,
    control1, setControl1, control2, setControl2, control3, setControl3, disableControls, setDisableControls,
    tissueOverlay };
};
