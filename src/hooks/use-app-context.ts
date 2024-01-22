import { createContext, useContext } from "react";
import translate from "../utils/translation/translate";

export interface IAppContext {
  mode: string;
  organ: string;
  t: (code: string) => string; // Translates generic text
  o: (code: string) => string; // Translates organ specific text
}
interface IUseAppContext {
  mode: string;
  organ: string;
}
export const getAppContext = ({ mode, organ }: IUseAppContext) => {
  const t = (textCode: string) => translate(textCode);

  const o = (textCode: string) => translate(`${organ.toUpperCase()}.${textCode}`);

  const appContext: IAppContext = { mode, organ, t, o};

  return appContext;
};

export const AppContext = createContext<IAppContext>(getAppContext({ mode: "animation", organ: "heart" }));

export function useAppContext() {
  return useContext(AppContext);
}
