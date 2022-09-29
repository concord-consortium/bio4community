import profile1Image from "../images/silhouettes/Profile1.png";
import profile2Image from "../images/silhouettes/Profile2.png";
import profile3Image from "../images/silhouettes/Profile3.png";
import profile4Image from "../images/silhouettes/Profile4.png";
import profile5Image from "../images/silhouettes/Profile5.png";
import heartImage from "../images/silhouettes/Heart.png";
import brainImage from "../images/silhouettes/Brain.png";

const silhouetteStartStyle = {
  height: "216px",
  left: "17px",
  top: 0
};
export interface ISilhouetteData {
  image: any;
  startStyle: Record<string, any>;
}
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
const noseSilhouetteZoomStyle = {
  height: "1010px",
  left: "-150px",
  top: "-130px"
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
export interface ISilhouetteOrganData {
  image: any;
  silhouetteZoomStyle: Record<string, any>;
  startStyle: Record<string, any>;
  zoomStyle: Record<string, any>;
}
export const silhouetteOrganData: Record<string, ISilhouetteOrganData[]> = {
  "heart": [
    {
      image: heartImage,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    },
    {
      image: heartImage,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    },
    {
      image: heartImage,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    },
    {
      image: heartImage,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    },
    {
      image: heartImage,
      silhouetteZoomStyle: heartSilhouetteZoomStyle,
      startStyle: heartStartStyle,
      zoomStyle: heartZoomStyle
    }
  ],
  "nose": [
    {
      image: heartImage,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    },
    {
      image: heartImage,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    },
    {
      image: heartImage,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    },
    {
      image: heartImage,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    },
    {
      image: heartImage,
      silhouetteZoomStyle: noseSilhouetteZoomStyle,
      startStyle: {},
      zoomStyle: {}
    }
  ],
  "brain": [
    {
      image: brainImage,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    },
    {
      image: brainImage,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    },
    {
      image: brainImage,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    },
    {
      image: brainImage,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    },
    {
      image: brainImage,
      silhouetteZoomStyle: brainSilhouetteZoomStyle,
      startStyle: brainStartStyle,
      zoomStyle: brainZoomStyle
    }
  ]
};
