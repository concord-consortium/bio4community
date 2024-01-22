type Pair = [number, number];

interface dataItem {
  organ: string;
  setting1: boolean;
  setting2: boolean;
  start: Pair;
  bezier1: Pair;
  bezier2: Pair;
  end: Pair;
}

const data: dataItem[] = [
  {
    organ: "brain",
    setting1: false,
    setting2: false,
    start: [0, 89],
    bezier1: [206, 90],
    bezier2: [39, 29],
    end: [276, 43]
  },

  {
    organ: "brain",
    setting1: false,
    setting2: true,
    start: [0, 40],
    bezier1: [114, 44],
    bezier2: [158, 93],
    end: [275, 94]
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

