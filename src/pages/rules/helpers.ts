import type { Rule } from '@/features/rules/types';

interface GroupedRules {
  id: string;
  content: (Omit<Rule, 'type'> & { type: string })[];
}

export function groupRules(rules: Rule[]): GroupedRules[] {
  const groupsMap: Record<string, (Omit<Rule, 'type'> & { type: string })[]> = {};

  rules.forEach((rule) => {
    const normalizedType = Array.isArray(rule.type)
      ? rule.type[0].toLowerCase()
      : rule.type?.toLowerCase() || 'other';

    const key = normalizedType.includes('other') ? 'other' : normalizedType;

    if (!groupsMap[key]) groupsMap[key] = [];

    groupsMap[key].push({
      ...rule,
      type: normalizedType,
    });
  });

  return Object.entries(groupsMap).map(([key, content]) => ({
    id: key === 'other' ? 'other' : content[0].type,
    content,
  }));
}
