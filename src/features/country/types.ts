export interface Country {
  id: number;
  src: string;
  name: string;
  short_description: string;
  md_description: string;
  world_id: number;
  location_ids: number[];
  world_data: { id: string; name: string };
}
