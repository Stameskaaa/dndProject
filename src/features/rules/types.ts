import type { Pagination } from '@/constants/pagination/types';

export interface Rule {
  id: number;
  title: string;
  shortDescription: string;
  mdContent: string;
  type: RuleTypes;
  tags?: string[];
}

export type RuleTypes = 'dnd' | 'home' | 'club';

export interface RuleTags {
  id: string;
  value: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type RuleListProps = Pagination & Pick<Rule, 'type'>;
