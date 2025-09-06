import type { Characteristic } from '../types';

export interface Monster {
  id: number;
  name: string;
  src: string;

  size_id: string;

  type_id: number;
  hp: string;
  speed: string;

  characteristic_ids: string[];
  characteristic_data: Characteristic[];

  saving_throws: Characteristic[];
  skills: string;

  damage_immunities: number[];
  condition_immunities: number[];

  damage_resistance: number[];
  condition_resistance: number[];

  senses: string;
  language: string;

  location_ids: number[];
  location_data: { id: number; name: string }[];

  challenge: number; // 0-50 включительно, дробное, если пусто → нет опасности
  proficiency_bonus: number; // всегда + спереди, 0-20
  short_description: string;
  md_content: string;
}
