import React from "react";
import { clsx } from "clsx";
import { ControlOption, PartialControlOptionProps } from "../components/control-option";
import { AppContext } from "../hooks/use-app-context";

// Returns a list of control options and strings (which render as dividers)
// Used by renderControls(), which is how components should access this information
const getControls = (ac: AppContext): (PartialControlOptionProps | string)[] => {
  let controls: (PartialControlOptionProps | string)[] = [];
  if (ac.mode === "simulation") {
    if (["heart", "nose"].includes(ac.organ)) {
      controls = [
        {
          label: ac.o("SIMCONTROL1LABEL"),
          options: [ac.o("SIMCONTROL1OPTION1"), ac.o("SIMCONTROL1OPTION2")]
        },
        "divider1",
        {
          label: ac.o("SIMCONTROL2LABEL"),
          options: [ac.o("SIMCONTROL2OPTION1"), ac.o("SIMCONTROL2OPTION2")]
        },
        "divider2",
        {
          label: ac.o("SIMCONTROL3LABEL"),
          options: [ac.o("SIMCONTROL3OPTION1"), ac.o("SIMCONTROL3OPTION2")]
        }
      ];
    } else if (ac.organ === "brain") {
      controls = [
        {
          label: ac.o("SIMCONTROL1LABEL"),
          options: [ac.o("SIMCONTROL1OPTION1"), ac.o("SIMCONTROL1OPTION2")]
        },
        "divider1",
        {
          label: ac.o("SIMCONTROL2LABEL"),
          options: [ac.o("SIMCONTROL2OPTION1"), ac.o("SIMCONTROL2OPTION2")]
        }
      ];
    }
  } else {
    controls = [
      {
        label: ac.o("ANICONTROL1LABEL"),
        options: [ac.o("ANICONTROL1OPTION1"), ac.o("ANICONTROL1OPTION2")]
      },
      "divider1",
      {
        label: ac.o("ANICONTROL2LABEL"),
        options: [ac.o("ANICONTROL2OPTION1"), ac.o("ANICONTROL2OPTION2")]
      }
    ];
  }
  return controls;
};
interface IRenderControls {
  ac: AppContext;
  disabled?: boolean;
  onChanges?: ((value: boolean) => void)[]; // A list of change functions that will be assigned to the controls in order
}
export const renderControls = ({ ac, disabled, onChanges }: IRenderControls) => {
  const Divider = () => <div className={clsx("divider", ac.mode)} />;

  let onChangeIndex = 0;
  return getControls(ac).map((control: PartialControlOptionProps | string) => {
    return typeof control === "string"
      ? <Divider key={control} />
      : <ControlOption
        ac={ac}
        disabled={disabled}
        key={control.label}
        label={control.label}
        onChange={onChanges && onChangeIndex < onChanges.length ? onChanges[onChangeIndex++] : undefined}
        options={control.options}
      />;
  });
};
