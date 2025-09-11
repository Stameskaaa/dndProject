export interface Country {
  id: number;
  src: string;
  name: string;
  short_description: string;
  md_description: string;

  location_ids: number[];
  location_data: { id: string; name: string }[];

  world_id: number;
  world_data: { id: string; name: string };
}
