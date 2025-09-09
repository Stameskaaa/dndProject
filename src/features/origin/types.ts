import type { Trait } from '../traits/types';

export interface Origin {
  id: string;
  name: string;
  src: string;
  skills: string;
  tool_skills: string;
  start_equipment: string[];
  md_description: string;

  // TODO массив для удобства, можно будет выбрать одну
  trait_id: string;
  trait_data: Trait;

  characteristic_ids: string[];

  world_ids?: string[];
  world_data?: { id: string; name: string }[];
}
