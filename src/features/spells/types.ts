import type { Class } from '../classes/types';

export interface Spell {
  id: string;
  name: string;
  level: number;
  schoolId: string;
  castingTime: string;
  duration: string;
  distance: string;
  shortDescription: string;
  mdDescription: string;
  componentsList: string;

  classIds: string[];
  classes: Pick<Class, 'id' | 'src' | 'name'>[];
}

export interface SpellSchool {
  id: string;
  title: string;
  color: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
