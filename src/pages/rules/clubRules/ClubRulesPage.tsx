import { clubRules } from '@/features/rules/mock';
import { RulesSection } from '../ui/RuleSection';

export const ClubRulesPage = () => {
  return <RulesSection title="Правила клуба" rules={clubRules} />;
};
