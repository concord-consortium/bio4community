import { useCallback } from "react";
import translate from "../utils/translation/translate";

interface IUseText {
  organ: string;
}
export const useText = ({ organ }: IUseText) => {
  const t = useCallback((textCode) => {
    return translate(`${organ.toUpperCase()}.${textCode}`);
  }, [organ]);

  return { t };
};
