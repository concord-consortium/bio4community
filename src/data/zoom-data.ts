
// Transition times
export const initialFadeIn = .5;
export const firstPause = .5;
export const zoomSwipe = .75;
export const videoFadeIn = .5;
export const secondPause = .75;
export const zoomFadeOut = .5;

interface ZoomInfo {
  boxX: number;
  boxY: number;
  boxWidth: number;
  boxHeight: number;
  start1X: number;
  start1Y: number;
  start2X: number;
  start2Y: number;
  target1X: number;
  target1Y: number;
  target2X: number;
  target2Y: number;
}
const basicZoomInfo: ZoomInfo = {
  boxX: 10,
  boxY: 10,
  boxWidth: 10,
  boxHeight: 10,
  start1X: 10,
  start1Y: 10,
  start2X: 20,
  start2Y: 10,
  target1X: 0,
  target1Y: 20,
  target2X: 20,
  target2Y: 20
};

// Basic silhouette info
const aniTissueX1 = 12;
const aniTissueX2 = 460;
const aniTissueY = 266;
const basicSilhouetteInfo = {
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
const hsbx = 84;
const hsby = 140;
const hsbw = 41;
const hsbh = 24;
const heartSilhouetteInfo = makeSilhouetteInfo(hsbx, hsby, hsbw, hsbh);

// Nose silhouette data
const nsbx = 72;
const nsby = 112;
const nsbw = 48;
const nsbh = 30;
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
export const zoomData: Record<string, Record<string, ZoomInfo[][][]>> = {
  "animation": {
    "heart": [
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ],
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ]
    ],
    "nose": [
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ],
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ]
    ],
    "brain": [
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ],
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ]
    ]
  },
  "simulation": {
    "heart": [
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ],
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ]
    ],
    "nose": [
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ],
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ]
    ],
    "brain": [
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ],
      [
        [
          basicZoomInfo,
          basicZoomInfo
        ],
        [
          basicZoomInfo,
          basicZoomInfo
        ]
      ]
    ]
  }
};
