import type { Trait } from '../traits/types';
import type { World } from '../worlds/types';

export interface Origin {
  id: string;
  name: string;
  src: string;
  skills: string;
  toolSkills: string;
  startEquipment: string[];
  mdDescription: string;

  traitId: string;
  traits: Trait;

  characteristicIds: string[];

  worldIds?: string[];
  worlds?: Pick<World, 'id' | 'name' | 'shortDescription' | 'src'>[];
}
