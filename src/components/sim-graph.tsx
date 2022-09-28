// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React from "react";
import { AppContext } from "../hooks/use-app-context";

import "./sim-graph.scss";

export interface Coord {
  x: number;
  y: number;
}
export interface Range {
  min: number;
  max: number;
}
const getRange = (data: Coord[], coord: "x" | "y") => ({
  min: Math.min(...data.map(d => d[coord])),
  max: Math.max(...data.map(d => d[coord]))
});

interface IGrid {
  color?: string;
  height: number;
  hLines: number;
  vLines: number;
  width: number;
}
const Grid = ({ color, height, hLines, vLines, width }: IGrid) => {
  const defaultColor = "#949494";
  const hStep = height / (hLines + 1);
  const hArray = [...Array(hLines).keys()]; // Like range(hLines) in python
  const vStep = width / (vLines + 1);
  const vArray = [...Array(vLines).keys()];

  return (
    <>
      {hArray.map(index => {
        const y = hStep * (index + 1);
        return <line x1="0" y1={y} x2={width} y2={y} stroke={color || defaultColor}
          strokeWidth="1" key={`hLine${index}`} />;
      })}
      {vArray.map(index => {
        const x = vStep * (index + 1);
        return <line x1={x} y1="0" x2={x} y2={height} stroke={color || defaultColor}
          strokeWidth="1" key={`vLine${index}`} />;
      })}
    </>
  );
};

interface ISimGraph {
  ac: AppContext;
  data: Coord[];
  percentComplete: number;
  horizontalRange?: Range;
  verticalRange?: Range;
}
export const SimGraph = ({ ac, data, percentComplete, horizontalRange, verticalRange }: ISimGraph) => {
  const width = 307;
  const height = 95;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const xRange = horizontalRange || getRange(data, "x");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const yRange = verticalRange || getRange(data, "y");

  // const hLines = 3;
  // const hStep = height / (hLines + 1);
  // const hArray = [...Array(hLines).keys()]; // Like range(hLines) in python
  // const vLines = 2;
  // const vStep = width / (vLines + 1);
  // const vArray = [...Array(vLines).keys()];

  return (
    <div className="sim-graph-container">
      <div className="vertical-label">Vertical Axis</div>
      <div className="sim-graph-right">
        <div className="sim-graph">
          <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" fill="blue">
            <Grid height={height} hLines={3} vLines={2} width={width} />
            {/* {hArray.map(index => {
              const y = hStep * (index + 1);
              return <line x1="0" y1={y} x2={width} y2={y} stroke="#949494" strokeWidth="1" key={`hLine${index}`} />;
            })}
            {vArray.map(index => {
              const x = vStep * (index + 1);
              return <line x1={x} y1="0" x2={x} y2={height} stroke="#949494" strokeWidth="1" key={`vLine${index}`} />;
            })} */}
            <line x1="0" y1="0" x2="0" y2={height} stroke="black" stroke-width="4" />
            <line x1="0" y1={height} x2={width} y2={height} stroke="black" strokeWidth="4" />
          </svg>
        </div>
        <div className="horizontal-label">Horizontal Axis</div>
      </div>
    </div>
  );
};
