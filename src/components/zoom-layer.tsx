// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";

import { initialFadeIn, firstPause, zoomSwipe, videoFadeIn, secondPause, zoomFadeOut,
  silhouetteZoomData } from "../data/zoom-data";
import { AppContext } from "../hooks/use-app-context";

import "./zoom-layer.scss";

const polygonPoints = (points: number[][]) => {
  return points.map((point: number[]) => `${point[0]},${point[1]}`).join(" ");
};

// App size
const totalWidth = 940;
const totalHeight = 598;

interface IZoomLayer {
  ac: AppContext;
  control1?: boolean;
  control2?: boolean;
  control3?: boolean;
  setTissueEnabled?: (val: boolean) => void;
  showSilhouetteZoom?: boolean;
}
export const ZoomLayer = ({ ac, control1, control2, control3, setTissueEnabled, showSilhouetteZoom }: IZoomLayer) => {
  const c1 = +(control1 || false);
  const c2 = +(control2 || false);
  // const c3 = +(control3 || false);
  const szd = silhouetteZoomData[ac.organ][c1][c2];

  // Silhouette Mask
  const [silhouetteMaskStyle, setSilhouetteMaskStyle] = useState({
    width: totalWidth,
    height: szd.boxY - 2,
    opacity: 1
  });

  // Silhouette Back
  const silhouetteBackPoints = [
    [szd.start1X, szd.start1Y],
    [szd.start2X, szd.start2Y],
    [szd.target2X, szd.target2Y],
    [szd.target1X, szd.target1Y]
  ];

  // Silhouette Lines
  const silhouetteLeftPoints = [
    [szd.start1X, szd.start1Y],
    [szd.target1X, szd.target1Y]
  ];
  const silhouetteRightPoints = [
    [szd.start2X, szd.start2Y],
    [szd.target2X, szd.target2Y]
  ];

  // Silhouette Box
  const [silhouetteBoxOpacity, setSilhouetteBoxOpacity] = useState(0);
  const silhouetteBoxStyle = {
    left: szd.boxX,
    top: szd.boxY,
    width: szd.boxWidth,
    height: szd.boxHeight,
    opacity: silhouetteBoxOpacity
  };

  const [silhouetteStatus, setSilhouetteStatus] = useState(0);
  useEffect(() => {
    if (showSilhouetteZoom) {
      if (silhouetteStatus === 0) {
        setTimeout(() => setSilhouetteBoxOpacity(1), 10);
        setTimeout(() => setSilhouetteStatus(1), initialFadeIn * 1000 + 10);
      } else if (silhouetteStatus === 1) {
        setTimeout(() => setSilhouetteStatus(2), firstPause * 1000);
      } else if (silhouetteStatus === 2) {
        setSilhouetteMaskStyle((style: any) => ({
          ...style,
          height: szd.target1Y + 2
        }));
        setTimeout(() => setSilhouetteStatus(3), zoomSwipe * 1000);
      } else if (silhouetteStatus === 3) {
        setTissueEnabled?.(true);
        setTimeout(() => setSilhouetteStatus(4), videoFadeIn * 1000);
      } else if (silhouetteStatus === 4) {
        setTimeout(() => setSilhouetteStatus(5), secondPause * 1000);
      } else if (silhouetteStatus === 5) {
        setSilhouetteMaskStyle((style: any) => ({
          ...style,
          opacity: 0
        }));
        setTimeout(() => setSilhouetteStatus(6), zoomFadeOut * 1000);
      }
    }
  }, [setTissueEnabled, showSilhouetteZoom, silhouetteStatus, szd.target1Y]);

  return (
    <div className="zoom-layer">
      <div className="svg-container" style={silhouetteMaskStyle} >
        <svg viewBox={`0 0 ${totalWidth} ${totalHeight}`} xmlns="http://www.w3.org/2000/svg">
          <polygon points={polygonPoints(silhouetteBackPoints)} className="silhouette-background" />
        </svg>
      </div>
      {showSilhouetteZoom && <div className={clsx("silhouette-box", ac.organ)} style={silhouetteBoxStyle}></div>}
      <div className="svg-container" style={silhouetteMaskStyle} >
        <svg viewBox={`0 0 ${totalWidth} ${totalHeight}`} xmlns="http://www.w3.org/2000/svg">
          <polyline points={polygonPoints(silhouetteLeftPoints)} className="silhouette-line-back" />
          <polyline points={polygonPoints(silhouetteRightPoints)} className="silhouette-line-back" />
          <polyline points={polygonPoints(silhouetteLeftPoints)} className="silhouette-line-front" />
          <polyline points={polygonPoints(silhouetteRightPoints)} className="silhouette-line-front" />
        </svg>
      </div>
    </div>
  );
};
