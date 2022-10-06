import { useEffect, useState } from "react";

// Keeps track of the first time the tissue video is paused after the start
interface IUseInitialPause {
  percentComplete: number;
  playing: boolean;
}
export const useInitialPause = ({ percentComplete, playing }: IUseInitialPause) => {
  const [initialPause, setInitialPause] = useState(false);

  useEffect(() => {
    if (!initialPause && !playing && percentComplete > 0) {
      setInitialPause(true);
    }
  }, [initialPause, percentComplete, playing]);

  return initialPause;
};
