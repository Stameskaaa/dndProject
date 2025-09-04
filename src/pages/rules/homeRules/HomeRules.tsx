import { homeRules } from '@/features/rules/mock';
import { RulesSection } from '../ui/RuleSection';

export const HomeRulesPage = () => {
  return <RulesSection type="home" rules={homeRules} />;
};
