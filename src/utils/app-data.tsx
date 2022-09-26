import React from "react";
import { clsx } from "clsx";
import { ControlOption, PartialControlOptionProps } from "../components/control-option";
import { AppContext } from "../hooks/use-app-context";

import { keyImages } from "../assets/images/image-data";
import CloseIcon from "../assets/icons/close-icon.svg";

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
  onChanges?: ((value: boolean) => void)[]; // A list of change functions that will be assigned to the controls in order
}
export const renderControls = ({ ac, onChanges }: IRenderControls) => {
  const Divider = () => <div className={clsx("divider", ac.mode)} />;

  let onChangeIndex = 0;
  return getControls(ac).map((control: PartialControlOptionProps | string) => {
    return typeof control === "string"
      ? <Divider key={control} />
      : <ControlOption
        ac={ac}
        key={control.label}
        label={control.label}
        onChange={onChanges && onChangeIndex < onChanges.length ? onChanges[onChangeIndex++] : undefined}
        options={control.options}
      />;
  });
};

interface IKeyImage {
  src: any;
}
const KeyImage = ({ src }: IKeyImage) => <img src={src} />;
const pair = (label: string, src: any): [any, string] => [<KeyImage src={src} key={label} />, label];
// Returns a list of [image, label] to display in the key
export const getKeyData = (ac: AppContext): [any, string][] => {
  let keyData: [any, string][] = [];
  const dummy = <CloseIcon />;
  if (ac.organ === "heart") {
    keyData = [
      pair(ac.o("KEY1"), keyImages.h[0]),
      pair(ac.o("KEY2"), keyImages.h[1]),
      pair(ac.o("KEY3"), keyImages.h[2]),
      pair(ac.o("KEY4"), keyImages.h[3]),
      pair(ac.o("KEY5"), keyImages.h[4]),
      pair(ac.o("KEY6"), keyImages.h[5]),
      pair(ac.o("KEY7"), keyImages.h[6]),
      pair(ac.o("KEY8"), keyImages.h[7])
    ];
  } else if (ac.organ === "nose") {
    keyData = [
      [dummy, ac.o("KEY1")],
      [dummy, ac.o("KEY2")],
      [dummy, ac.o("KEY3")],
      [dummy, ac.o("KEY4")],
      [dummy, ac.o("KEY5")],
      [dummy, ac.o("KEY6")],
      [dummy, ac.o("KEY7")],
      [dummy, ac.o("KEY8")]
    ];
  } else if (ac.organ === "brain") {
    keyData = [
      [dummy, ac.o("KEY1")],
      [dummy, ac.o("KEY2")],
      [dummy, ac.o("KEY3")],
      [dummy, ac.o("KEY4")],
      [dummy, ac.o("KEY5")],
      [dummy, ac.o("KEY6")],
      [dummy, ac.o("KEY7")],
      [dummy, ac.o("KEY8")]
    ];
  }
  return keyData;
};
