import BloodVesselMP4 from "./tissue/heart/BloodVessel.mp4";
import BloodCellCase1MP4 from "./cell/heart/BloodCellCase1.mp4";
import BloodCellCase2MP4 from "./cell/heart/BloodCellCase2.mp4";
import BloodCellCase3MP4 from "./cell/heart/BloodCellCase3.mp4";

import NeuronsCase3 from "./tissue/brain/NeuronsCase3.mp4";
import SynapseCase1 from "./cell/brain/SynapseCase1Faster.mp4";
import SynapseCase2 from "./cell/brain/SynapseCase2.mp4";
import SynapseCase3 from "./cell/brain/SynapseCase3.mp4";
import SynapseCase4 from "./cell/brain/SynapseCase4.mp4";

import NoseCellCase1 from "./cell/nose/NoseCellCase1.mp4";
import NoseCellCase2 from "./cell/nose/NoseCellCase2.mp4";
import NoseCellCase3 from "./cell/nose/NoseCellCase3.mp4";
import NoseCellCase4 from "./cell/nose/NoseCellCase4.mp4";

export const videos: any = {
  "tissue": {
    "heart": BloodVesselMP4,
    "nose": BloodVesselMP4,
    "brain": NeuronsCase3
  },
  "cell": {
    "heart": {
      0: BloodCellCase1MP4,
      .333: BloodCellCase2MP4,
      .667: BloodCellCase3MP4,
      1: BloodCellCase3MP4
    },
    "nose": {
      0: NoseCellCase1,
      .333: NoseCellCase2,
      .667: NoseCellCase3,
      1: NoseCellCase4
    },
    "brain": {
      0: SynapseCase1,
      .333: SynapseCase2,
      .667: SynapseCase3,
      1: SynapseCase4
    }
  }
};
