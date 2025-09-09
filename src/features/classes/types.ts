export interface Class {
  id: string;
  src: string;
  name: string;

  // TODO по сути хранить просто число
  dice_hit: string;
  saving_throws: string[];
  skills: string;
  weapon_skills: string;
  tool_skills: string;
  armor_id: string[];
  start_equipment: string[];

  worlds_ids?: string[];
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
