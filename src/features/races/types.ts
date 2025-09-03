export interface RaceFeature {
  type: string;
  size?: string;
  speed?: string;
  md_content: string;
}

export interface Race {
  id: number;
  name: string;
  src: string;
  md_description: string;
  features: RaceFeature;
  md_history: string;

  worlds_ids?: string[];
  worlds_data?: { id: string; name: string }[];
}
