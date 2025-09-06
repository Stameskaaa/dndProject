import { AbjurationIcon } from '@/assets/icons/schools/AbjurationIcon';
import { ConjurationIcon } from '@/assets/icons/schools/ConjurationIcon';
import { DivinationIcon } from '@/assets/icons/schools/DivinationIcon';
import { EnchantmentIcon } from '@/assets/icons/schools/EnchantmentIcon';
import { EvocationIcon } from '@/assets/icons/schools/EvocationIcon';
import { IllusionIcon } from '@/assets/icons/schools/IllusionIcon';
import { NecromancyIcon } from '@/assets/icons/schools/NecromancyIcon';
import { TransmutationIcon } from '@/assets/icons/schools/TransmutationIcon';
import type { SpellSchool } from '@/features/spells/types';
import type { TraitType } from '@/features/traits/types';
import { HandFist, HandHeart, Sparkles, Swords } from 'lucide-react';

export const characteristic = [
  {
    id: 'str',
    name: 'Сила',
    description:
      'Определяет физическую мощь, способность поднимать тяжести, наносить удары и совершать силовые проверки.',
  },
  {
    id: 'dex',
    name: 'Ловкость',
    description:
      'Отвечает за скорость, координацию и реакцию. Влияет на броню, инициативу и проверки акробатики.',
  },
  {
    id: 'con',
    name: 'Телосложение',
    description:
      'Характеризует выносливость и здоровье. Определяет очки здоровья и устойчивость к ядам и болезням.',
  },
  {
    id: 'int',
    name: 'Интеллект',
    description:
      'Способность к логике, памяти и анализу. Влияет на знания, расследование и использование некоторых заклинаний.',
  },
  {
    id: 'wis',
    name: 'Мудрость',
    description:
      'Отражает восприятие и интуицию. Важна для внимательности, выживания и магии жрецов и друидов.',
  },
  {
    id: 'cha',
    name: 'Харизма',
    description:
      'Личное обаяние, сила воли и влияние на других. Используется в убеждении, запугивании и магии бардов и колдунов.',
  },
];

// TODO хранится тут всегда сделать как объект
export const armors = [
  {
    id: 'heavy',
    name: 'Тяжелые доспехи',
  },
  {
    id: 'light',
    name: 'Легкие доспехи',
  },
  {
    id: 'middle',
    name: 'Средние доспехи',
  },
  {
    id: 'without',
    name: 'Защита без доспехов',
  },
];
export const trait_types: TraitType[] = [
  {
    id: 'origin',
    name: 'Происхождение',
    description: 'Чертa, связанная с историей и корнями персонажа, его культурой и прошлым.',
    icon: HandHeart,
  },
  {
    id: 'combat',
    name: 'Боевые',
    description:
      'Навыки и особенности, усиливающие персонажа в сражениях: владение оружием, приёмы, выносливость.',
    icon: Swords,
  },
  {
    id: 'epic',
    name: 'Эпические',
    description: 'Редкие и уникальные способности, делающие персонажа особенным и выделяющимся.',
    icon: Sparkles,
  },
  {
    id: 'general',
    name: 'Общие',
    description:
      'Базовые черты, доступные большинству героев, вне зависимости от их происхождения и класса.',
    icon: HandFist,
  },
];
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
