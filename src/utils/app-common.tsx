// Functions used by both animations and simulations

export const delayControl =
  (setControl: (val: boolean) => void, setDisableControls: (val: boolean) => void, delay?: number) => (
    (controlVal: boolean) => {
      setDisableControls(true);
      setControl(controlVal);
      setTimeout(() => setDisableControls(false), delay || 750);
    }
  );
