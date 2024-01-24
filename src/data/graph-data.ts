import { Organs } from "../utils/app-constants";

type Pair = [number, number];

interface dataItem {
  organ: Organs;
  setting1: boolean;
  setting2: boolean;
  start: Pair;
  mid: Pair;
  bezier1: Pair;
  bezier2: Pair;
  end: Pair;
}

const data: dataItem[] = [
  {
    // Attention network, low stress
    organ: Organs.brain,
    setting1: false,
    setting2: false,
    start: [0, 40],
    mid: [138, 68],
    bezier1: [114, 44],
    bezier2: [158, 93],
    end: [275, 94]
  },

  {
    // Attention network, high stress
    organ: Organs.brain,
    setting1: false,
    setting2: true,
    start: [0, 89],
    mid: [138, 52],
    bezier1: [206, 90],
    bezier2: [39, 29],
    end: [275, 43]
  },

  {
    // Fear network, low stress
    organ: Organs.brain,
    setting1: true,
    setting2: false,
    start: [0, 69],
    mid: [138, 32],
    bezier1: [206, 70],
    bezier2: [39, 9],
    end: [275, 23]
  },

  {
    // Fear network, high stress
    organ: Organs.brain,
    setting1: true,
    setting2: true,
    start: [0, 20],
    mid: [138, 48],
    bezier1: [114, 23],
    bezier2: [158, 73],
    end: [275, 74]
  },

  {
    // Low Cortisol, Ignore
    organ: Organs.heart,
    setting1: false,
    setting2: false,
    start: [0, 14],
    mid: [138, 26],
    bezier1: [108, 23],
    bezier2: [254, 25],
    end: [275, 90]
  },
  
  {
    // Low Cortisol, Respond
    organ: Organs.heart,
    setting1: false,
    setting2: true,
    start: [0, 14],
    mid: [138, 16],
    bezier1: [87, 5],
    bezier2: [183, 20],
    end: [275, 35]
  },
  {
    // High Cortisol, Ignore
    organ: Organs.heart,
    setting1: true,
    setting2: false,
    start: [0, 14],
    mid: [138, 34],
    bezier1: [108, 23],
    bezier2: [221, 40],
    end: [275, 109]
  },
  {
    // High Cortisol, Respond
    organ: Organs.heart,
    setting1: true,
    setting2: true,
    start: [0, 14],
    mid: [138, 19],
    bezier1: [108, 6],
    bezier2: [221, 30],
    end: [275, 50]
  },
  {
    // Low Cortisol, Ignore
    organ: Organs.nose,
    setting1: false,
    setting2: false,
    start: [0, 9],
    mid: [138, 75],
    bezier1: [70, 62],
    bezier2: [185, 134],
    end: [275, 0]
  },
  {
    // Low Cortisol, Respond
    organ: Organs.nose,
    setting1: false,
    setting2: true,
    start: [0, 9],
    mid: [138, 24],
    bezier1: [87, 5],
    bezier2: [120, 50],
    end: [275, 0]
  },
  {
    // High Cortisol, Ignore
    organ: Organs.nose,
    setting1: true,
    setting2: false,
    start: [0, 9],
    mid: [138, 103],
    bezier1: [104, 58],
    bezier2: [37, 134],
    end: [275, 92]
  },
  {
    // High Cortisol, Respond
    organ: Organs.nose,
    setting1: true,
    setting2: true,
    start: [0, 9],
    mid: [138, 59],
    bezier1: [95, 76],
    bezier2: [154, 80],
    end: [275, 0]
  }
];

export function getData(organ: string, setting1: boolean, setting2: boolean) {
  return data.find((d) => d.organ===organ && d.setting1===setting1 && d.setting2===setting2);
}

export function getSVGPath(organ: string, setting1: boolean, setting2: boolean) {
  const d = getData(organ, setting1, setting2);
  if (d) {
    return `M ${formatPair(d.start)} C ${formatPair(d.bezier1)} ${formatPair(d.bezier2)} ${formatPair(d.end)}`;
  }
}

function formatPair(pair: Pair) {
  return `${pair[0]},${pair[1]}`;
}

