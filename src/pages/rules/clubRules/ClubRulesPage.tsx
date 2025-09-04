import { clubRules } from '@/features/rules/mock';
import { RulesSection } from '../ui/RuleSection';

export const ClubRulesPage = () => {
  return <RulesSection type="club" rules={clubRules} />;
};
