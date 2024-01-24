import { IAppContext } from "../hooks/use-app-context";
import { Modes, Organs } from "./app-constants";

/**
 * Check if the given control is "inverted".
 * Inverted controls default to true, and their true option is displayed on the left.
 */
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

/**
   * Return a list of all of the control combinations that are legal in the current context.
   * They will be listed in a reasonable display order.
   * @returns an array of objects like `{ option1: false, option2: true }`.
   */
export function getAllExperiments(con: IAppContext) {
  const result = [];
  for (const opt1 of invertedControl(con, 1) ? [true, false] : [false, true]) {
    for (const opt2 of invertedControl(con, 2) ? [true, false] : [false, true]) {
      result.push({
        option1: opt1,
        option2: opt2
      });
    }
  }
  return result;
}
