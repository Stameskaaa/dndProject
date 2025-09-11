import type { Country } from '../country/types';

export interface NPC {
  id: number;
  name: string;
  src: string;
  status: string;
  fraction: string;
  shortDescription: string;
  mdDescription: string;
  mdHistory: string;
  mdFunFacts: string;

  worldId: string;

  countryId: number;
  country: Pick<Country, 'id' | 'name' | 'shortDescription' | 'src'>;
}
