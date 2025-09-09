export interface World {
  id: number;
  src: string;
  name: string;
  short_description: string;
  md_description: string;
  md_history: string;

  country_ids: number[];
  country_data?: { id: number; name: string }[];

  location_ids: number[];
  location_data?: { id: number; name: string }[];

  race_ids: number[];
  race_data?: { id: number; name: string }[];

  class_ids: number[];
  class_data?: { id: number; name: string }[];

  origin_ids: number[];
  origin_data?: { id: number; name: string }[];

  trait_ids: number[];
  trait_data?: { id: number; name: string }[];

  god_ids: number[];
  god_data?: { id: number; name: string }[];
}
