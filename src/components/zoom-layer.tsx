import React from "react";

import { silhouetteZoomData } from "../data/zoom-data";
import { AppContext } from "../hooks/use-app-context";

import "./zoom-layer.scss";

interface IZoomLayer {
  ac: AppContext;
  control1?: boolean;
  control2?: boolean;
  control3?: boolean;
  showSilhouetteZoom?: boolean;
}
export const ZoomLayer = ({ ac, control1, control2, control3, showSilhouetteZoom }: IZoomLayer) => {
  const c1 = +(control1 || false);
  const c2 = +(control2 || false);
  // const c3 = +(control3 || false);
  const szd = silhouetteZoomData[ac.organ][c1][c2];
  const silhouetteBoxStyle = {
    left: szd.boxX,
    top: szd.boxY,
    width: szd.boxWidth,
    height: szd.boxHeight
  };
  return (
    <div className="zoom-layer">
      {showSilhouetteZoom && <div className="silhouette-box" style={silhouetteBoxStyle}></div>}
    </div>
  );
};
