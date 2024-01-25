import React from "react";

import "./artery-overlay.scss";

const videoWidth = 456;
const videoHeight = 284;
const lineStyles = {
  stroke: "white",
  strokeDasharray: "6,6",
  strokeOpacity: .75,
  strokeWidth: 3
};
const lineX = 142;
const lineY1 = 66;
const lineY2 = 217;
const circleCX = 355;
const circleCY = 141;
const circleRadius = 75;
export const ArteryOverlay = () => (
  <div className="artery-overlay">
    <svg viewBox={`0 0 ${videoWidth} ${videoHeight}`} xmlns="http://www.w3.org/2000/svg" className="svg" >
      <line x1={lineX} y1={lineY1} x2={lineX} y2={lineY2} {...lineStyles} />
      <circle cx={circleCX} cy={circleCY} r={circleRadius} {...lineStyles} fillOpacity={0} />
    </svg>
  </div>
);
