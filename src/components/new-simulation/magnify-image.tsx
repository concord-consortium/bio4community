import { clsx } from "clsx";
import React from "react";

import { useAppContext } from "../../hooks/use-app-context";
import { Organs } from "../../utils/app-constants";

import AnimationAmygdala from "../../assets/new-sim/magnify/animation-magnify-amygdala.svg";
import AnimationHeart from "../../assets/new-sim/magnify/animation-magnify-heart.svg";
import AnimationNose from "../../assets/new-sim/magnify/animation-magnify-nose.svg";
import AnimationPrefrontalCortex from "../../assets/new-sim/magnify/animation-magnify-prefrontal-cortex.svg";
import PathAmygdala from "../../assets/new-sim/magnify/magnify-path-amygdala.svg";
import PathHeart from "../../assets/new-sim/magnify/magnify-path-artery.svg";
import PathNose from "../../assets/new-sim/magnify/magnify-path-nose.svg";
import PathPrefrontalCortex from "../../assets/new-sim/magnify/magnify-path-prefrontal-cortex.svg";
import WindowAmygdala from "../../assets/new-sim/magnify/animation-window-amygdala.svg";
import WindowHeart from "../../assets/new-sim/magnify/animation-window-heart.svg";
import WindowNose from "../../assets/new-sim/magnify/animation-window-nose.svg";
import WindowPrefrontalCortex from "../../assets/new-sim/magnify/animation-window-prefrontal-cortex.svg";

import "./magnify-image.scss";

interface IMagnifyImageProps {
  control1: boolean;
}
export function MagnifyImage({ control1 }: IMagnifyImageProps) {
  const ac = useAppContext();
  let Window = WindowHeart; // The white rectangle over the top video
  let Animation = AnimationHeart; // The zoom going from the window to the bottom video
  let Path = PathHeart; // The zoom going from the person image to the top video
  let organClass = "heart";
  if (ac.organ === Organs.nose) {
    Window = WindowNose;
    Animation = AnimationNose;
    Path = PathNose;
    organClass = "nose";
  } else if (ac.organ === Organs.brain) {
    if (control1) {
      Window = WindowAmygdala;
      Animation = AnimationAmygdala;
      Path = PathAmygdala;
      organClass = "amygdala";
    } else {
      Window = WindowPrefrontalCortex;
      Animation = AnimationPrefrontalCortex;
      Path = PathPrefrontalCortex;
      organClass = "prefrontal-cortex";
    }
  }
  return (
    <>
      <Window className={clsx("magnify", "window", organClass)} />
      <Animation className={clsx("magnify", "animation", organClass)} />
      <Path className={clsx("magnify", "path", organClass)} />
    </>
  );
}
