export interface Spell {
  name: string;
  element: ElementTypes | null;
  rank: number;
  secondaryElement: ElementTypes | null;
  baseDamage: number;
  castDuration: number;
  energyCost: number;
  manaCost: number;
  cooldown: number;
  chargeTypeRequired: ChargeTypes | null;
}

export enum ElementTypes {
  'fire',
  'ice',
  'lightning',
  'misc'
}

export enum ChargeTypes {
  'fireice1',
  'fireice2',
  'fireice3',
  'firelightning1',
  'firelightning2',
  'firelightning3',
  'icelightning1',
  'icelightning2',
  'icelightning3'
}


