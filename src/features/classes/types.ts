import type { World } from '../worlds/types';

export interface Class {
  id: string;
  src: string;
  name: string;
  diceHit: string;
  savingThrowsIds: string[];
  skills: string;
  weaponSkills: string;
  toolSkills: string;
  armorId: string[];
  startEquipment: string[];

  spellIds: number[];

  worldsIds?: string[];
  worlds?: Pick<World, 'id' | 'name' | 'shortDescription' | 'src'>[];

  mdDescription: string;
  mdTableData: string;

  subclassSkillIds: string[];
  subclassSkills: SubClassSkills[];

  characteristicIds: string[];
}

export interface SubClassSkills {
  id: string;
  title: string;
  mdDescription: string;
}
