import profile1Image from "../assets/images/silhouettes/profile-1.png";
import profile2Image from "../assets/images/silhouettes/profile-3.png";
import profile3Image from "../assets/images/silhouettes/profile-4.png";
import profile4Image from "../assets/images/silhouettes/profile-5.png";
import heartImage from "../assets/images/silhouettes/heart-close-up.png";
import noseImage from "../assets/images/silhouettes/nasal-passages-close-up.png";

export interface ISilhouetteData {
  image: any;
  startStyle: Record<string, any>;
}
const silhouetteStartStyle = {
  width: "100%",
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
}
const hbw = 48;
const hbh = 50;
const heartButtonStartStyle = {
  opacity: 1,
  width: `${hbw}px`,
  height: `${hbh}px`,
  left: "85px",
  top: "96px"
};
const heartButtonZoomStyle = {
  opacity: 0,
  width: `${hbw * 6}px`,
  height: `${hbh * 6}px`,
  left: "-50px",
  top: "-35px"
};
const heartSilhouetteZoomStyle = {
  width: "1019px",
  left: "-420px",
  top: "-475px"
};
const nbw = 33;
const nbh = 34;
const noseButtonStartStyle = {
  opacity: 1,
  width: `${nbw}px`,
  height: `${nbh}px`,
  left: "59px",
  top: "38px"
};
const noseButtonZoomStyle = {
  opacity: 0,
  width: `${nbw * 8}px`,
  height: `${nbh * 8}px`,
  left: "-50px",
  top: "-35px"
};
const noseSilhouetteZoomStyle = {
  width: "1162px",
  left: "-352px",
  top: "-190px"
};
const bbw = 54;
const bbh = 56;
const brainButtonStartStyle = {
  opacity: 1,
  width: `${bbw}px`,
  height: `${bbh}px`,
  left: "77.5px",
  top: "6px"
};
const brainButtonZoomStyle = {
  opacity: 0,
  width: `${bbw * 6}px`,
  height: `${bbh * 6}px`,
  left: "-52px",
  top: "-10px"
};
const brainSilhouetteZoomStyle = {
  width: "856px",
  left: "-315px",
  top: "-20px"
};
// There is a set of data for each of the five silhouettes
export const silhouetteOrganData: Record<string, ISilhouetteOrganData[]> = {
  "heart": [
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: heartButtonStartStyle,
      buttonZoomStyle: heartButtonZoomStyle,
      silhouetteZoomStyle: heartSilhouetteZoomStyle
    }
  ],
  "nose": [
    {
      image: noseImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle
    },
    {
      image: noseImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle
    },
    {
      image: noseImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle
    },
    {
      image: noseImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle
    },
    {
      image: noseImage,
      buttonStartStyle: noseButtonStartStyle,
      buttonZoomStyle: noseButtonZoomStyle,
      silhouetteZoomStyle: noseSilhouetteZoomStyle
    }
  ],
  "brain": [
    {
      image: heartImage, // The brain uses a special image format
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    },
    {
      image: heartImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    }
  ]
};

// Used for brain gifs, which are different than other organ closeups
export const brainStartStyle = {
  width: "62px",
  left: 84,
  top: 0
};
export const brainEndStyle = {
  width: "220px",
  left: -4,
  top: -5
};
