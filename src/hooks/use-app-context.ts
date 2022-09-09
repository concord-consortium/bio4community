import { useCallback, useMemo } from "react";
import translate from "../utils/translation/translate";

export interface AppContext {
  mode: string;
  organ: string;
  t: (code: string) => string; // Translates generic text
  o: (code: string) => string; // Translates organ specific text
}
interface IUseAppContext {
  mode: string;
  organ: string;
}
export const useAppContext = ({ mode, organ }: IUseAppContext) => {
  const t = useCallback((textCode) => {
    return translate(textCode);
  }, []);

  const o = useCallback((textCode) => {
    return translate(`${organ.toUpperCase()}.${textCode}`);
  }, [organ]);

  const appContext: AppContext = useMemo(() => {
    return { mode, organ, t, o};
  }, [mode, organ, t, o]);

  return appContext;
};
