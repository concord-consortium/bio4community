// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";

import { initialFadeIn, firstPause, zoomSwipe, videoFadeIn, secondPause, zoomFadeOut,
  ZoomInfo } from "../data/zoom-data";
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
  setVideoEnabled?: (val: boolean) => void;
  show?: boolean;
  type: "silhouette" | "cell";
  zoomInfo: ZoomInfo;
}
export const ZoomLayer = ({ ac, setVideoEnabled, show, type, zoomInfo }: IZoomLayer) => {
  // Mask
  const [maskStyle, setMaskStyle] = useState({
    width: type === "cell" ? zoomInfo.boxX - 2 : totalWidth,
    height: type === "cell" ? totalHeight : zoomInfo.boxY - 2,
    opacity: 1
  });

  // Back
  const backPoints = [
    [zoomInfo.start1X, zoomInfo.start1Y],
    [zoomInfo.start2X, zoomInfo.start2Y],
    [zoomInfo.target2X, zoomInfo.target2Y],
    [zoomInfo.target1X, zoomInfo.target1Y]
  ];

  // Lines
  const firstPoints = [
    [zoomInfo.start1X, zoomInfo.start1Y],
    [zoomInfo.target1X, zoomInfo.target1Y]
  ];
  const secondPoints = [
    [zoomInfo.start2X, zoomInfo.start2Y],
    [zoomInfo.target2X, zoomInfo.target2Y]
  ];

  // Box
  const [boxOpacity, setBoxOpacity] = useState(0);
  const boxStyle = {
    left: zoomInfo.boxX,
    top: zoomInfo.boxY,
    width: zoomInfo.boxWidth,
    height: zoomInfo.boxHeight,
    opacity: boxOpacity
  };

  const [status, setStatus] = useState(0);
  useEffect(() => {
    if (show) {
      if (status === 0) {
        // Fade in box
        setTimeout(() => setBoxOpacity(1), 10);
        setTimeout(() => setStatus(1), initialFadeIn * 1000 + 10);
      } else if (status === 1) {
        // Wait
        setTimeout(() => setStatus(2), firstPause * 1000);
      } else if (status === 2) {
        // Reveal zoom
        setMaskStyle((style: any) => ({
          ...style,
          height: type === "cell" ? totalHeight : zoomInfo.target1Y + 2,
          width: type === "cell" ? zoomInfo.target1X + 2 : totalWidth
        }));
        setTimeout(() => setStatus(3), zoomSwipe * 1000);
      } else if (status === 3) {
        // Enable the video, which fades it in
        setVideoEnabled?.(true);
        setTimeout(() => setStatus(4), videoFadeIn * 1000);
      } else if (status === 4) {
        // Wait
        setTimeout(() => setStatus(5), secondPause * 1000);
      } else if (status === 5) {
        // Fade out zoom
        setMaskStyle((style: any) => ({
          ...style,
          opacity: 0
        }));
        setTimeout(() => setStatus(6), zoomFadeOut * 1000);
      }
    }
  }, [setVideoEnabled, show, status, type, zoomInfo]);

  return (
    <div className={clsx("zoom-layer", type)} >
      <div className="svg-container" style={maskStyle} >
        <svg viewBox={`0 0 ${totalWidth} ${totalHeight}`} xmlns="http://www.w3.org/2000/svg" className="svg" >
          <polygon points={polygonPoints(backPoints)} className="zoom-background" />
        </svg>
      </div>
      {show && <div className={clsx("zoom-box", ac.organ)} style={boxStyle}></div>}
      <div className="svg-container" style={maskStyle} >
        <svg viewBox={`0 0 ${totalWidth} ${totalHeight}`} xmlns="http://www.w3.org/2000/svg" className="svg" >
          <polyline points={polygonPoints(firstPoints)} className="zoom-line-back" />
          <polyline points={polygonPoints(secondPoints)} className="zoom-line-back" />
          <polyline points={polygonPoints(firstPoints)} className="zoom-line-front" />
          <polyline points={polygonPoints(secondPoints)} className="zoom-line-front" />
        </svg>
      </div>
    </div>
  );
};
