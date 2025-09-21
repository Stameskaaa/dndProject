import { characteristic } from '@/mock/mock';
import type { Class, SubClassSkills } from './types';
import type { World } from '../worlds/types';

export const classMD = `Уровень  | Бонус мастерства  |  Умения  |  Кость вдохновения  | Заговоры  | Заклинания | Ячейки заклинаний | 
---------| -------------     |  ------  |  --------  |  --------  |  -------   |  ------           | 
1        | 2                 |  Бардовское вдохновение, Сотворение заклинаний  | к6  |   2  | 4 | 2 | 
2        | 2                 |  Мастер на все руки, Экспертность|  к6  |  2  | 5 | 3 | 
3        | 2                 |  Подкласс Барда| к6   |   2  | 6 | 4 |`;

export const subclassSkills: SubClassSkills[] = [
  {
    id: 'level1',
    title: 'Уровень 1: Вдохновение барда',
    mdDescription:
      'Вы можете сверхъестественным образом вдохновлять других посредством слов, музыки или танца. Это вдохновение представлено вашей костью бардовского вдохновения, которая равна к6.',
  },
];

export const mockClass: Class = {
  id: 'bard',
  src: 'https://img.freepik.com/free-photo/fantasy-group-adventurers_23-2151470683.jpg',
  name: 'Бард',
  worldsIds: ['gurvan-gol'],
  spellIds: [1, 2, 3],
  worlds: [
    {
      id: 3,
      name: 'Гурван-Гол',
      shortDescription: 'Краткое описание мира',
      src: '',
    } as Pick<World, 'id' | 'name' | 'shortDescription' | 'src'>,
  ],
  mdDescription: `Вызывая магию через музыку, танцы и стихи, Барды являются экспертами в том, чтобы вдохновлять других, успокаивать боль, приводить в уныние врагов и создавать иллюзии.`,
  mdTableData: classMD,
  diceHit: '6',
  savingThrowsIds: ['s', 'b'],
  skills: 'Выберите любые 3',
  weaponSkills: 'Простое оружие',
  toolSkills: 'Выберите 3 музыкальных инструмента',
  armorId: ['light'],
  startEquipment: [
    'Кожаный доспех, 2 Кинжала, Лёгкий арбалет, 20 болтов, Песенник, Сонная лилия, музыкальный инструмент по вашему выбору (Заклинательная фокусировка), Набор путешественника и 21 флосен;',
    'Кожаный доспех, 2 Дубинки, Песенник, Мешочек с 1000 металлических шариков, Мешок с компонентами, Набор артиста и 24 крифа',
  ],
  subclassSkillIds: ['level1'],
  subclassSkills,
  characteristicIds: ['s', 'b'],
};
