export interface Rule {
  id: string;
  title: string;
  short_description: string;
  md_content: string;
  type?: string[] | string;
}

export interface RuleType {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
