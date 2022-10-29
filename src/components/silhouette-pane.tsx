import React, { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";

import { PaneTitle } from "./pane-title";
import { AppContext } from "../hooks/use-app-context";
import { ISilhouetteData, ISilhouetteOrganData, silhouetteData, silhouetteOrganData }
  from "../data/silhouette-data";

import InternalOrgans from "../assets/images/silhouettes/internal-organs-with-brain.png";

import "./silhouette-pane.scss";

// Make sure you update $transition-duration in silhouette-pane.scss if you change this.
const zoomDuration = 2000;

interface ISilhouettePane {
  ac: AppContext;
  hasZoomed: boolean;
  setHasZoomed: (val: boolean) => void;
}
export const SilhouettePane = ({ ac, hasZoomed, setHasZoomed }: ISilhouettePane) => {
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
      setOrganStyle(sod.startStyle);
    }
  }, [hasZoomed, sd, sod]);

  const handleClick = (event: any) => {
    if (!hasZoomed) {
      setZooming(true);
      if (sod) {
        setSilhouetteStyle(sod.silhouetteZoomStyle);
        setInternalOrgansStyle({ ...sod.silhouetteZoomStyle, opacity: 0 });
        setButtonStyle(sod.buttonZoomStyle);
        setOrganStyle(sod.zoomStyle);
      }
      setTimeout(() => { setHasZoomed(true); }, zoomDuration);
    }
  };

  const instructionsMessage = ac.t("SILHOUETTEINSTRUCTIONS").replace("ORGAN", ac.organ);
  const title = ac.t("SILHOUETTETITLE").replace("ORGAN", ac.organ[0].toUpperCase() + ac.organ.slice(1));
  return (
    <div className="silhouette-pane">
      {sd && <img src={sd.image} className="silhouette-profile" style={silhouetteStyle} />}
      {sd && <img src={InternalOrgans} className="silhouette-profile" style={internalOrgansStyle} />}
      <button className={clsx("silhouette-button", ac.organ)} onClick={handleClick} style={buttonStyle} />
      {sod && ac.organ !== "nose" && false /* Currently missing assets for nose */ &&
        <img src={sod?.image} className={clsx("silhouette-organ", ac.organ)} style={organStyle} />}
      {!zooming && <PaneTitle extraClass="instruction-title" title={instructionsMessage} />}
      {hasZoomed && <PaneTitle extraClass="silhouette-title" title={title} />}
    </div>
  );
};
