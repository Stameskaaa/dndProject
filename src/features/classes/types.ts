import type { Characteristic } from '../types';

export interface Class {
  id: string;
  src: string;
  name: string;
  description: string;
  md_table_data: string;
  // TODO по сути хранить просто число
  dice_hit: number;
  saving_throws: Characteristic[];
  skills: string;
  weapon_skills: string[];
  tool_skills: string;
  armor_id: string[];
  start_equipment: string[];

  worlds_ids?: string[];
  worlds_data?: { id: string; name: string }[];

  class_skill_ids: string[];
  class_skill_data: ClassSkills[];

  subclass_skill_ids: string[];
  subclass_skill_data: ClassSkills[];

  characteristic_ids: string[];
  characteristic_data: Characteristic[];
}

export interface ClassSkills {
  id: string;
  title: string;
  md_description: string;
}
