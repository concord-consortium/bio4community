import { useState } from "react";

// An experiment is a combination of settings (control1, control2)
export interface ExperimentState {
  complete: boolean; // True when the third time step's video has completed; determines if the outcome should be shown
  displayGraph: boolean; // Whether the experiment's graph should show; controllable by the user
  seen: boolean; // True when the user has switched to the experiment; determines if the graph can be displayed
}
type ExperimentField = "complete" | "displayGraph" | "seen";
const emptyState = () => ({ complete: false, displayGraph: false, seen: false });
const initialState = () => {
  return [
    [emptyState(), emptyState()],
    [emptyState(), emptyState()]
  ];};
export function useExperimentState() {
  const [experimentState, setExperimentState] = useState(initialState());

  const updateExperimentState = (
    c1: boolean, c2: boolean, updateField: ExperimentField , updateValue: boolean
  ) => {
    const newState = { ...experimentState };
    newState[+c1][+c2][updateField] = updateValue;
    setExperimentState(newState);
  };

  const setExperimentIsRun = (c1: boolean, c2: boolean) => {
    updateExperimentState(c1, c2, "complete", true);
  };

  const setGraphIsShowing = (c1: boolean, c2: boolean, val: boolean) => {
    updateExperimentState(c1, c2, "displayGraph", val);
  };

  const setExperimentIsFirstSeen = (c1: boolean, c2: boolean) => {
    if (!experimentState[+c1][+c2].seen) {
      updateExperimentState(c1, c2, "seen", true);
    }
    if (!experimentState[+c1][+c2].displayGraph) {
      setGraphIsShowing(c1, c2, true);
    }
  };

  const resetExperiments = () => {
    setExperimentState(initialState());
  };

  return { experimentState, setExperimentIsFirstSeen, setGraphIsShowing, setExperimentIsRun, resetExperiments };
}
