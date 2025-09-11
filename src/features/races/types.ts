import type { World } from '../worlds/types';

export interface RaceFeature {
  type: string;
  size?: string;
  speed?: string;
  mdContent: string;
}

export interface Race {
  id: number;
  name: string;
  src: string;
  mdDescription: string;
  features: RaceFeature;
  mdHistory: string;

  worldIds?: string[];
  worlds?: Pick<World, 'id' | 'name' | 'shortDescription' | 'src'>[];
}
