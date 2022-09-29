import React, { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";

import { AppContext } from "../hooks/use-app-context";
import { ISilhouetteData, ISilhouetteOrganData, silhouetteData, silhouetteOrganData }
  from "../assets/app-data/silhouette-data";

import "./silhouette-pane.scss";

interface ISilhouettePane {
  ac: AppContext;
  hasZoomed: boolean;
  setHasZoomed: (val: boolean) => void;
}
export const SilhouettePane = ({ ac, hasZoomed, setHasZoomed }: ISilhouettePane) => {
  const [silhouetteStyle, setSilhouetteStyle] = useState<Record<string, any>>({});
  const [organStyle, setOrganStyle] = useState<Record<string, any>>({});

  // Determine which silhouette to use
  const sdIndex = useMemo(() => {
    // return 4;
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
      setOrganStyle(sod.startStyle);
    }
  }, [hasZoomed, sd, sod]);

  const handleClick = (event: any) => {
    if (!hasZoomed) {
      setHasZoomed(true);
      if (sod) {
        setSilhouetteStyle(sod.silhouetteZoomStyle);
        setOrganStyle(sod.zoomStyle);
      }
    }
  };

  return (
    <div className="silhouette-pane">
      {sd && <img src={sd.image} className="silhouette-profile" style={silhouetteStyle} />}
      <button className={clsx("silhouette-button", ac.organ)} onClick={handleClick} />
      {sod && ac.organ !== "nose" &&
        <img src={sod.image} className={clsx("silhouette-organ", ac.organ)} style={organStyle} />}
    </div>
  );
};
