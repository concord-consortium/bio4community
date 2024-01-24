// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React, { ReactElement } from "react";
import { clsx } from "clsx";
import { useAppContext } from "../../hooks/use-app-context";
import { getData, getSVGPath } from "../../data/graph-data";
import { getAllExperiments } from "../../utils/control-utils";

const 
  dataWidth = 275,
  dataHeight = 115,
  yLabelWidth = 35,
  xLabelHeight = 21,
  fontHeight = 14,
  lineHeight = fontHeight*1.2,
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

  const data = getData(organ, control1, control2);
  const dotLoc =
    simulationTime === 0 ? data?.start :
    simulationTime === 1 ? data?.mid :
    data?.end;

  // Generate the SVG code for each visible graph.
  // Keep the selected one separate so that it can be displayed in the foreground.
  let selectedDataPlot = null;
  const backgroundDataPlots: ReactElement[] = [];
  if (dotLoc) {
    getAllExperiments(ac).forEach((e, index) => {
      const showing = graphsShowing[+e.option1][+e.option2];
      if (!showing) return null;

      const selected = e.option1===control1 && e.option2===control2;
      const key = "" + (e.option1 ? "t" : "f") + (e.option2 ? "t" : "f");
      const classForOptions = "line-style-" + index;
      const lineClasses = clsx("data", classForOptions, { selected });
      
      // Use a transform to make a nice coordinate space for the data with origin at the lower left
      // Define a clip are (left part of graph, with blue background). Then draw:
      //  * The blue background
      //  * A lighter line all the way across
      //  * A darker line to the time point
      //  * A dot at the time point
      const plot =
        <g key={key} transform={`translate(${yLabelWidth}, ${topMargin + dataHeight}) scale(1, -1)`}>
          {/* Blue background and darker line are clipped to the region representing elapsed time */}
          { selected &&
            <clipPath id="clip">
              <rect x="0" y="0" width={dotLoc[0]} height={dataHeight} />
            </clipPath> }
          { selected &&
            <rect x="0" y="0" width={dataWidth} height={dataHeight} fill="#cdebf263" clipPath="url(#clip)"/> }
          <path d={getSVGPath(organ, e.option1, e.option2)} className={lineClasses} opacity="0.5"/>
          <path d={getSVGPath(organ, e.option1, e.option2)} className={lineClasses} clipPath="url(#clip)"/>
          { selected && 
            <circle cx={dotLoc[0]} cy={dotLoc[1]} r={dotSize} className="data-dot" /> }
        </g>;
      
      if (selected) {
        selectedDataPlot = plot;
      } else {
        backgroundDataPlots.push(plot);
      }
    });
  }

  return (
    <div className="sim-graph">
      <svg xmlns="http://www.w3.org/2000/svg" 
        height={dataHeight + xLabelHeight + topMargin} 
        width={dataWidth + yLabelWidth + rightMargin}>
          <line x1={yLabelWidth} x2={yLabelWidth} 
                y1={topMargin} y2={topMargin + dataHeight} className="axis"/>
          <line x1={yLabelWidth} x2={yLabelWidth+dataWidth} 
                y1={topMargin + dataHeight} y2={topMargin + dataHeight} className="axis"/>
          <text x={yLabelWidth+dataWidth/2} y={topMargin + dataHeight + lineHeight} textAnchor="middle">
            {ac.o("XLABEL")}
          </text>
          <text textAnchor="middle" transform={`translate(${yLabelWidth-7}, ${topMargin + dataHeight/2}) rotate(-90)`}>
            <tspan x="0" dy={-lineHeight}>{ac.o("YLABEL1")}</tspan>
            <tspan x="0" dy={lineHeight}>{ac.o("YLABEL2")}</tspan>
          </text>
          {backgroundDataPlots}
          {selectedDataPlot}
      </svg>
    </div>
  );

};
