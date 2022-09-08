import { useCallback } from "react";
import translate from "../utils/translation/translate";

export interface Translator {
  t: (code: string) => string;
  o: (code: string) => string;
}
interface IUseText {
  organ: string;
}
export const useTranslator = ({ organ }: IUseText) => {
  const t = useCallback((textCode) => {
    return translate(textCode);
  }, []);

  const o = useCallback((textCode) => {
    return translate(`${organ.toUpperCase()}.${textCode}`);
  }, [organ]);

  const translator: Translator = { t, o };

  return translator;
};
