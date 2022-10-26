import React, { useState } from "react";
import { AppContext } from "./use-app-context";
import { ArteryOverlay } from "../components/artery-overlay";

export const useCommonState = (ac: AppContext) => {
  const [playingTissue, setPlayingTissue] = useState(false);
  const [tPercentComplete, setTPercentComplete] = useState(0);
  const [playingCell, setPlayingCell] = useState(false);
  const [cPercentComplete, setCPercentComplete] = useState(0);
  const [targetVideoIndex, setTargetVideoIndex] = useState(0);
  const [cellEnabled, setCellEnabled] = useState(false);

  const [control1, setControl1] = useState(false);
  const [control2, setControl2] = useState(false);
  const [control3, setControl3] = useState(false);
  const [disableControls, setDisableControls] = useState(false);

  const tissueOverlay = ac.organ === "heart" ? <ArteryOverlay /> : "";

  return { playingTissue, setPlayingTissue, tPercentComplete, setTPercentComplete, playingCell, setPlayingCell,
    cPercentComplete, setCPercentComplete, targetVideoIndex, setTargetVideoIndex, cellEnabled, setCellEnabled,
    control1, setControl1, control2, setControl2, control3, setControl3, disableControls, setDisableControls,
    tissueOverlay };
};
