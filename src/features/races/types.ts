export interface RaceFeature {
  type: string;
  size: string;
  speed: string;
  md_content: string;
}

export interface Race {
  id: string;
  name: string;
  src: string;
  worlds: { id: string; name: string }[];
  description: string;
  full_description: string;
  features: RaceFeature;
  history: string;
}
