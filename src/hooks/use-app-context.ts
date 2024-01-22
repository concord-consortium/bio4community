import { createContext, useContext } from "react";

import { Modes, Organs } from "../utils/app-constants";
import translate from "../utils/translation/translate";

export interface IAppContext {
  mode: Modes;
  organ: Organs;
  t: (code: string) => string; // Translates generic text
  o: (code: string) => string; // Translates organ specific text
}
interface IUseAppContext {
  mode: Modes;
  organ: Organs;
}
export const getAppContext = ({ mode, organ }: IUseAppContext) => {
  const t = (textCode: string) => translate(textCode);
  const o = (textCode: string) => translate(`${organ.toUpperCase()}.${textCode}`);

  return { mode, organ, t, o};
};

export const AppContext = createContext<IAppContext>(getAppContext({ mode: Modes.animation, organ: Organs.heart }));

export function useAppContext() {
  return useContext(AppContext);
}
