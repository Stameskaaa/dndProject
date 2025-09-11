import type { Location } from '../locations/types';

type HostileType = 'monster' | 'raid_boss';

export interface HostileCreatures {
  id: number;
  name: string;
  src: string;
  type: HostileType;

  shortDescription: string;
  mdDescription: string;

  status?: string;
  mdHistory?: string;
  mdFunFacts?: string;
  mdStatblock?: string;

  locationIds: number[];
  locations: Pick<Location, 'id' | 'name' | 'shortDescription' | 'src'>[];

  sizeId: string;
  typeId: number;
  hp: string;
  speed: string;

  characteristicIds: { id: string; value: string }[];
  savingThrows: string;

  skills: string;

  damageImmunities: number[];
  conditionImmunities: number[];

  damageResistance: number[];
  conditionResistance: number[];

  senses: string;
  language: string;

  challenge: number;
  proficiencyBonus: number;
}
