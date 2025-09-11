import type { HostileCreatures } from '../hostileCreatures/types';
import type { World } from '../worlds/types';

export interface Location {
  id: number;
  src: string;
  name: string;
  shortDescription: string;
  mdDescription: string;

  worldId: number;
  world: Pick<World, 'id' | 'src' | 'name' | 'shortDescription'>;

  countryId: number;
  country: Pick<Location, 'id' | 'src' | 'name' | 'shortDescription'>;

  hostileCreatureIds: number[];
  hostileCreatures?: Pick<HostileCreatures, 'id' | 'name' | 'src' | 'shortDescription' | 'type'>[];
}
