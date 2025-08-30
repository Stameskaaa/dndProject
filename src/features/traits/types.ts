import type { World } from '@/features/types';

export interface Trait {
  id: string;
  name: string;
  worlds: World[];
  type: TraitType;
  src: string;
  requirements: string;
  md_content: string;
}

interface TraitType {
  id: string;
  name: string;
}
