import React, { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";

import { PaneTitle } from "./pane-title";
import { AppContext } from "../hooks/use-app-context";
import { brainStartStyle, brainEndStyle, ISilhouetteData, ISilhouetteOrganData, silhouetteData,
  silhouetteOrganData } from "../data/silhouette-data";

import InternalOrgans from "../assets/images/silhouettes/internal-organs-with-brain.png";
import BrainPFC from "../assets/images/silhouettes/brainAnim_PFC.gif";
import BrainAmygdala from "../assets/images/silhouettes/brainAnim_Amygdala.gif";

import "./silhouette-pane.scss";

// Make sure you update $transition-duration in silhouette-pane.scss if you change this.
const zoomDuration = 2000;

interface ISilhouettePane {
  ac: AppContext;
  control1?: boolean; // Used to determine which brain gif to use
  hasZoomed: boolean;
  setHasZoomed: (val: boolean) => void;
}
export const SilhouettePane = ({ ac, control1, hasZoomed, setHasZoomed }: ISilhouettePane) => {
  const [silhouetteStyle, setSilhouetteStyle] = useState<Record<string, any>>({});
  const [internalOrgansStyle, setInternalOrgansStyle] = useState<Record<string, any>>({});
  const [buttonStyle, setButtonStyle] = useState<Record<string, any>>({});
  const [organStyle, setOrganStyle] = useState<Record<string, any>>({});
  const [zooming, setZooming] = useState(false);

  // Determine which silhouette to use
  const sdIndex = useMemo(() => {
    const index = Math.floor(Math.random() * silhouetteData.length);
    return index < silhouetteData.length ? index : 0;
  }, []);
  const [sd, setSd] = useState<ISilhouetteData | undefined>();
  const [sod, setSod] = useState<ISilhouetteOrganData | undefined>();
  useEffect(() => {
    setSd(silhouetteData[sdIndex]);
    setSod(silhouetteOrganData[ac.organ][sdIndex]);
  }, [ac, sdIndex]);

  useEffect(() => {
    if (!hasZoomed && sd && sod) {
      setSilhouetteStyle(sd.startStyle);
      setInternalOrgansStyle({ ...sd.startStyle, opacity: 1 });
      setButtonStyle(sod.buttonStartStyle);
      const startStyle = ac.organ === "brain" ? brainStartStyle : sd.startStyle;
      setOrganStyle({ ...startStyle, opacity: 0 });
    }
  }, [ac.organ, hasZoomed, sd, sod]);

  const handleClick = (event: any) => {
    if (!hasZoomed) {
      setZooming(true);
      if (sod) {
        setSilhouetteStyle(sod.silhouetteZoomStyle);
        setInternalOrgansStyle({ ...sod.silhouetteZoomStyle, opacity: 0 });
        setButtonStyle(sod.buttonZoomStyle);
        const zoomStyle = ac.organ === "brain" ? brainEndStyle : sod.silhouetteZoomStyle;
        setOrganStyle({ ...zoomStyle, opacity: 1 });
      }
      setTimeout(() => { setHasZoomed(true); }, zoomDuration);
    }
  };

  // The brain uses a gif based on the first control option rather than a normal organ image
  const organImage = ac.organ === "brain" ? (control1 ? BrainAmygdala : BrainPFC) : sod?.image;
  const instructionsMessage = ac.t("SILHOUETTEINSTRUCTIONS").replace("ORGAN", ac.organ);
  const title = ac.t("SILHOUETTETITLE").replace("ORGAN", ac.organ[0].toUpperCase() + ac.organ.slice(1));
  return (
    <div className="silhouette-pane">
      {sd && <img src={sd.image} className="silhouette-profile" style={silhouetteStyle} />}
      {sd && <img src={InternalOrgans} className="silhouette-profile" style={internalOrgansStyle} />}
      {sod && <img src={organImage} className={clsx("silhouette-organ", ac.organ)} style={organStyle} />}
      {!hasZoomed &&
        <button className={clsx("silhouette-button", ac.organ)} onClick={handleClick} style={buttonStyle} />}
      {!zooming && <PaneTitle extraClass="instruction-title" title={instructionsMessage} />}
      {hasZoomed && <PaneTitle extraClass="silhouette-title" title={title} />}
    </div>
  );
};
