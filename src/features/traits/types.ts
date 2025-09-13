import type { World } from '../worlds/types';

export interface Trait {
  id: number;
  name: string;
  traitTypeId: string;
  requirements: string;
  mdDescription: string;

  worldIds?: string[];
  worlds?: Pick<World, 'id' | 'name' | 'shortDescription' | 'src'>[];
}

export interface TraitType {
  id: string;
  name: string;
  description: string;
  icon: any;
}
