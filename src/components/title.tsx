import React from "react";

interface TitleProps {
  text: string;
}
export const Title = ({text}: TitleProps) => {
  return (
    <div className="title-box">{text}</div>
  );
};
