// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useAppContext } from "../hooks/use-app-context";
import { getData, getSVGPath } from "./simulation-data";

const 
  dataWidth = 275,
  dataHeight = 115,
  yLabelWidth = 35,
  xLabelHeight = 17,
  fontHeight = 14,
  rightMargin = 6, // Leaves room for the dot
  topMargin = 6,
  dotSize = 6;

interface ISimulationGraphProps {
  control1: boolean;
  control2: boolean;
  simulationTime: number;
  graphsShowing: boolean[][];
}

export const SimulationGraph = ({ control1, control2, simulationTime, graphsShowing }: ISimulationGraphProps) => {
  const ac = useAppContext();
  const { organ } = ac;
  const lineClass = "line-style-" + (control1 ? "t" : "f") + (control2 ? "t" : "f");

  const data = getData(organ, control1, control2);
  const dotLoc =
    simulationTime === 0 ? data?.start :
    simulationTime === 1 ? data?.mid :
    data?.end;

  let dataPlot = null;  
  if (dotLoc) {
    dataPlot = 
      // Use a transform to make a nice coordinate space for the data with origin at the lower left
      // Define a clip are (left part of graph, with blue background). Then draw:
      //  * The blue background
      //  * A lighter line all the way across
      //  * A darker line to the time point
      //  * A dot at the time point
      <g transform={`translate(${yLabelWidth}, ${topMargin + dataHeight}) scale(1, -1)`}>
        {/* Blue background and darker line are clipped to the region representing elapsed time */}
        <clipPath id="clip">
          <rect x="0" y="0" width={dotLoc[0]} height={dataHeight} />
        </clipPath>
        <rect x="0" y="0" width={dataWidth} height={dataHeight} fill="#cdebf263" clipPath="url(#clip)"/>
        <path d={getSVGPath(organ, control1, control2)} className={`data ${lineClass}`} opacity="0.5"/>
        <path d={getSVGPath(organ, control1, control2)} className={`data ${lineClass}`} clipPath="url(#clip)"/>
        <circle cx={dotLoc[0]} cy={dotLoc[1]} r={dotSize} className="data-dot" />
      </g>;
  }

    return (
    <div className="sim-graph">
      <svg xmlns="http://www.w3.org/2000/svg" 
        height={dataHeight + xLabelHeight + rightMargin} 
        width={dataWidth + yLabelWidth + topMargin}>
          <line x1={yLabelWidth} x2={yLabelWidth} 
                y1={topMargin} y2={topMargin + dataHeight} className="axis"/>
          <line x1={yLabelWidth} x2={yLabelWidth+dataWidth} 
                y1={topMargin + dataHeight} y2={topMargin + dataHeight} className="axis"/>
          <text x={yLabelWidth+dataWidth/2} y={topMargin + dataHeight + fontHeight} textAnchor="middle">
            {ac.o("XLABEL")}
          </text>
          <text textAnchor="middle" transform={`translate(${yLabelWidth-4}, ${topMargin + dataHeight/2}) rotate(-90)`}>
            <tspan x="0" dy={-fontHeight}>{ac.o("YLABEL1")}</tspan>
            <tspan x="0" dy={fontHeight}>{ac.o("YLABEL2")}</tspan>
          </text>
          {dataPlot}
      </svg>
    </div>
  );

};
