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
    title: 'Воплощение',
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
    title: 'Вызов',
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

export const creature_sizes = [
  { id: 'Enormous', value: 'Громадный' },
  { id: 'Huge', value: 'Огромный' },
  { id: 'Large', value: 'Большой' },
  { id: 'Medium', value: 'Средний' },
  { id: 'Small', value: 'Маленький' },
  { id: 'Tiny', value: 'крошечный' },
];

export const creature_types = [
  { id: 'Aberration', value: 'Аберрация' },
  { id: 'Giant', value: 'Великан' },
  { id: 'Humanoid', value: 'Гуманоид' },
  { id: 'Dragon', value: 'Дракон' },
  { id: 'Beast', value: 'Зверь' },
  { id: 'Fiend', value: 'Исчадие' },
  { id: 'Construct', value: 'Конструкт' },
  { id: 'Monster', value: 'Чудовище' },
  { id: 'Celestial', value: 'Небожитель' },
  { id: 'Undead', value: 'Нежить' },
  { id: 'Plant', value: 'Растение' },
  { id: 'Slime', value: 'Слизь' },
  { id: 'Fairy', value: 'Фея' },
  { id: 'Elemental', value: 'Элементаль' },
];

export const dice_hits = [
  { id: 'k6', value: 'к6' },
  { id: 'k8', value: 'к8' },
  { id: 'k10', value: 'к10' },
  { id: 'k12', value: 'к12' },
];

export const damage_states = [
  { id: 'Piercing_non_magical', value: 'Колющий не магический' },
  { id: 'Slashing_non_magical', value: 'Рубящий не магический' },
  { id: 'Crushing_non_magical', value: 'Дробящий не магический' },
  { id: 'Piercing_magical', value: 'Колющий магический' },
  { id: 'Slashing_magical', value: 'Рубящий магический' },
  { id: 'Crushing_magical', value: 'Дробящий магический' },
  { id: 'Radiation', value: 'Излучение' },
  { id: 'Necrotic_energy', value: 'Некротическая энергия' },
  { id: 'Acid', value: 'Кислота' },
  { id: 'Sound', value: 'Звук' },
  { id: 'Cold', value: 'Холод' },
  { id: 'Fire', value: 'Огонь' },
  { id: 'Electricity', value: 'Электричество' },
  { id: 'Psychic_energy', value: 'Психическая энергия' },
  { id: 'Force_field', value: 'Силовое поле' },
  { id: 'Poison', value: 'Яд' },
];
export const condition_states = [
  { id: 'Unconscious', value: 'Бессознательный' },
  { id: 'Frightened', value: 'Испуганный' },
  { id: 'Exhausted', value: 'Истощение' },
  { id: 'Invisible', value: 'Невидимый' },
  { id: 'Incapacitated', value: 'Недееспособный' },
  { id: 'Deafened', value: 'Оглохший' },
  { id: 'Petrified', value: 'Окаменевший' },
  { id: 'Prone', value: 'Лежащий ничком' },
  { id: 'Entangled', value: 'Опутанный' },
  { id: 'Blinded', value: 'Ослеплённый' },
  { id: 'Poisoned', value: 'Отравленный' },
  { id: 'Enchanted', value: 'Очарованный' },
  { id: 'Dazed', value: 'Ошеломлённый' },
  { id: 'Grabbed', value: 'Схваченный' },
  { id: 'Paralyzed', value: 'Парализованный' },
];
