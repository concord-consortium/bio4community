import React, { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";

import { AppContext } from "../hooks/use-app-context";
import { ISilhouetteData, ISilhouetteOrganData, silhouetteData, silhouetteOrganData } from "../utils/app-data";

import "./silhouette-pane.scss";

interface ISilhouettePane {
  ac: AppContext;
  hasZoomed: boolean;
  setHasZoomed: (val: boolean) => void;
}
export const SilhouettePane = ({ ac, hasZoomed, setHasZoomed }: ISilhouettePane) => {
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

  const handleClick = (event: any) => {
    if (!hasZoomed) {
      setHasZoomed(true);
    }
  };

  return (
    <div className="silhouette-pane">
      {sd && <img src={sd.image} className="silhouette-profile" />}
      <button className={clsx("silhouette-button", ac.organ)} onClick={handleClick} />
      {sod && ac.organ !== "nose" &&
        <img src={sod.image} className={clsx("silhouette-organ", ac.organ)} />}
    </div>
  );
};
