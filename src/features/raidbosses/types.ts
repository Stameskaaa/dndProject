import type { Location } from '../locations/types';

type HostileType = 'monster' | 'raid_boss';

export interface HostileCreatures {
  id: number;
  name: string;
  src: string;
  type: HostileType;

  short_description: string;
  md_description: string;

  status?: string;
  md_history?: string;
  md_fun_facts?: string;
  md_statblock?: string;

  location_ids: number[];
  location_data: Pick<Location, 'id' | 'name' | 'short_description' | 'src'>[];

  size_id: string;
  type_id: number;
  hp: string;
  speed: string;

  characteristic_ids: { id: string; value: string }[];
  saving_throws: string;

  skills: string;

  damage_immunities: number[];
  condition_immunities: number[];

  damage_resistance: number[];
  condition_resistance: number[];

  senses: string;
  language: string;

  challenge: number;
  proficiency_bonus: number;
}
