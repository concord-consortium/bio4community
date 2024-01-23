// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useAppContext } from "../hooks/use-app-context";
import { getSVGPath } from "./simulation-data";

const 
  dataWidth = 275,
  dataHeight = 115,
  yLabelWidth = 35,
  xLabelHeight = 17;



interface ISimulationGraphProps {
  control1: boolean;
  control2: boolean;
}

export const SimulationGraph = ({ control1, control2 }: ISimulationGraphProps) => {
  const ac = useAppContext();
  const { organ } = ac;
  const lineClass = "line-style-" + (control1 ? "t" : "f") + (control2 ? "t" : "f");

  return (
    <div className="sim-graph">
      <svg xmlns="http://www.w3.org/2000/svg" height={dataHeight + xLabelHeight} width={dataWidth + yLabelWidth}>
          <rect x={yLabelWidth} y="0" width={dataWidth} height={dataHeight} fill="#cdebf263"/>
          <line x1={yLabelWidth} x2={yLabelWidth} y1="0" y2={dataHeight} className="axis"/>
          <line x1={yLabelWidth} x2={yLabelWidth+dataWidth} y1={dataHeight} y2={dataHeight} className="axis"/>
          <text x={yLabelWidth+dataWidth/2} y={xLabelHeight + dataHeight} textAnchor="middle">
            {ac.o("XLABEL")}
          </text>
          <text textAnchor="middle" transform={`translate(${yLabelWidth-4}, ${dataHeight/2}) rotate(-90)`}>
            <tspan x="0" dy="-14">{ac.o("YLABEL1")}</tspan>
            <tspan x="0" dy="14">{ac.o("YLABEL2")}</tspan>
          </text>
          {/* This g sets up a reasonable coordinate system for the data area, with origin at lower-left */}
          <g transform={`translate(${yLabelWidth}, ${dataHeight}) scale(1, -1)`}>
            <path d={getSVGPath(organ, control1, control2)} className={`data ${lineClass}`}/>
          </g>
      </svg>
    </div>
  );

};
