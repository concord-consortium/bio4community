import React from "react";
import { AppContext } from "../hooks/use-app-context";

import "./sim-graph.scss";

interface ISimGraph {
  ac: AppContext;
}
export const SimGraph = ({ ac }: ISimGraph) => {
  return (
    <div className="sim-graph-container">
      <div className="vertical-label">Vertical Axis</div>
      <div className="sim-graph-right">
        <div className="sim-graph"></div>
        <div className="horizontal-label">Horizontal Axis</div>
      </div>
    </div>
  );
};
