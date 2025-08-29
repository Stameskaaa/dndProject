export interface Characteristic {
  id: string;
  name: string;
  value?: number;
}

export interface Feats {
  name: string;
  description: string;
  wolds: World;
  type: string;
}

export interface World {
  id: string;
  name: string;
  description: string;
}

export interface Skills {
  id: string;
  name: string;
  description: string;
}

export interface ToolSkills {
  id: string;
  description: string;
}
