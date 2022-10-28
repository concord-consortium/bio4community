import HeartAnimationCase1 from "../assets/videos/tissue/heart/BloodVesselAnimation_Case1.mp4";
import BloodVesselCase1MP4 from "../assets/videos/tissue/heart/BloodVesselCase1.mp4";
import BloodVesselCase2MP4 from "../assets/videos/tissue/heart/BloodVesselCase2.mp4";
import BloodVesselCase3MP4 from "../assets/videos/tissue/heart/BloodVesselCase3.mp4";
import BloodVesselCase4MP4 from "../assets/videos/tissue/heart/BloodVesselCase4.mp4";
import BloodCellCase1MP4 from "../assets/videos/cell/heart/BloodCellCase1Time1.mp4";
import BloodCellCase2MP4 from "../assets/videos/cell/heart/BloodCellCase1Time2.mp4";
import BloodCellCase3MP4 from "../assets/videos/cell/heart/BloodCellCase1Time3.mp4";
import BloodCellCase4MP4 from "../assets/videos/cell/heart/BloodCellCase1Time4.mp4";

import NeuronsCase2 from "../assets/videos/tissue/brain/NeuronsCase2.mp4";
import NeuronsCase3 from "../assets/videos/tissue/brain/NeuronsCase3.mp4";
import SynapseCase1 from "../assets/videos/cell/brain/SynapseCase1Faster.mp4";
import SynapseCase2 from "../assets/videos/cell/brain/SynapseCase2.mp4";
import SynapseCase3 from "../assets/videos/cell/brain/SynapseCase3.mp4";
import SynapseCase4 from "../assets/videos/cell/brain/SynapseCase4.mp4";

import NoseCase1 from "../assets/videos/tissue/nose/NoseCase1.mp4";
import NoseCase2 from "../assets/videos/tissue/nose/NoseCase2.mp4";
import NoseCase3 from "../assets/videos/tissue/nose/NoseCase3.mp4";
import NoseCase4 from "../assets/videos/tissue/nose/NoseCase4.mp4";
import NoseCellCase11 from "../assets/videos/cell/nose/NoseCellCase1Time1.mp4";
import NoseCellCase12 from "../assets/videos/cell/nose/NoseCellCase1Time2.mp4";
import NoseCellCase13 from "../assets/videos/cell/nose/NoseCellCase1Time3.mp4";
import NoseCellCase14 from "../assets/videos/cell/nose/NoseCellCase1Time4.mp4";
import NoseCellCase21 from "../assets/videos/cell/nose/NoseCellCase2Time1.mp4";
import NoseCellCase22 from "../assets/videos/cell/nose/NoseCellCase2Time2.mp4";
import NoseCellCase23 from "../assets/videos/cell/nose/NoseCellCase2Time3.mp4";

const HeartCellCase1 = {
  0: BloodCellCase1MP4,
  .333: BloodCellCase1MP4,
  .667: BloodCellCase1MP4,
  1: BloodCellCase2MP4
};
const HeartCellCase2 = {
  0: BloodCellCase1MP4,
  .333: BloodCellCase1MP4,
  .667: BloodCellCase2MP4,
  1: BloodCellCase3MP4
};
const HeartCellCase3 = {
  0: BloodCellCase1MP4,
  .333: BloodCellCase2MP4,
  .667: BloodCellCase3MP4,
  1: BloodCellCase4MP4
};

const BrainCellCase1 = {
  0: SynapseCase1,
  .333: SynapseCase2,
  .667: SynapseCase3,
  1: SynapseCase4
};
const BrainCellCase2 = {
  0: SynapseCase4,
  .333: SynapseCase3,
  .667: SynapseCase2,
  1: SynapseCase1
};

const NoseCellCase1 = {
  0: NoseCellCase11,
  .333: NoseCellCase12,
  .667: NoseCellCase13,
  1: NoseCellCase14
};
const NoseCellCase2 = {
  0: NoseCellCase21,
  .333: NoseCellCase22,
  .667: NoseCellCase23,
  1: NoseCellCase14
};
const NoseCellCase3 = {
  0: NoseCellCase11,
  .333: NoseCellCase22,
  .667: NoseCellCase22,
  1: NoseCellCase23
};
const NoseCellCase4 = {
  0: NoseCellCase21,
  .333: NoseCellCase22,
  .667: NoseCellCase22,
  1: NoseCellCase23
};

// Videos for sims
// [tissue | cell][organ][control1][control2][control3][time (cell only)]
export const simVideos: Record<string, Record<string, Record<number, any>[][][]>> = {
  "tissue": {
    "heart": [
      [
        [
          BloodVesselCase2MP4,
          BloodVesselCase4MP4
        ],
        [
          BloodVesselCase1MP4,
          BloodVesselCase3MP4
        ]
      ],
      [
        [
          BloodVesselCase2MP4,
          BloodVesselCase4MP4
        ],
        [
          BloodVesselCase1MP4,
          BloodVesselCase3MP4
        ]
      ]
    ],
    "nose": [
      [
        [
          NoseCase3,
          NoseCase4
        ],
        [
          NoseCase1,
          NoseCase2
        ]
      ],
      [
        [
          NoseCase3,
          NoseCase4
        ],
        [
          NoseCase1,
          NoseCase2
        ]
      ]
    ],
    "brain": [
      [
        [
          NeuronsCase2,
          NeuronsCase2
        ],
        [
          NeuronsCase3,
          NeuronsCase3
        ]
      ],
      [
        [
          NeuronsCase3,
          NeuronsCase3
        ],
        [
          NeuronsCase2,
          NeuronsCase2
        ]
      ]
    ]
  },
  "cell": {
    "heart": [
      [
        [
          HeartCellCase2,
          HeartCellCase3
        ],
        [
          HeartCellCase1,
          HeartCellCase2
        ]
      ],
      [
        [
          HeartCellCase2,
          HeartCellCase3
        ],
        [
          HeartCellCase1,
          HeartCellCase2
        ]
      ]
    ],
    "nose": [
      [
        [
          NoseCellCase3,
          NoseCellCase4
        ],
        [
          NoseCellCase1,
          NoseCellCase2
        ]
      ],
      [
        [
          NoseCellCase3,
          NoseCellCase4
        ],
        [
          NoseCellCase1,
          NoseCellCase2
        ]
      ]
    ],
    "brain": [
      [
        [
          BrainCellCase2,
          BrainCellCase2
        ],
        [
          BrainCellCase1,
          BrainCellCase1
        ]
      ],
      [
        [
          BrainCellCase1,
          BrainCellCase1
        ],
        [
          BrainCellCase2,
          BrainCellCase2
        ]
      ]
    ]
  }
};

// Videos for animations
// [tissue | cell][organ][control1][control2][time (cell only)]
export const aniVideos: Record<string, Record<string, any[][]>> = {
  "tissue": {
    "heart": [
      [
        HeartAnimationCase1,
        BloodVesselCase2MP4
      ],
      [
        BloodVesselCase3MP4,
        BloodVesselCase4MP4
      ]
    ],
    "nose": [
      [
        NoseCase1,
        NoseCase2
      ],
      [
        NoseCase3,
        NoseCase4
      ]
    ],
    "brain": [
      [
        NeuronsCase2,
        NeuronsCase3
      ],
      [
        NeuronsCase3,
        NeuronsCase2
      ]
    ]
  },
  "cell": {
    "heart": [
      [
        HeartCellCase1,
        HeartCellCase2
      ],
      [
        HeartCellCase2,
        HeartCellCase3
      ]
    ],
    "nose": [
      [
        NoseCellCase1,
        NoseCellCase2
      ],
      [
        NoseCellCase3,
        NoseCellCase4
      ],
    ],
    "brain": [
      [
        BrainCellCase2,
        BrainCellCase1
      ],
      [
        BrainCellCase1,
        BrainCellCase2
      ]
    ]
  }
};

const heartTimeline = { 0: "20 years", .333: "30 years", .667: "40 years", 1: "50 years" };
const noseTimeline = { 0: "0 days", .333: "8 days", .667: "16 days", 1: "24 days" };
const brainTimeline = { 0: "0 weeks", .333: "4 weeks", .667: "8 weeks", 1: "12 weeks" };
const cellTimeline = { 0: " ", 1: " " };
export const timelines: Record<string, Record<string, Record<string, Record<number, string>[][][]>>> = {
  "simulation": {
    "tissue": {
      "heart": [
        [
          [
            heartTimeline,
            heartTimeline
          ],
          [
            heartTimeline,
            heartTimeline
          ]
        ],
        [
          [
            heartTimeline,
            heartTimeline
          ],
          [
            heartTimeline,
            heartTimeline
          ]
        ]
      ],
      "nose": [
        [
          [
            noseTimeline,
            noseTimeline
          ],
          [
            noseTimeline,
            noseTimeline
          ]
        ],
        [
          [
            noseTimeline,
            noseTimeline
          ],
          [
            noseTimeline,
            noseTimeline
          ]
        ]
      ],
      "brain": [
        [
          [
            brainTimeline,
            brainTimeline
          ],
          [
            brainTimeline,
            brainTimeline
          ]
        ],
        [
          [
            brainTimeline,
            brainTimeline
          ],
          [
            brainTimeline,
            brainTimeline
          ]
        ]
      ]
    },
    "cell": {
      "heart": [
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ],
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ]
      ],
      "nose": [
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ],
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ]
      ],
      "brain": [
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ],
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ]
      ]
    }
  },
  "animation": {
    "tissue": {
      "heart": [
        [
          [
            heartTimeline,
            heartTimeline
          ],
          [
            heartTimeline,
            heartTimeline
          ]
        ],
        [
          [
            heartTimeline,
            heartTimeline
          ],
          [
            heartTimeline,
            heartTimeline
          ]
        ]
      ],
      "nose": [
        [
          [
            noseTimeline,
            noseTimeline
          ],
          [
            noseTimeline,
            noseTimeline
          ]
        ],
        [
          [
            noseTimeline,
            noseTimeline
          ],
          [
            noseTimeline,
            noseTimeline
          ]
        ]
      ],
      "brain": [
        [
          [
            brainTimeline,
            brainTimeline
          ],
          [
            brainTimeline,
            brainTimeline
          ]
        ],
        [
          [
            brainTimeline,
            brainTimeline
          ],
          [
            brainTimeline,
            brainTimeline
          ]
        ]
      ]
    },
    "cell": {
      "heart": [
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ],
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ]
      ],
      "nose": [
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ],
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ]
      ],
      "brain": [
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ],
        [
          [
            cellTimeline,
            cellTimeline
          ],
          [
            cellTimeline,
            cellTimeline
          ]
        ]
      ]
    }
  }
};
