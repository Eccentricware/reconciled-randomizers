import { ChargeTypes, ElementTypes, Spell } from "../models/spells";

export const spells: Record<string, Spell> = {
  'cut': {
    name: 'Cut',
    element: null,
    rank: 1,
    secondaryElement: null,
    baseDamage: 0,
    castDuration: 3,
    energyCost: 0,
    manaCost: 0,
    cooldown: 300,
    chargeTypeRequired: null
  },
  'paste': {
    name: 'Paste',
    element: null,
    rank: 1,
    secondaryElement: null,
    baseDamage: 0,
    castDuration: 1,
    energyCost: 0,
    manaCost: 5,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'energonCube': {
    name: 'Energon Cube',
    element: ElementTypes.misc,
    rank: 1,
    secondaryElement: null,
    baseDamage: 0,
    castDuration: 3,
    energyCost: 0,
    manaCost: 25,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'darkRitual': {
    name: 'Dark Ritual',
    element: ElementTypes.misc,
    rank: 1,
    secondaryElement: null,
    baseDamage: 0,
    castDuration: 3,
    energyCost: 0,
    manaCost: 10,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'exchange': {
    name: 'Exchange',
    element: ElementTypes.misc,
    rank: 1,
    secondaryElement: null,
    baseDamage: 0,
    castDuration: 1,
    energyCost: 0,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire1': {
    name: 'Fire 1',
    element: ElementTypes.fire,
    rank: 1,
    secondaryElement: null,
    baseDamage: 25,
    castDuration: 1.26,
    energyCost: 12,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire2': {
    name: 'Fire 2',
    element: ElementTypes.fire,
    rank: 2,
    secondaryElement: null,
    baseDamage: 50,
    castDuration: 2.52,
    energyCost: 18,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire3': {
    name: 'Fire 3',
    element: ElementTypes.fire,
    rank: 3,
    secondaryElement: null,
    baseDamage: 100,
    castDuration: 3.78,
    energyCost: 24,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire4': {
    name: 'Fire 4',
    element: ElementTypes.fire,
    rank: 4,
    secondaryElement: null,
    baseDamage: 200,
    castDuration: 5.04,
    energyCost: 30,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire5': {
    name: 'Fire 5',
    element: ElementTypes.fire,
    rank: 5,
    secondaryElement: null,
    baseDamage: 400,
    castDuration: 6.3,
    energyCost: 36,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire6': {
    name: 'Fire 6',
    element: ElementTypes.fire,
    rank: 6,
    secondaryElement: null,
    baseDamage: 800,
    castDuration: 7.56,
    energyCost: 42,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire7': {
    name: 'Fire 7',
    element: ElementTypes.fire,
    rank: 7,
    secondaryElement: null,
    baseDamage: 1600,
    castDuration: 8.82,
    energyCost: 48,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire8': {
    name: 'Fire 8',
    element: ElementTypes.fire,
    rank: 8,
    secondaryElement: null,
    baseDamage: 3200,
    castDuration: 10.08,
    energyCost: 54,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'fire9': {
    name: 'Fire 9',
    element: ElementTypes.fire,
    rank: 9,
    secondaryElement: null,
    baseDamage: 6400,
    castDuration: 11.34,
    energyCost: 60,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice1': {
    name: 'Ice 1',
    element: ElementTypes.ice,
    rank: 1,
    secondaryElement: null,
    baseDamage: 25,
    castDuration: 1.4,
    energyCost: 6,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice2': {
    name: 'Ice 2',
    element: ElementTypes.ice,
    rank: 2,
    secondaryElement: null,
    baseDamage: 50,
    castDuration: 2.8,
    energyCost: 9,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice3': {
    name: 'Ice 3',
    element: ElementTypes.ice,
    rank: 3,
    secondaryElement: null,
    baseDamage: 100,
    castDuration: 4.2,
    energyCost: 12,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice4': {
    name: 'Ice 4',
    element: ElementTypes.ice,
    rank: 4,
    secondaryElement: null,
    baseDamage: 200,
    castDuration: 5.6,
    energyCost: 15,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice5': {
    name: 'Ice 5',
    element: ElementTypes.ice,
    rank: 5,
    secondaryElement: null,
    baseDamage: 400,
    castDuration: 7,
    energyCost: 18,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice6': {
    name: 'Ice 6',
    element: ElementTypes.ice,
    rank: 6,
    secondaryElement: null,
    baseDamage: 800,
    castDuration: 8.4,
    energyCost: 21,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice7': {
    name: 'Ice 7',
    element: ElementTypes.ice,
    rank: 7,
    secondaryElement: null,
    baseDamage: 1600,
    castDuration: 9.8,
    energyCost: 24,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice8': {
    name: 'Ice 8',
    element: ElementTypes.ice,
    rank: 8,
    secondaryElement: null,
    baseDamage: 3200,
    castDuration: 11.2,
    energyCost: 27,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'ice9': {
    name: 'Ice 9',
    element: ElementTypes.ice,
    rank: 9,
    secondaryElement: null,
    baseDamage: 6400,
    castDuration: 12.6,
    energyCost: 30,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning1': {
    name: 'Lightning 1',
    element: ElementTypes.lightning,
    rank: 1,
    secondaryElement: null,
    baseDamage: 15,
    castDuration: 1.12,
    energyCost: 10,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning2': {
    name: 'Lightning 2',
    element: ElementTypes.lightning,
    rank: 2,
    secondaryElement: null,
    baseDamage: 30,
    castDuration: 2.24,
    energyCost: 15,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning3': {
    name: 'Lightning 3',
    element: ElementTypes.lightning,
    rank: 3,
    secondaryElement: null,
    baseDamage: 60,
    castDuration: 3.36,
    energyCost: 20,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning4': {
    name: 'Lightning 4',
    element: ElementTypes.lightning,
    rank: 4,
    secondaryElement: null,
    baseDamage: 120,
    castDuration: 4.48,
    energyCost: 25,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning5': {
    name: 'Lightning 5',
    element: ElementTypes.lightning,
    rank: 5,
    secondaryElement: null,
    baseDamage: 240,
    castDuration: 5.6,
    energyCost: 30,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning6': {
    name: 'Lightning 6',
    element: ElementTypes.lightning,
    rank: 6,
    secondaryElement: null,
    baseDamage: 480,
    castDuration: 6.72,
    energyCost: 35,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning7': {
    name: 'Lightning 7',
    element: ElementTypes.lightning,
    rank: 7,
    secondaryElement: null,
    baseDamage: 960,
    castDuration: 7.84,
    energyCost: 40,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning8': {
    name: 'Lightning 8',
    element: ElementTypes.lightning,
    rank: 8,
    secondaryElement: null,
    baseDamage: 1920,
    castDuration: 8.96,
    energyCost: 45,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lightning9': {
    name: 'Lightning 9',
    element: ElementTypes.lightning,
    rank: 9,
    secondaryElement: null,
    baseDamage: 3840,
    castDuration: 10.08,
    energyCost: 50,
    manaCost: 0,
    cooldown: 0,
    chargeTypeRequired: null
  },
  'lighntingAndFire': {
    name: 'Lightning and Fire',
    element: ElementTypes.lightning,
    rank: 9,
    secondaryElement: ElementTypes.fire,
    baseDamage: 3840 + 6400,
    castDuration: 10.71,
    energyCost: 0,
    manaCost: 10,
    cooldown: 120,
    chargeTypeRequired: ChargeTypes.firelightning2
  }
}

export interface RotationState {
  energy: number;
  maxEnergy: number;
  mana: number;
  maxMana: number;
  fireFatigueStacks: number;
  fireFatigueTimer: number;
  iceFatigueStacks: number;
  iceFatigueTimer: number;
  lightningFatigueStacks: number;
  lightningFatigueTimer: number;
  darkRitualStacks: number;
  maxDarkRitualStacks: number;
  energonChargeStacks: number;
  chargeStacks: Record<ChargeTypes, number>;
  maxChargeStacks: Record<ChargeTypes, number>;
  elapsedTime: number;
  spellName: string;
  fireIceNukeCooldown?: number;
  fireLightningNukeCooldown?: number;
  iceLightningNukeCooldown?: number;
  error: boolean;
}

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const initialRotationState: RotationState = {
  energy: 300,
  maxEnergy: 300,
  mana: 300,
  maxMana: 300,
  fireFatigueStacks: 0,
  iceFatigueStacks: 0,
  lightningFatigueStacks: 0,
  darkRitualStacks: 0,
  maxDarkRitualStacks: 20,
  energonChargeStacks: 0,
  chargeStacks: {
    [ChargeTypes.fireice1]: 0,
    [ChargeTypes.fireice2]: 0,
    [ChargeTypes.fireice3]: 0,
    [ChargeTypes.firelightning1]: 0,
    [ChargeTypes.firelightning2]: 0,
    [ChargeTypes.firelightning3]: 0,
    [ChargeTypes.icelightning1]: 0,
    [ChargeTypes.icelightning2]: 0,
    [ChargeTypes.icelightning3]: 0
  },
  maxChargeStacks: {
    [ChargeTypes.fireice1]: 0,
    [ChargeTypes.fireice2]: 0,
    [ChargeTypes.fireice3]: 0,
    [ChargeTypes.firelightning1]: 0,
    [ChargeTypes.firelightning2]: 5,
    [ChargeTypes.firelightning3]: 0,
    [ChargeTypes.icelightning1]: 0,
    [ChargeTypes.icelightning2]: 0,
    [ChargeTypes.icelightning3]: 0
  },
  elapsedTime: 0,
  spellName: 'Start',
  fireLightningNukeCooldown: 0,
  error: false
}

const getExpectedEnergyCost = (spell: Spell, state: RotationState): number => {
  let expectedEnergyCost = spell.energyCost;

  if (spell.element === ElementTypes.fire) {
    expectedEnergyCost = expectedEnergyCost * (1 + 0.04 * state.fireFatigueStacks);
  } else if (spell.element === ElementTypes.ice) {
    expectedEnergyCost = expectedEnergyCost * (1 + 0.04 * state.iceFatigueStacks);
  } else if (spell.element === ElementTypes.lightning) {
    expectedEnergyCost = expectedEnergyCost * (1 + 0.04 * state.lightningFatigueStacks);
  }

  return expectedEnergyCost;
}

export const createTimeline = (rotation: Spell[]): RotationState[] => {
  const rotationTimeline: RotationState[] = [initialRotationState];

  rotation.forEach(spell => {
    const lastState = rotationTimeline[rotationTimeline.length - 1];
    let error = false;

    let expectedEnergy = lastState.energy - getExpectedEnergyCost(spell, lastState) + spell.castDuration;
    if (expectedEnergy < 0) {
      error = true;
    }

    if (expectedEnergy > lastState.maxEnergy) {
      expectedEnergy = lastState.maxEnergy;
    }

    let expectedMana = lastState.mana - spell.manaCost + spell.castDuration;
    if (expectedMana < 0) {
      error = true;
    }

    if (expectedMana > lastState.maxMana) {
      expectedMana = lastState.maxMana;
    }

    const newState: RotationState = {
      spellName: spell.name,
      energy: expectedEnergy,
      mana: expectedMana,
      error: error,
      maxEnergy: 300,
      maxMana: 300,
      fireFatigueStacks: lastState.fireFatigueStacks,
      iceFatigueStacks: lastState.iceFatigueStacks,
      lightningFatigueStacks: lastState.lightningFatigueStacks,
      darkRitualStacks: 0,
      maxDarkRitualStacks: 0,
      energonChargeStacks: 0,
      elapsedTime: lastState.elapsedTime + spell.castDuration,
      chargeStacks: lastState.chargeStacks,
      maxChargeStacks: lastState.maxChargeStacks
    }

    rotationTimeline.push(newState);
  });

  return rotationTimeline;
}