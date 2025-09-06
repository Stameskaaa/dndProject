export interface World {
  id: number;
  src: string;
  name: string;
  preview_src?: string;
  short_description: string;
  md_description: string;
  history: string;

  country_ids: number[];
  country_data?: { id: number; name: string }[];

  race_ids: number[];
  race_data?: { id: number; name: string }[];

  class_ids: number[];
  class_data?: { id: number; name: string }[];

  origin_ids: number[];
  origin_data?: { id: number; name: string }[];

  trait_ids: number[];
  trait_data?: { id: number; name: string }[];

  location_ids: number[];
  location_data?: { id: number; name: string }[];

  god_ids: number[];
  god_data?: { id: number; name: string }[];
}

export interface Country {
  id: number;
  src: string;
  name: string;
  description: string;

  location_ids: number[];
  location_data?: { id: number; name: string }[];
}

export interface God {
  id: number;
  name: string;
  src: string;
  short_description: string;
  md_content: string;

  world_ids: number[];
  world_data?: { id: number; name: string }[];
}
