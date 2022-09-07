import React from "react";

interface AnimationProps {
  title: string;
}
export const Animation = ({ title }: AnimationProps) => {
  return (
    <div className="animation">
      <div className="animation-pane">
        <div className="animation-title">{title}</div>
      </div>
      <div className="animation-controls">Animation Controls</div>
    </div>
  );
};
