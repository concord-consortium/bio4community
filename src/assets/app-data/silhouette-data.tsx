import profile1Image from "../images/silhouettes/Profile1.png";
import profile2Image from "../images/silhouettes/Profile2.png";
import profile3Image from "../images/silhouettes/Profile3.png";
import profile4Image from "../images/silhouettes/Profile4.png";
import profile5Image from "../images/silhouettes/Profile5.png";
import heartImage from "../images/silhouettes/Heart.png";
import brainImage from "../images/silhouettes/Brain.png";

export interface ISilhouetteData {
  image: any;
  startStyle: Record<string, any>;
}
const silhouetteStartStyle = {
  height: "216px",
  left: "17px",
  top: 0
};
export const silhouetteData: ISilhouetteData[] = [
  {
    image: profile1Image,
    startStyle: silhouetteStartStyle
  },
  {
    image: profile2Image,
    startStyle: silhouetteStartStyle
  },
  {
    image: profile3Image,
    startStyle: silhouetteStartStyle
  },
  {
    image: profile4Image,
    startStyle: silhouetteStartStyle
  },
  {
    image: profile5Image,
    startStyle: silhouetteStartStyle
  }
];

export interface ISilhouetteOrganData {
  image: any;
  buttonStartStyle: Record<string, any>;
  buttonZoomStyle: Record<string, any>;
  silhouetteZoomStyle: Record<string, any>;
  startStyle: Record<string, any>;
  zoomStyle: Record<string, any>;
}
const heartButtonStartStyle = {
  opacity: 1,
  width: "58px",
  height: "54px",
  left: "75px",
  top: "82px"
};
const heartButtonZoomStyle = {
  opacity: 0,
  width: "290px",
  height: "270px",
  left: "-50px",
  top: "-35px"
};
const heartSilhouetteZoomStyle = {
  height: "1010px",
  left: "-320px",
  top: "-450px"
};
const heartStartStyle = {
  height: "40px",
  left: "90px",
  top: "89px"
};
const heartZoomStyle = {
  height: "200px",
  left: "30px",
  top: "6px"
};
const noseButtonStartStyle = {
  opacity: 1,
  width: "29px",
  height: "27px",
  left: "56px",
  top: "31px"
};
const noseButtonZoomStyle = {
  opacity: 0,
  width: "290px",
  height: "270px",
  left: "-50px",
  top: "-35px"
};
const noseSilhouetteZoomStyle = {
  height: "1010px",
  left: "-150px",
  top: "-130px"
};
const brainButtonStartStyle = {
  opacity: 1,
  width: "59px",
  height: "51px",
  left: "69px",
  top: "2px"
};
const brainButtonZoomStyle = {
  opacity: 0,
  width: "295px",
  height: "255px",
  left: "-52px",
  top: "-10px"
};
const brainSilhouetteZoomStyle = {
  height: "900px",
  left: "-240px",
  top: "-5px"
};
const brainStartStyle = {
  height: "35px",
  left: "75px",
  top: "10px"
};
const brainZoomStyle = {
  height: "140px",
  left: "6px",
  top: "30px"
};
export const silhouetteOrganData: Record<string, ISilhouetteOrganData[]> = {
  "heart": [
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    }
  ],
  "nose": [
    {
      image: heartImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    },
    {
      image: heartImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    },
    {
      image: heartImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    },
    {
      image: heartImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    },
    {
      image: heartImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    }
  ],
  "brain": [
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    },
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    },
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    },
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    },
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    }
  ]
};
