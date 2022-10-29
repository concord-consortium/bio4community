import profile1Image from "../assets/images/silhouettes/profile-1.png";
import profile2Image from "../assets/images/silhouettes/profile-3.png";
import profile3Image from "../assets/images/silhouettes/profile-4.png";
import profile4Image from "../assets/images/silhouettes/profile-5.png";
import heartImage from "../assets/images/silhouettes/heart-close-up.png";
import noseImage from "../assets/images/silhouettes/nasal-passages-close-up.png";
import brainImage from "../assets/images/silhouettes/brain-close-up.png";

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
  width: "1019px",
  left: "-420px",
  top: "-475px"
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
  width: "1162px",
  left: "-352px",
  top: "-190px"
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
  width: "856px",
  left: "-315px",
  top: "-20px"
};
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
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    },
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    },
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    },
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    },
    {
      image: brainImage,
      buttonStartStyle: brainButtonStartStyle,
      buttonZoomStyle: brainButtonZoomStyle,
      silhouetteZoomStyle: brainSilhouetteZoomStyle
    }
  ]
};
