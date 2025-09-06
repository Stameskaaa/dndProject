interface Country {
  id: number;
  name: string;
}

interface Location {
  id: number;
  name: string;
}

export interface NPC {
  id: number;
  name: string;
  src: string;
  status: string;
  fraction: string;
  md_description: string;
  short_description: string;
  md_history: string;
  md_fun_facts: string;
  language: string;
  country_ids: number[];
  country_data: Country[];
  location_ids: number[];
  location_data: Location[];
}
