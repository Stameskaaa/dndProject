import type { Trait } from '../traits/types';
import type { World } from '../worlds/types';

export interface Origin {
  id: number;
  name: string;
  src: string;
  skills: string;
  toolSkills: string;
  startEquipment: string[];
  mdDescription: string;

  featureIds: string;
  features: Trait;

  characteristicIds: string[];

  worldIds?: string[];
  worlds?: Pick<World, 'id' | 'name' | 'shortDescription' | 'src'>[];
}
