
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
const aniTissueX1 = 12;
const aniTissueX2 = 460;
const aniTissueY = 266;
const basicSilhouetteInfo = {
  target1X: aniTissueX1,
  target1Y: aniTissueY,
  target2X: aniTissueX2,
  target2Y: aniTissueY
};
const hsbx = 84;
const hsby = 140;
const hsbw = 41;
const hsbh = 24;
const heartSilhouetteInfo: ZoomInfo = {
  ...basicSilhouetteInfo,
  boxX: hsbx,
  boxY: hsby,
  boxWidth: hsbw,
  boxHeight: hsbh,
  start1X: hsbx + 2,
  start1Y: hsby,
  start2X: hsbx + hsbw,
  start2Y: hsby
};
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
      basicZoomInfo,
      basicZoomInfo
    ],
    [
      basicZoomInfo,
      basicZoomInfo
    ]
  ],
  "brain": [
    [
      basicZoomInfo,
      basicZoomInfo
    ],
    [
      basicZoomInfo,
      basicZoomInfo
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
