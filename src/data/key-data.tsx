import React from "react";

import { IAppContext } from "../hooks/use-app-context";
import { Organs } from "../utils/app-constants";
import { keyImages } from "./image-data";

import CloseIcon from "../assets/icons/close-icon.svg";

interface IKeyImage {
  src: any;
}
const KeyImage = ({ src }: IKeyImage) => <img src={src} />;
const pair = (label: string, src: any): [any, string] => [<KeyImage src={src} key={label} />, label];
// Returns a list of [image, label] to display in the key
export const getKeyData = (ac: IAppContext): [any, string][] => {
  let keyData: [any, string][] = [];
  const dummy = <CloseIcon />;
  if (ac.organ === Organs.heart) {
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
  } else if (ac.organ === Organs.nose) {
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
  } else if (ac.organ === Organs.brain) {
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
