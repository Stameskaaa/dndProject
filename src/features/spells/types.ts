export interface Spell {
  id: string;
  name: string;
  level: number;
  school_id: string;
  casting_time: string;
  duration: string;
  distance: string;
  short_description: string;
  md_description: string;
  components_list: string;

  class_ids: string[];
  class_data: { id: string; name: string }[];
}

export interface SpellSchool {
  id: string;
  title: string;
  color: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
