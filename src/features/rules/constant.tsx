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

export const dndRuleTypes: Omit<RuleType, 'icon'>[] = [
  { id: 'core_terms', name: 'Основные термины' },
  { id: 'core_actions', name: 'Основные действия' },
  { id: 'combat', name: 'Сражение' },
  { id: 'magic', name: 'Магия' },
  { id: 'conditions', name: 'Состояния' },
  { id: 'areas', name: 'Области воздействия' },
  { id: 'exploration', name: 'Исследование мира' },
  { id: 'movement', name: 'Перемещение' },
  { id: 'statblock', name: 'Статблок' },
  { id: 'senses', name: 'Чувства' },
  { id: 'equipment', name: 'Снаряжение' },
  { id: 'other', name: 'Прочее' },
];
