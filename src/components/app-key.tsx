import React from "react";
import { clsx } from "clsx";

import { AppContext } from "../hooks/use-app-context";
import { Title } from "./title";

import "./app-key.scss";

interface IAppKey {
  ac: AppContext;
  handleClose?: () => void;
  position: number[];
  setDragging: (dragging: boolean) => void;
  setOffset: (offset: number[]) => void;
  visible: boolean;
}
export const AppKey = ({ ac, handleClose, position, setDragging, setOffset, visible }: IAppKey) => {

  const handleMouseDown = (event: any) => {
    setOffset([event.clientX - position[0], event.clientY - position[1]]);
    setDragging(true);
  };

  const handleMouseUp = (event: any) => {
    setDragging(false);
  };

  return (
    <div
      className={clsx("app-key", ac.mode)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        display: visible ? "block" : "none",
        left: position[0],
        top: position[1]
      }}
    >
      <Title ac={ac} handleClose={handleClose} text="Key" />
    </div>
  );
};
