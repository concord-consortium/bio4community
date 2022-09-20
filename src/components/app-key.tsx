import React, { useState } from "react";
import { clsx } from "clsx";

import { AppContext } from "../hooks/use-app-context";
import { Title } from "./title";

import "./app-key.scss";

interface IAppKey {
  ac: AppContext;
  visible: boolean;
}
export const AppKey = ({ ac, visible }: IAppKey) => {
  const [position, setPosition] = useState([0, 0]);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState([0, 0]);

  const handleMouseDown = (event: any) => {
    setOffset([event.clientX - position[0], event.clientY - position[1]]);
    setDragging(true);
  };

  const handleMouseMove = (event: any) => {
    if (dragging) {
      setPosition([event.clientX - offset[0], event.clientY - offset[1]]);
    }
  };

  const handleMouseUp = (event: any) => {
    setDragging(false);
  };

  return (
    <div
      className={clsx("app-key", ac.mode)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        display: visible ? "block" : "none",
        left: position[0],
        top: position[1]
      }}
    >
      <Title ac={ac} text="Key" />
    </div>
  );
};
