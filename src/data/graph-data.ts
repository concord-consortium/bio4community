
export interface Coord {
  x: number;
  y: number;
}
export interface Range {
  min: number;
  max: number;
}

// Data to be plotted in a simulation
const leftHeartCase1 = [
  {x: 20, y: 1}, {x: 25, y: 1.5}, {x: 30, y: 2}, {x: 35, y: 2.5}, {x: 40, y: 3}, {x: 45, y: 4}, {x: 50, y: 10}
];
const leftHeartCase2 = [
  {x: 20, y: 1}, {x: 25, y: 3}, {x: 30, y: 5}, {x: 35, y: 7.5}, {x: 40, y: 10}, {x: 45, y: 15}, {x: 50, y: 30}
];
const leftHeartCase3 = [
  {x: 20, y: 1}, {x: 25, y: 4.5}, {x: 30, y: 8}, {x: 35, y: 11.5}, {x: 40, y: 15}, {x: 45, y: 25}, {x: 50, y: 50}
];
const leftHeartCase4 = [
  {x: 20, y: 1}, {x: 25, y: 5.5}, {x: 30, y: 10}, {x: 35, y: 17.5}, {x: 40, y: 25}, {x: 45, y: 35}, {x: 50, y: 80}
];

const rightHeartCase1 = [
  {x: 20, y: 3}, {x: 25, y: 3}, {x: 30, y: 3}, {x: 35, y: 3}, {x: 40, y: 3}, {x: 45, y: 3.5}, {x: 50, y: 4}
];
const rightHeartCase2 = [
  {x: 20, y: 3}, {x: 25, y: 3}, {x: 30, y: 3}, {x: 35, y: 3.5}, {x: 40, y: 4}, {x: 45, y: 5}, {x: 50, y: 6}
];
const rightHeartCase3 = [
  {x: 20, y: 3}, {x: 25, y: 3.5}, {x: 30, y: 4}, {x: 35, y: 4.5}, {x: 40, y: 5}, {x: 45, y: 6}, {x: 50, y: 7}
];
const rightHeartCase4 = [
  {x: 20, y: 3}, {x: 25, y: 3.5}, {x: 30, y: 4}, {x: 35, y: 5}, {x: 40, y: 6}, {x: 45, y: 7.5}, {x: 50, y: 9}
];

const leftNoseCase1 = [
  {x: 0, y: 1}, {x: 4, y: 8}, {x: 8, y: 10}, {x: 12, y: 8}, {x: 16, y: 1}, {x: 20, y: 1}, {x: 24, y: 1}
];
const leftNoseCase5 = [
  {x: 0, y: 1}, {x: 4, y: 1}, {x: 8, y: 10}, {x: 12, y: 8}, {x: 16, y: 8}, {x: 20, y: 1}, {x: 24, y: 1}
];
const leftNoseCase2 = [
  {x: 0, y: 1}, {x: 4, y: 25}, {x: 8, y: 30}, {x: 12, y: 30}, {x: 16, y: 20}, {x: 20, y: 1}, {x: 24, y: 1}
];
const leftNoseCase6 = [
  {x: 0, y: 1}, {x: 4, y: 25}, {x: 8, y: 30}, {x: 12, y: 30}, {x: 16, y: 20}, {x: 20, y: 1}, {x: 24, y: 1}
];
const leftNoseCase3 = [
  {x: 0, y: 1}, {x: 4, y: 35}, {x: 8, y: 50}, {x: 12, y: 50}, {x: 16, y: 32.5}, {x: 20, y: 1}, {x: 24, y: 1}
];
const leftNoseCase7 = [
  {x: 0, y: 1}, {x: 4, y: 35}, {x: 8, y: 50}, {x: 12, y: 50}, {x: 16, y: 32.5}, {x: 20, y: 1}, {x: 24, y: 1}
];
const leftNoseCase4 = [
  {x: 0, y: 1}, {x: 4, y: 50}, {x: 8, y: 80}, {x: 12, y: 80}, {x: 16, y: 70}, {x: 20, y: 50}, {x: 24, y: 40}
];
const leftNoseCase8 = [
  {x: 0, y: 1}, {x: 4, y: 50}, {x: 8, y: 80}, {x: 12, y: 80}, {x: 16, y: 70}, {x: 20, y: 50}, {x: 24, y: 40}
];

const rightNoseCase1 = [
  {x: 0, y: 8}, {x: 2, y: 8}, {x: 4, y: 8}, {x: 6, y: 8}, {x: 8, y: 8}, {x: 10, y: 12}, {x: 12, y: 16},
  {x: 14, y: 16}, {x: 16, y: 10}, {x: 18, y: 9}, {x: 20, y: 8}, {x: 22, y: 6}, {x: 24, y: 1}
];
const rightNoseCase2 = [
  {x: 0, y: 8}, {x: 2, y: 8}, {x: 4, y: 8}, {x: 6, y: 8}, {x: 8, y: 15}, {x: 10, y: 25}, {x: 12, y: 30},
  {x: 14, y: 30}, {x: 16, y: 25}, {x: 18, y: 20}, {x: 20, y: 15}, {x: 22, y: 8}, {x: 24, y: 1}
];
const rightNoseCase3 = [
  {x: 0, y: 8}, {x: 2, y: 8}, {x: 4, y: 8}, {x: 6, y: 8}, {x: 8, y: 20}, {x: 10, y: 35}, {x: 12, y: 45},
  {x: 14, y: 45}, {x: 16, y: 40}, {x: 18, y: 30}, {x: 20, y: 20}, {x: 22, y: 15}, {x: 24, y: 10}
];
const rightNoseCase4 = [
  {x: 0, y: 8}, {x: 2, y: 8}, {x: 4, y: 8}, {x: 6, y: 8}, {x: 8, y: 25}, {x: 10, y: 60}, {x: 12, y: 80},
  {x: 14, y: 80}, {x: 16, y: 70}, {x: 18, y: 60}, {x: 20, y: 50}, {x: 22, y: 40}, {x: 24, y: 35}
];
const rightNoseCase5 = rightNoseCase1;
const rightNoseCase6 = rightNoseCase2;
const rightNoseCase7 = rightNoseCase3;
const rightNoseCase8 = rightNoseCase4;

const leftBrainCase1 = [
  {x: 0, y: 90}, {x: 2, y: 90}, {x: 4, y: 70}, {x: 6, y: 60}, {x: 8, y: 57.5}, {x: 10, y: 55}, {x: 12, y: 52.5}
];
const leftBrainCase2 = [
  {x: 0, y: 52.5}, {x: 2, y: 55}, {x: 4, y: 57.5}, {x: 6, y: 60}, {x: 8, y: 70}, {x: 10, y: 80}, {x: 12, y: 90}
];
const leftBrainCase3 = leftBrainCase1;
const leftBrainCase4 = leftBrainCase2;

const rightBrainCase1 = [
  {x: 0, y: 100}, {x: 2, y: 90}, {x: 4, y: 70}, {x: 6, y: 60}, {x: 8, y: 50}, {x: 10, y: 0}, {x: 12, y: 0}
];
const rightBrainCase2 = [
  {x: 0, y: 0}, {x: 2, y: 0}, {x: 4, y: 40}, {x: 6, y: 60}, {x: 8, y: 70}, {x: 10, y: 90}, {x: 12, y: 100}
];
const rightBrainCase3 = rightBrainCase1;
const rightBrainCase4 = rightBrainCase2;

export const graphData: Record<string, Record<string, Coord[][][][]>> = {
  "heart": {
    "left": [
      [
        [
          leftHeartCase2,
          leftHeartCase4
        ],
        [
          leftHeartCase1,
          leftHeartCase3
        ]
      ],
      [
        [
          leftHeartCase2,
          leftHeartCase4
        ],
        [
          leftHeartCase1,
          leftHeartCase3
        ]
      ]
    ],
    "right": [
      [
        [
          rightHeartCase2,
          rightHeartCase4
        ],
        [
          rightHeartCase1,
          rightHeartCase3
        ]
      ],
      [
        [
          rightHeartCase2,
          rightHeartCase4
        ],
        [
          rightHeartCase1,
          rightHeartCase3
        ]
      ]
    ]
  },
  "nose": {
    "left": [
      [
        [
          leftNoseCase3,
          leftNoseCase4
        ],
        [
          leftNoseCase1,
          leftNoseCase2
        ]
      ],
      [
        [
          leftNoseCase7,
          leftNoseCase8
        ],
        [
          leftNoseCase5,
          leftNoseCase6
        ]
      ]
    ],
    "right": [
      [
        [
          rightNoseCase3,
          rightNoseCase4
        ],
        [
          rightNoseCase1,
          rightNoseCase2
        ]
      ],
      [
        [
          rightNoseCase7,
          rightNoseCase8
        ],
        [
          rightNoseCase5,
          rightNoseCase6
        ]
      ]
    ]
  },
  "brain": {
    "left": [
      [
        [
          leftBrainCase2,
          leftBrainCase2
        ],
        [
          leftBrainCase1,
          leftBrainCase1
        ]
      ],
      [
        [
          leftBrainCase4,
          leftBrainCase4
        ],
        [
          leftBrainCase3,
          leftBrainCase3
        ]
      ]
    ],
    "right": [
      [
        [
          rightBrainCase2,
          rightBrainCase2
        ],
        [
          rightBrainCase1,
          rightBrainCase1
        ]
      ],
      [
        [
          rightBrainCase4,
          rightBrainCase4
        ],
        [
          rightBrainCase3,
          rightBrainCase3
        ]
      ]
    ]
  }
};

const zeroHundred = {min: 0, max: 100};
const zeroHundredTen = {min: 0, max: 110};
const zeroTen = {min: 0, max: 10};
export const graphRanges: Record<string, Record<string, Range[][][]>> = {
  "heart": {
    "left": [
      [
        [
          zeroHundred,
          zeroHundred
        ],
        [
          zeroHundred,
          zeroHundred
        ]
      ],
      [
        [
          zeroHundred,
          zeroHundred
        ],
        [
          zeroHundred,
          zeroHundred
        ]
      ]
    ],
    "right": [
      [
        [
          zeroTen,
          zeroTen
        ],
        [
          zeroTen,
          zeroTen
        ]
      ],
      [
        [
          zeroTen,
          zeroTen
        ],
        [
          zeroTen,
          zeroTen
        ]
      ]
    ]
  },
  "nose": {
    "left": [
      [
        [
          zeroHundred,
          zeroHundred
        ],
        [
          zeroHundred,
          zeroHundred
        ]
      ],
      [
        [
          zeroHundred,
          zeroHundred
        ],
        [
          zeroHundred,
          zeroHundred
        ]
      ]
    ],
    "right": [
      [
        [
          zeroHundred,
          zeroHundred
        ],
        [
          zeroHundred,
          zeroHundred
        ]
      ],
      [
        [
          zeroHundred,
          zeroHundred
        ],
        [
          zeroHundred,
          zeroHundred
        ]
      ]
    ]
  },
  "brain": {
    "left": [
      [
        [
          zeroHundred,
          zeroHundred
        ],
        [
          zeroHundred,
          zeroHundred
        ]
      ],
      [
        [
          zeroHundred,
          zeroHundred
        ],
        [
          zeroHundred,
          zeroHundred
        ]
      ]
    ],
    "right": [
      [
        [
          zeroHundredTen,
          zeroHundredTen
        ],
        [
          zeroHundredTen,
          zeroHundredTen
        ]
      ],
      [
        [
          zeroHundredTen,
          zeroHundredTen
        ],
        [
          zeroHundredTen,
          zeroHundredTen
        ]
      ]
    ]
  }
};
