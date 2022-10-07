
interface ZoomInfo {
  boxX: number;
  boxY: number;
  boxWidth: number;
  boxHeight: number;
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
  target1X: 0,
  target1Y: 20,
  target2X: 20,
  target2Y: 20
};
const heartSilhouetteInfo: ZoomInfo = {
  ...basicZoomInfo,
  boxX: 84,
  boxY: 140,
  boxWidth: 41,
  boxHeight: 24
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
