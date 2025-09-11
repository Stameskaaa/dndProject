export interface NPC {
  id: number;
  name: string;
  src: string;
  status: string;
  fraction: string;
  short_description: string;
  md_description: string;
  md_history: string;
  md_fun_facts: string;
  country_ids: number[];
  country_data: { id: string; name: string }[];
  location_ids: number[];
  location_data: { id: string; name: string }[];
}
