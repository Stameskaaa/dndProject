import type { SpellComponent, SpellSchool } from './types';
import { IllusionIcon } from '@/assets/icons/schools/IllusionIcon';
import { EvocationIcon } from '@/assets/icons/schools/EvocationIcon';
import { AbjurationIcon } from '@/assets/icons/schools/AbjurationIcon';
import { NecromancyIcon } from '@/assets/icons/schools/NecromancyIcon';
import { DivinationIcon } from '@/assets/icons/schools/DivinationIcon';
import { EnchantmentIcon } from '@/assets/icons/schools/EnchantmentIcon';
import { ConjurationIcon } from '@/assets/icons/schools/ConjurationIcon';
import { TransmutationIcon } from '@/assets/icons/schools/TransmutationIcon';

export const spellComponents: SpellComponent[] = [
  {
    id: 'verbal',
    name: 'Вербальный',
    description: 'Необходима речь, чтобы произнести заклинание.',
  },
  {
    id: 'somatic',
    name: 'Соматический',
    description: 'Жесты руками необходимы для заклинания.',
  },
  {
    id: 'material',
    name: 'Материальный',
    description: 'Нужны определённые предметы для кастования.',
  },
];

// TODO Цвета дублируются в css SpellCard
export const schoolList: SpellSchool[] = [
  {
    id: 'evocation',
    title: 'Эвокация',
    color: 'linear-gradient(to right, #4dd0e1 0%, #26c6da 100%)',
    icon: EvocationIcon,
  },
  {
    id: 'illusion',
    title: 'Иллюзия',
    color: 'linear-gradient(to right, #7e57c2 0%, #9575cd 100%)',
    icon: IllusionIcon,
  },
  {
    id: 'necromancy',
    title: 'Некромантия',
    color: 'linear-gradient(to right, #e57373 0%, #ef9a9a 100%)',
    icon: NecromancyIcon,
  },
  {
    id: 'abjuration',
    title: 'Ограждение',
    color: 'linear-gradient(to right, #4fc3f7 0%, #29b6f6 100%)',
    icon: AbjurationIcon,
  },
  {
    id: 'conjuration',
    title: 'Призывание',
    color: 'linear-gradient(to right, #ba68c8 0%, #ab47bc 100%)',
    icon: ConjurationIcon,
  },
  {
    id: 'divination',
    title: 'Прорицание',
    color: 'linear-gradient(to right, #fff176 0%, #ffee58 100%)',
    icon: DivinationIcon,
  },
  {
    id: 'enchantment',
    title: 'Очарование',
    color: 'linear-gradient(to right, #f06292 0%, #f48fb1 100%)',
    icon: EnchantmentIcon,
  },
  {
    id: 'transmutation',
    title: 'Преобразование',
    color: 'linear-gradient(to right, #81c784 0%, #66bb6a 100%)',
    icon: TransmutationIcon,
  },
];
