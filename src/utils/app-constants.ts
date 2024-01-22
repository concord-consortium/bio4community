export enum Modes {
  animation = "animation",
  simulation = "simulation"
}

export function modeFromString(mode: string | null) {
  if (!mode) return Modes.animation;
  const m = { animation: Modes.animation, simulation: Modes.simulation }[mode];
  return m ?? Modes.animation;
}

export enum Organs {
  heart = "heart",
  brain = "brain",
  nose = "nose"
}

export function organFromString(organ: string | null) {
  if (!organ) return Organs.heart;
  const o = { heart: Organs.heart, brain: Organs.brain, nose: Organs.nose }[organ];
  return o ?? Organs.heart;
}
