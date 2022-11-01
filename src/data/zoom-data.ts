
// Transition times
export const initialFadeIn = .5;
export const firstPause = .5;
export const zoomSwipe = .75;
export const videoFadeIn = .5;
export const secondPause = .75;
export const zoomFadeOut = .5;

interface PartialZoomInfo {
  target1X: number;
  target1Y: number;
  target2X: number;
  target2Y: number;
}
export interface ZoomInfo extends PartialZoomInfo {
  boxX: number;
  boxY: number;
  boxWidth: number;
  boxHeight: number;
  start1X: number;
  start1Y: number;
  start2X: number;
  start2Y: number;
}

// Basic silhouette info
const aniTissueX1 = 12;
const aniTissueX2 = 460;
const aniTissueY = 266;
const basicSilhouetteInfo: PartialZoomInfo = {
  target1X: aniTissueX1,
  target1Y: aniTissueY,
  target2X: aniTissueX2,
  target2Y: aniTissueY
};
const makeSilhouetteInfo = (boxX: number, boxY: number, boxWidth: number, boxHeight: number) => (
  {
    ...basicSilhouetteInfo,
    boxX,
    boxY,
    boxWidth,
    boxHeight,
    start1X: boxX + 2,
    start1Y: boxY,
    start2X: boxX + boxWidth,
    start2Y: boxY
  }
);

// Heart silhouette data
const hsbx = 87;
const hsby = 147;
const hsbw = 39;
const hsbh = 24;
const heartSilhouetteInfo = makeSilhouetteInfo(hsbx, hsby, hsbw, hsbh);

// Nose silhouette data
const nsbx = 46;
const nsby = 93;
const nsbw = 150;
const nsbh = 93;
const noseSilhouetteInfo = makeSilhouetteInfo(nsbx, nsby, nsbw, nsbh);

// Brain silhouette data
const bsbx1 = 54;
const bsby1 = 128;
const bsbw = 15;
const bsbh = 7;
const brainSilhouetteInfo1 = makeSilhouetteInfo(bsbx1, bsby1, bsbw, bsbh);
const bsbx2 = 102;
const bsby2 = 158;
const brainSilhouetteInfo2 = makeSilhouetteInfo(bsbx2, bsby2, bsbw, bsbh);
export const silhouetteZoomData: Record<string, ZoomInfo[][]> = {
  "heart": [
    [
      heartSilhouetteInfo,
      heartSilhouetteInfo
    ],
    [
      heartSilhouetteInfo,
      heartSilhouetteInfo
    ]
  ],
  "nose": [
    [
      noseSilhouetteInfo,
      noseSilhouetteInfo
    ],
    [
      noseSilhouetteInfo,
      noseSilhouetteInfo
    ]
  ],
  "brain": [
    [
      brainSilhouetteInfo1,
      brainSilhouetteInfo1
    ],
    [
      brainSilhouetteInfo2,
      brainSilhouetteInfo2
    ]
  ]
};

// Basic animation cell info
const aniCellX = 486;
const aniCellY1 = 269;
const aniCellY2 = 554;
const basicCellAnimationInfo: PartialZoomInfo = {
  target1X: aniCellX,
  target1Y: aniCellY1,
  target2X: aniCellX,
  target2Y: aniCellY2
};
const makeCellInfo = (basicInfo: PartialZoomInfo, boxX: number, boxY: number, boxWidth: number,
  boxHeight: number) => (
  {
    ...basicInfo,
    boxX,
    boxY,
    boxWidth,
    boxHeight,
    start1X: boxX + 2,
    start1Y: boxY,
    start2X: boxX + 2,
    start2Y: boxY + boxHeight + 3
  }
);

// Heart cell animation info
const habx = 31;
const haby = 451;
const habw = 41;
const habh = 25;
const heartCellAnimationInfo = makeCellInfo(basicCellAnimationInfo, habx, haby, habw, habh);

// Nose cell animation info
const nabx = 242;
const naby = 407;
const nabw = 41;
const nabh = 25;
const noseCellAnimationInfo = makeCellInfo(basicCellAnimationInfo, nabx, naby, nabw, nabh);

// Brain cell animation info
const babx = 215;
const baby = 436;
const babw = 41;
const babh = 25;
const brainCellAnimationInfo = makeCellInfo(basicCellAnimationInfo, babx, baby, babw, babh);

// Simulation zooms
const yDiff = -164;
const basicCellSimunlationInfo = {
  ...basicCellAnimationInfo,
  target1Y: basicCellAnimationInfo.target1Y + yDiff - 2,
  target2Y: basicCellAnimationInfo.target2Y + yDiff + 1
};
const heartCellSimulationInfo = makeCellInfo(basicCellSimunlationInfo, habx, haby + yDiff, habw, habh);
const noseCellSimulationInfo = makeCellInfo(basicCellSimunlationInfo, nabx, naby + yDiff, nabw, nabh);
const brainCellSimulationInfo = makeCellInfo(basicCellSimunlationInfo, babx, baby + yDiff, babw, babh);

export const cellZoomData: Record<string, Record<string, ZoomInfo[][][]>> = {
  "animation": {
    "heart": [
      [
        [
          heartCellAnimationInfo,
          heartCellAnimationInfo
        ],
        [
          heartCellAnimationInfo,
          heartCellAnimationInfo
        ]
      ],
      [
        [
          heartCellAnimationInfo,
          heartCellAnimationInfo
        ],
        [
          heartCellAnimationInfo,
          heartCellAnimationInfo
        ]
      ]
    ],
    "nose": [
      [
        [
          noseCellAnimationInfo,
          noseCellAnimationInfo
        ],
        [
          noseCellAnimationInfo,
          noseCellAnimationInfo
        ]
      ],
      [
        [
          noseCellAnimationInfo,
          noseCellAnimationInfo
        ],
        [
          noseCellAnimationInfo,
          noseCellAnimationInfo
        ]
      ]
    ],
    "brain": [
      [
        [
          brainCellAnimationInfo,
          brainCellAnimationInfo
        ],
        [
          brainCellAnimationInfo,
          brainCellAnimationInfo
        ]
      ],
      [
        [
          brainCellAnimationInfo,
          brainCellAnimationInfo
        ],
        [
          brainCellAnimationInfo,
          brainCellAnimationInfo
        ]
      ]
    ]
  },
  "simulation": {
    "heart": [
      [
        [
          heartCellSimulationInfo,
          heartCellSimulationInfo
        ],
        [
          heartCellSimulationInfo,
          heartCellSimulationInfo
        ]
      ],
      [
        [
          heartCellSimulationInfo,
          heartCellSimulationInfo
        ],
        [
          heartCellSimulationInfo,
          heartCellSimulationInfo
        ]
      ]
    ],
    "nose": [
      [
        [
          noseCellSimulationInfo,
          noseCellSimulationInfo
        ],
        [
          noseCellSimulationInfo,
          noseCellSimulationInfo
        ]
      ],
      [
        [
          noseCellSimulationInfo,
          noseCellSimulationInfo
        ],
        [
          noseCellSimulationInfo,
          noseCellSimulationInfo
        ]
      ]
    ],
    "brain": [
      [
        [
          brainCellSimulationInfo,
          brainCellSimulationInfo
        ],
        [
          brainCellSimulationInfo,
          brainCellSimulationInfo
        ]
      ],
      [
        [
          brainCellSimulationInfo,
          brainCellSimulationInfo
        ],
        [
          brainCellSimulationInfo,
          brainCellSimulationInfo
        ]
      ]
    ]
  }
};
