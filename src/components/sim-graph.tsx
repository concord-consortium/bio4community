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
// Returns the min and max values for the given axis of the given data
const getRange = (data: Coord[], coord: "x" | "y") => ({
  min: Math.min(...data.map(d => d[coord])),
  max: Math.max(...data.map(d => d[coord]))
});

// Pale gray lines creating a grid as the graph background
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

// A dark border for the left and bottom of the graph
interface IHalfBorder {
  height: number;
  width: number;
}
const HalfBorder = ({ height, width }: IHalfBorder) => (
  <>
    <line x1="0" y1="0" x2="0" y2={height} stroke="black" stroke-width="4" />
    <line x1="0" y1={height} x2={width} y2={height} stroke="black" strokeWidth="4" />
  </>
);

// Converts a list of coordinates into a string in graph space that can be passed to a polyline element
const polylinePoints = (data: Coord[], convertX: (x: number) => number, convertY: (y: number) => number) => {
  return data.map((coord: Coord) => `${convertX(coord.x)},${convertY(coord.y)}`).join(" ");
};

interface ISimGraph {
  ac: AppContext;
  data: Coord[];
  percentComplete: number;
  horizontalLabel?: any;
  horizontalRange?: Range;
  verticalLabel?: string;
  verticalRange?: Range;
  videoComplete?: boolean;
}
export const SimGraph = ({
  ac, data, percentComplete, horizontalLabel, horizontalRange, verticalLabel, verticalRange, videoComplete
}: ISimGraph) => {
  const width = 307;
  const height = 95;
  const plotColor = "#0481a0";

  // Determine how to convert between data space and svg space
  const xRange = horizontalRange || getRange(data, "x");
  const xSpan = xRange.max - xRange.min;
  const yRange = verticalRange || getRange(data, "y");
  const ySpan = yRange.max - yRange.min;
  const convertX = (x: number) => (x - xRange.min) / xSpan * width;
  const convertY = (y: number) => height - ((y - yRange.min) / ySpan * height);

  // Determine where the dot and end of plot should be
  const currentIndex = percentComplete * (data.length - 1);
  const lastIndex = Math.floor(currentIndex);
  const indexRemainder = currentIndex % 1;
  const currentPoint = indexRemainder === 0 ? data[lastIndex]
    : { x: data[lastIndex].x + (data[lastIndex + 1].x - data[lastIndex].x) * indexRemainder,
      y: data[lastIndex].y + (data[lastIndex + 1].y - data[lastIndex].y) * indexRemainder };
  const polylineData = data.slice(0, lastIndex + 1);
  polylineData.push(currentPoint);

  return (
    <div className="sim-graph-container">
      <div className="vertical-label">{verticalLabel || "Vertical Axis"}</div>
      <div className="sim-graph-right">
        <div className="sim-graph">
          <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" fill="blue">
            <Grid height={height} hLines={3} vLines={2} width={width} />
            {videoComplete && <polyline points={polylinePoints(data, convertX, convertY)} fill="none"
              stroke={plotColor} strokeWidth={1.5} />}
            <polyline points={polylinePoints(polylineData, convertX, convertY)} fill="none" stroke={plotColor}
              strokeWidth={3} />
            {percentComplete > 0 &&
              <circle cx={convertX(currentPoint.x)} cy={convertY(currentPoint.y)} r={6} fill={plotColor}
                stroke="white" strokeWidth={2} />}
            <HalfBorder height={height} width={width} />
          </svg>
        </div>
        <div className="horizontal-label">{horizontalLabel || "Horizontal Axis"}</div>
      </div>
    </div>
  );
};
