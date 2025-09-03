import type { Rule } from '@/features/rules/types';

interface GroupedRules {
  title: string;
  content: Rule[];
}

export function groupRules(rules: Rule[]): GroupedRules[] {
  const groupsMap: Record<string, Rule[]> = {};

  rules.forEach((rule) => {
    const type = rule.type?.toLowerCase() || 'прочее';

    const key = type.includes('прочее') ? 'прочее' : type;

    if (!groupsMap[key]) groupsMap[key] = [];
    groupsMap[key].push(rule);
  });

  return Object.entries(groupsMap).map(([key, content]) => ({
    title: key === 'прочее' ? 'Прочее' : content[0].type || key,
    content,
  }));
}
