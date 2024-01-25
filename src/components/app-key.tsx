import React from "react";
import { clsx } from "clsx";

import { Modes, Organs } from "../utils/app-constants";
import { getKeyData } from "../data/key-data";
import { useAppContext } from "../hooks/use-app-context";
import { Title } from "./title";

import simHeartKeyImage from "../assets/images/heart/heart-key-content@2x.png";
import brainKeyImage from "../assets/images/brain/focus-key-content@2x.png";
import simBrainKeyImage from "../assets/images/brain/brain-key-content@2x.png";
import noseKeyImage from "../assets/images/nose/immune-response-key-content@2x.png";
import simNoseKeyImage from "../assets/images/nose/nose-key-content@2x.png";

import "./app-key.scss";

interface IAppKey {
  handleClose?: () => void;
  position: number[];
  setDragging: (dragging: boolean) => void;
  setOffset: (offset: number[]) => void;
  visible: boolean;
}
export const AppKey = ({ handleClose, position, setDragging, setOffset, visible }: IAppKey) => {
  const ac = useAppContext();

  const handleMouseDown = (event: any) => {
    setOffset([event.clientX - position[0], event.clientY - position[1]]);
    setDragging(true);
  };

  const handleMouseUp = (event: any) => {
    setDragging(false);
  };
  
  interface IKeyRow {
    image: any;
    text: string;
  }
  const KeyRow = ({ image, text}: IKeyRow) => {
    return (
      <div className="key-row">
        <div className="key-image">
          {image}
        </div>
        <div className="key-text">
          {text}
        </div>
      </div>
    );
  };

  const keyContent = ac.mode === Modes.animation
    ? ac.organ === Organs.heart
      ? <div className="key-rows">
          { getKeyData(ac).map(([image, text]) => <KeyRow image={image} key={text} text={text} />) }
        </div>
      : ac.organ === "nose"
      ? <img src={noseKeyImage} className="key-image" />
      : <img src={brainKeyImage} className="key-image" />
    : ac.organ === Organs.heart
      ? <img src={simHeartKeyImage} className="key-image" />
      : ac.organ === "nose"
      ? <img src={simNoseKeyImage} className="key-image" />
      : <img src={simBrainKeyImage} className="key-image" />;
  return (
    <div
      className={clsx("app-key", ac.mode)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        display: visible ? "flex" : "none",
        left: position[0],
        top: position[1]
      }}
    >
      <Title handleClose={handleClose} text="Key" />
      { keyContent }
    </div>
  );
};
