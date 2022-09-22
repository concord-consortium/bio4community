import React from "react";
import { clsx } from "clsx";
import { AppContext } from "../hooks/use-app-context";

import CloseIcon from "../assets/icons/close-icon.svg";

import "./title.scss";

interface TitleProps {
  ac: AppContext;
  handleClose?: () => void;
  text: string;
}
export const Title = ({ ac, handleClose, text }: TitleProps) => {
  return (
    <div className={ clsx("title-box", ac.mode) }>
      <div className="title-close-box" />
      { text }
      <div className="title-close-box">
        {handleClose && (
          <button className="title-close-button" onClick={handleClose}>
            <CloseIcon className="title-close-icon" />
          </button>
        )}
      </div>
    </div>
  );
};
