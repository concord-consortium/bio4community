// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Coord, Range } from "../data/graph-data";
import { IAppContext } from "../hooks/use-app-context";

import "./sim-graph.scss";

// Constants
const graphMargin = 8; // The graph has this margin to the left, right, and bottom, but not top
const width = 307;
const height = 95;
const defaultLineColor = "#949494";

// Returns the min and max values for the given axis of the given data
const getRange = (data: Coord[], coord: "x" | "y") => ({
  min: Math.min(...data.map(d => d[coord])),
  max: Math.max(...data.map(d => d[coord]))
});

// White rectangle and pale gray lines creating a grid as the graph background
interface IGraphBackgroundGrid {
  color?: string;
  hLines: number;
  vLines: number;
}
const GraphBackgroundGrid = ({ color, hLines, vLines }: IGraphBackgroundGrid) => {
  const hStep = height / (hLines + 1);
  const hArray = [...Array(hLines).keys()]; // Like range(hLines) in python
  const vStep = width / (vLines + 1);
  const vArray = [...Array(vLines).keys()];

  return (
    <>
      <rect x={graphMargin} y="0" height={height} width={width} />
      {hArray.map(index => {
        const y = hStep * (index + 1);
        return <line x1={graphMargin} y1={y} x2={width + graphMargin} y2={y} stroke={color || defaultLineColor}
          strokeWidth="1" key={`hLine${index}`} />;
      })}
      {vArray.map(index => {
        const x = vStep * (index + 1);
        return <line x1={x + graphMargin} y1="0" x2={x + graphMargin} y2={height} stroke={color || defaultLineColor}
          strokeWidth="1" key={`vLine${index}`} />;
      })}
    </>
  );
};

// A dark border for the left and bottom of the graph and a lighter border for the right
const GraphBorder = () => (
  <>
    <line x1={width + graphMargin} y1="0" x2={width + graphMargin} y2={height} stroke={defaultLineColor}
      strokeWidth="1" />
    <line x1={graphMargin} y1="0" x2={graphMargin} y2={height} stroke="black" strokeWidth="2" />
    <line x1={graphMargin - 1} y1={height} x2={width + graphMargin + .5} y2={height} stroke="black" strokeWidth="2" />
  </>
);

// Converts a list of coordinates into a string in graph space that can be passed to a polyline element
const polylinePoints = (data: Coord[], convertX: (x: number) => number, convertY: (y: number) => number) => {
  return data.map((coord: Coord) => `${convertX(coord.x)},${convertY(coord.y)}`).join(" ");
};

interface ISimGraph {
  ac: IAppContext;
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
  const plotColor = "#0481a0";

  // Determine how to convert between data space and svg space
  const xRange = horizontalRange || getRange(data, "x");
  const xSpan = xRange.max - xRange.min;
  const yRange = verticalRange || getRange(data, "y");
  const ySpan = yRange.max - yRange.min;
  const convertX = (x: number) => (x - xRange.min) / xSpan * width + graphMargin;
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
          <svg viewBox={`0 0 ${width + 2 * graphMargin} ${height + graphMargin}`} xmlns="http://www.w3.org/2000/svg" fill="white">
            <GraphBackgroundGrid hLines={3} vLines={2} />
            {videoComplete && <polyline points={polylinePoints(data, convertX, convertY)} fill="none"
              stroke={plotColor} strokeWidth={1.5} />}
            <polyline points={polylinePoints(polylineData, convertX, convertY)} fill="none" stroke={plotColor}
              strokeWidth={3} />
            <GraphBorder />
            {percentComplete > 0 &&
              <circle cx={convertX(currentPoint.x)} cy={convertY(currentPoint.y)} r={6} fill={plotColor}
                stroke="white" strokeWidth={2} />}
          </svg>
        </div>
        <div className="horizontal-label">{horizontalLabel || "Horizontal Axis"}</div>
      </div>
    </div>
  );
};
