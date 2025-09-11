export interface Monster {
  id: number;
  name: string;
  src: string;

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

  location_ids: number[];
  location_data: { id: number; name: string }[];

  challenge: number;
  proficiency_bonus: number;
  short_description: string;
  md_description: string;
}
