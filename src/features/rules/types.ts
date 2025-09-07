export interface Rule {
  id: string;
  title: string;
  short_description: string;
  md_content: string;
  type: RuleTypes;
  tags?: string[];
}

export type RuleTypes = 'dnd' | 'home' | 'club';

export interface RuleTags {
  id: string;
  value: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
