export interface Location {
  id: number;
  src: string;
  name: string;
  short_description: string;
  md_description: string;

  world_id: number;
  world_data: { id: string; name: string };

  monster_ids: number[];
  monster_data?: { id: number; name: string }[];

  raidboss_ids: number[];
  raidboss_data?: { id: number; name: string }[];
}
