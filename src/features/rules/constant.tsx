import {
  BookUser,
  Coffee,
  Crown,
  Gem,
  HandCoins,
  Handshake,
  Landmark,
  Scale,
  UserRoundCheck,
} from 'lucide-react';
import type { RuleType } from './types';

export const homeRuleTypes: RuleType[] = [
  { id: 'extensions', name: 'Расширенные возможности', icon: Crown },
  { id: 'unique_innovations', name: 'Уникальные нововведения клуба', icon: Gem },
  { id: 'revisions', name: 'Переосмысления классических правил', icon: Coffee },
  { id: 'special_cases', name: 'Правила частных ситуаций', icon: Scale },
  { id: 'other', name: 'Прочее', icon: HandCoins },
];

export const clubRulesTypes: RuleType[] = [
  { id: 'event_reglament', name: 'Регламенты проведения мероприятий', icon: Landmark },
  { id: 'event_participation', name: 'Правила участия в мероприятиях', icon: BookUser },
  { id: 'club_behavior', name: 'Правила поведения в клубе', icon: Handshake },
  { id: 'user_agreement', name: 'Пользовательское соглашение', icon: UserRoundCheck },
  { id: 'other', name: 'Прочее', icon: HandCoins },
];
