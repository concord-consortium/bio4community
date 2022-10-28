import profile1Image from "../assets/images/silhouettes/profile-1@2x.png";
import profile2Image from "../assets/images/silhouettes/profile-3@2x.png";
import profile3Image from "../assets/images/silhouettes/profile-4@2x.png";
import profile4Image from "../assets/images/silhouettes/profile-5@2x.png";
import heartImage from "../assets/images/silhouettes/heart-close-up@2x.png";
import brainImage from "../assets/images/silhouettes/brain-close-up@2x.png";

export interface ISilhouetteData {
  image: any;
  startStyle: Record<string, any>;
}
const silhouetteStartStyle = {
  width: "230px",
  left: 0,
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
  width: "345px",
  left: "-58px",
  top: "-58px"
  // height: "1010px",
  // left: "-320px",
  // top: "-450px"
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
  height: "46px",
  left: "69px",
  top: "5px"
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
  top: "10px"
};
const brainStartStyle = {
  height: "35px",
  left: "75px",
  top: "10px"
};
const brainZoomStyle = {
  height: "140px",
  left: "6px",
  top: "45px"
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
