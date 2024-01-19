import { useState } from "react";

import { AppContext } from "./use-app-context";

export function useSimulationState(ac: AppContext) {
  const [simulationTime, setSimulationTime] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(false);

  return { simulationTime, setSimulationTime, playingVideo, setPlayingVideo };
}
