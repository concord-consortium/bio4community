import { Modes, Organs } from "../utils/app-constants";

import HeartAnimationCase1 from "../assets/videos/tissue/heart/BloodVesselAnimation_Case1.mp4";
import HeartAnimationCase2 from "../assets/videos/tissue/heart/BloodVesselAnimation_Case2.mp4";
import HeartAnimationCase3 from "../assets/videos/tissue/heart/BloodVesselAnimation_Case3.mp4";
import HeartAnimationCase4 from "../assets/videos/tissue/heart/BloodVesselAnimation_Case4.mp4";
import BloodVesselCase1MP4 from "../assets/videos/tissue/heart/BloodVesselCase1.mp4";
import BloodVesselCase2MP4 from "../assets/videos/tissue/heart/BloodVesselCase2.mp4";
import BloodVesselCase3MP4 from "../assets/videos/tissue/heart/BloodVesselCase3.mp4";
import BloodVesselCase4MP4 from "../assets/videos/tissue/heart/BloodVesselCase4.mp4";
import BloodCell11 from "../assets/videos/cell/heart/BloodCellCase1Time1.mp4";
import BloodCell14 from "../assets/videos/cell/heart/BloodCellCase1Time4.mp4";
import BloodCell21 from "../assets/videos/cell/heart/BloodCell_Case2Time1.mp4";
import BloodCell22 from "../assets/videos/cell/heart/BloodCell_Case2Time2.mp4";
import BloodCell24 from "../assets/videos/cell/heart/BloodCell_Case2Time4.mp4";
import BloodCell33 from "../assets/videos/cell/heart/BloodCell_Case3Time3.mp4";
import BloodCell34 from "../assets/videos/cell/heart/BloodCell_Case3Time4.mp4";
import BloodCell43 from "../assets/videos/cell/heart/BloodCell_Case4Time3.mp4";
import BloodCell44 from "../assets/videos/cell/heart/BloodCell_Case4Time4.mp4";

import BrainTissue1 from "../assets/videos/tissue/brain/NeuronsCase1.mp4";
import BrainTissue2 from "../assets/videos/tissue/brain/NeuronsCase2.mp4";
import BrainTissue3 from "../assets/videos/tissue/brain/NeuronsCase3.mp4";
import BrainTissue4 from "../assets/videos/tissue/brain/NeuronsCase4.mp4";
import BrainCell11 from "../assets/videos/cell/brain/Synapse-Case1Time1.mp4";
import BrainCell12 from "../assets/videos/cell/brain/Synapse-Case1Time2.mp4";
import BrainCell13 from "../assets/videos/cell/brain/Synapse-Case1Time3.mp4";
import BrainCell14 from "../assets/videos/cell/brain/Synapse-Case1Time4.mp4";
import BrainCell21 from "../assets/videos/cell/brain/Synapse-Case2Time1.mp4";
import BrainCell22 from "../assets/videos/cell/brain/Synapse-Case2Time2.mp4";
import BrainCell23 from "../assets/videos/cell/brain/Synapse-Case2Time3.mp4";
import BrainCell24 from "../assets/videos/cell/brain/Synapse-Case2Time4.mp4";
import BrainCell31 from "../assets/videos/cell/brain/Synapse-Case3Time1.mp4";
import BrainCell32 from "../assets/videos/cell/brain/Synapse-Case3Time2.mp4";
import BrainCell33 from "../assets/videos/cell/brain/Synapse-Case3Time3.mp4";
import BrainCell34 from "../assets/videos/cell/brain/Synapse-Case3Time4.mp4";
import BrainCell41 from "../assets/videos/cell/brain/Synapse-Case4Time1.mp4";
import BrainCell42 from "../assets/videos/cell/brain/Synapse-Case4Time2.mp4";
import BrainCell43 from "../assets/videos/cell/brain/Synapse-Case4Time3.mp4";
import BrainCell44 from "../assets/videos/cell/brain/Synapse-Case4Time4.mp4";

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
import NoseCellCase44 from "../assets/videos/cell/nose/NoseCellCase4Time4.mp4";

const HeartCellCase1 = {
  0: BloodCell11,
  .333: BloodCell11,
  .667: BloodCell11,
  1: BloodCell14
};
const HeartCellCase2 = {
  0: BloodCell21,
  .333: BloodCell22,
  .667: BloodCell22,
  1: BloodCell24
};
const HeartCellCase3 = {
  0: BloodCell11,
  .333: BloodCell14,
  .667: BloodCell33,
  1: BloodCell34
};
const HeartCellCase4 = {
  0: BloodCell21,
  .333: BloodCell22,
  .667: BloodCell43,
  1: BloodCell44
};

const BrainCellCase1 = {
  0: BrainCell11,
  .333: BrainCell12,
  .667: BrainCell13,
  1: BrainCell14
};
const BrainCellCase2 = {
  0: BrainCell21,
  .333: BrainCell22,
  .667: BrainCell23,
  1: BrainCell24
};
const BrainCellCase3 = {
  0: BrainCell31,
  .333: BrainCell32,
  .667: BrainCell33,
  1: BrainCell34
};
const BrainCellCase4 = {
  0: BrainCell41,
  .333: BrainCell42,
  .667: BrainCell43,
  1: BrainCell44
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
  .667: NoseCellCase23,
  1: NoseCellCase44
};

// Videos for sims
// [tissue | cell][organ][control1][control2][control3][time (cell only)]
export const simVideos: Record<string, Record<string, Record<number, any>[][][]>> = {
  "tissue": {
    [Organs.heart]: [
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
    [Organs.nose]: [
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
    [Organs.brain]: [
      [
        [
          BrainTissue2,
          BrainTissue2
        ],
        [
          BrainTissue1,
          BrainTissue1
        ]
      ],
      [
        [
          BrainTissue4,
          BrainTissue4
        ],
        [
          BrainTissue3,
          BrainTissue3
        ]
      ]
    ]
  },
  "cell": {
    [Organs.heart]: [
      [
        [
          HeartCellCase2,
          HeartCellCase4
        ],
        [
          HeartCellCase1,
          HeartCellCase3
        ]
      ],
      [
        [
          HeartCellCase2,
          HeartCellCase4
        ],
        [
          HeartCellCase1,
          HeartCellCase3
        ]
      ]
    ],
    [Organs.nose]: [
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
    [Organs.brain]: [
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
          BrainCellCase4,
          BrainCellCase4
        ],
        [
          BrainCellCase3,
          BrainCellCase3
        ]
      ]
    ]
  }
};

// Videos for animations
// [tissue | cell][organ][control1][control2][time (cell only)]
export const aniVideos: Record<string, Record<string, any[][]>> = {
  "tissue": {
    [Organs.heart]: [
      [
        HeartAnimationCase1,
        HeartAnimationCase2
      ],
      [
        HeartAnimationCase3,
        HeartAnimationCase4
      ]
    ],
    [Organs.nose]: [
      [
        NoseCase1,
        NoseCase2
      ],
      [
        NoseCase3,
        NoseCase4
      ]
    ],
    [Organs.brain]: [
      [
        BrainTissue2,
        BrainTissue1
      ],
      [
        BrainTissue4,
        BrainTissue3
      ]
    ]
  },
  "cell": {
    [Organs.heart]: [
      [
        HeartCellCase1,
        HeartCellCase2
      ],
      [
        HeartCellCase3,
        HeartCellCase4
      ]
    ],
    [Organs.nose]: [
      [
        NoseCellCase1,
        NoseCellCase2
      ],
      [
        NoseCellCase3,
        NoseCellCase4
      ],
    ],
    [Organs.brain]: [
      [
        BrainCellCase2,
        BrainCellCase1
      ],
      [
        BrainCellCase4,
        BrainCellCase3
      ]
    ]
  }
};

const heartTimeline = { 0: "20 years", .333: "30 years", .667: "40 years", 1: "50 years" };
const noseTimeline = { 0: "0 days", .333: "8 days", .667: "16 days", 1: "24 days" };
const brainTimeline = { 0: "0 weeks", .333: "4 weeks", .667: "8 weeks", 1: "12 weeks" };
const cellTimeline = { 0: " ", 1: " " };
export const timelines: Record<string, Record<string, Record<string, Record<number, string>[][][]>>> = {
  [Modes.simulation]: {
    "tissue": {
      [Organs.heart]: [
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
      [Organs.nose]: [
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
      [Organs.brain]: [
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
      [Organs.heart]: [
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
      [Organs.nose]: [
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
      [Organs.brain]: [
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
  [Modes.animation]: {
    "tissue": {
      [Organs.heart]: [
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
      [Organs.nose]: [
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
      [Organs.brain]: [
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
      [Organs.heart]: [
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
      [Organs.nose]: [
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
      [Organs.brain]: [
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
