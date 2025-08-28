export interface SpellDataType {
  id: string;
  name: string;
  level: number;
  school_id: SpellSchool['id'];
  castingTime: string;
  duration: string;
  distance: string;
  components_list: SpellComponent['id'][];
  description: string;
  classes: { id: string; name: string }[];
  full_description: string;
}

export interface SpellComponent {
  id: string;
  name: string;
  description: string;
}

export interface SpellSchool {
  id: string;
  title: string;
  color: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
