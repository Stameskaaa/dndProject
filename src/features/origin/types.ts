import type { Characteristic, Feats, Skills, ToolSkills, World } from '../types';

export interface Origin {
  id: string;
  name: string;
  src: string;
  characteristic: Characteristic[];
  feats: Feats[];
  worlds: World[];
  skills: Skills[];
  toolSkills: ToolSkills[];
  equipment: [string, string];
  md_content: string;
}
