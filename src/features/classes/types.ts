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

  worldsIds?: string[];
  worlds_data?: { id: string; name: string }[];

  md_description: string;
  md_table_data: string;

  subclass_skill_ids: string[];
  subclass_skill_data: ClassSkills[];

  characteristic_ids: string[];
}

export interface ClassSkills {
  id: string;
  title: string;
  md_description: string;
}
