import type { NPC } from '@/features/npc/types';
import type { God } from '@/features/gods/types';
import type { HostileCreatures } from '@/features/hostileCreatures/types';
import { Section } from '@/components/wrappers/sections/section/Section';
import { CreatureComponent } from './ui/CreatureComponent/CreatureComponent';

interface CreatureTabsProps {
  creatureData?: HostileCreatures | God | NPC;
}

export const CreaturePage: React.FC<CreatureTabsProps> = ({ creatureData }) => {
  return (
    <Section screen fixedWidth>
      <CreatureComponent creatureData={creatureData} />
    </Section>
  );
};

// TODO пока тут моки положил
export const mockHostileCreature: HostileCreatures = {
  id: 1,
  type: 'raidBoss',
  name: 'Ноктур — Шрамник Ночи',
  src: 'https://cdna.artstation.com/p/assets/images/images/044/095/320/large/anato-finnstark-web-petit.jpg?1639069326',
  shortDescription:
    'Огромный ночной тварь, вырывающийся из теней; оставляет на телах жертв характерные похожие на шрамы отметины.',
  mdDescription: `**Ноктур, Шрамник Ночи** — древнее создание тёмных лесов и забытых рун. Появляется при полной луне, охотится из укрытия, обездвиживая жертву тонкой сетью ядовитых шрамов, оставляя на коже следы, которые со временем превращаются в светящиеся руны.`,
  status: 'legendary',
  mdHistory: `Ноктур упоминается в хрониках старых деревень как дух мести леса. Согласно легенде, он возник из неразделённого греха — смеси яда и проклятой враждебности, которую местные жрецы пытались заключить в камень. Камень треснул, и родился Ноктур.`,
  mdFunFacts: `- Ноктур реагирует на серебро; его следы бледнеют при воздействии лунного серебра.\n- Его шрамы иногда "вспыхивают" ночью и служат указателями для других созданий.`,
  mdStatblock: `**Ноктур — Шрамник Ночи**
**Способности.**
- **Теневой покров.** Пока Ноктур не подвержен освещению, он получает преимущество на спасброски по скрытности и уклонению.
- **Шрамы ночи (Recharge 5–6).** Раз в ход Ноктур может выпустить сеть из шрамообразных нитей в радиусе 20 фт.: все существа в радиусе должны совершить спасбросок CON DC 18 или получить 2d8 ядовитого урона и статус «сцеплён» (grappled) на 1 раунд.

**Действия.**
- **Мощный укус.** Ближняя атака оружием: +10 к попаданию, дистанция 5 фт., одна цель. Попадание: 26 (4d10 + 5) колющего урона.
- **Разрывающие шрамы.** (Recharge 6) Ноктур наносит по цели 3 отдельных удара, каждый +10 к попаданию: 3 × (8 (1d8 + 5) колющего урона). Если все три удара попали, цель дополнительно получает 3d6 некротического урона и становится под воздействием «шрамов» на 1 минуту (сохраняется CON по окончании каждого хода для снятия).

**Легендарные действия (3/ход):**
- **Теневая рывок.** Ноктур перемещается до 30 фт. без провоцирования атак.
- **Шрамовый укол.** Одна ближняя атака (плюс 5 к попаданию) против случайной цели в пределах 10 фт.
- **Тьма (cost 2).** Ноктур создаёт зону магической тьмы радиусом 10 фт. на 1 раунд.

**Легендарные сопротивления (1/день).** Ноктур автоматически проходит один неудачный спасбросок.
`,
  locationIds: [10, 13],
  locations: [
    {
      id: 10,
      name: 'Тьмяный бор',
      shortDescription: 'Густой лес, где деревья кажутся живыми ночью.',
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=123456',
    },
    {
      id: 13,
      name: 'Развилки Луны',
      shortDescription:
        'Заброшенный храм на вершине холма, часто служит логовом для ночных созданий.',
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef',
    },
  ],
  sizeId: 'large',
  typeId: 2,
  hp: '168 (16d10 + 80)',
  armorClass: 16,
  speed: '40 ft., climb 20 ft.',
  characteristicIds: [
    { id: 'STR', value: '20' },
    { id: 'DEX', value: '14' },
    { id: 'CON', value: '20' },
    { id: 'INT', value: '10' },
    { id: 'WIS', value: '16' },
    { id: 'CHA', value: '12' },
  ],
  savingThrows: 'STR +10, CON +10, WIS +8',
  skills: 'Stealth +7, Perception +8',
  damageImmunities: [1, 5],
  conditionImmunities: [],
  damageResistance: [3],
  conditionResistance: [],
  senses: 'darkvision 120 ft., passive Perception 18',
  language: '',
  challenge: 10,
  proficiencyBonus: 4,
};

export const mockNPC: NPC = {
  id: 1,
  name: 'Лира — Хранительница Тайн',
  src: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=800&auto=format&fit=crop',
  status: 'active',
  fraction: 'Орден Света',
  shortDescription: 'Мудрая хранительница знаний и секретов древних цивилизаций.',
  mdDescription: `**Лира — Хранительница Тайн**  
Лира собирает и хранит древние знания, передавая их достойным. Она умеет видеть скрытые связи между событиями и предсказывать последствия поступков смертных.`,
  mdHistory: `Лира родилась в уединённой обители на вершине горы и с юных лет обучалась тайным искусствам. В молодости спасла несколько деревень от нашествия чудовищ, за что её почитают и уважают.`,
  mdFunFacts: `- Лира умеет читать старинные руны, которые никто другой не понимает.\n- Её любимое занятие — составление карт звездного неба.`,
  worldId: '1',
  countryId: 101,
  country: {
    id: 101,
    name: 'Королевство Луминария',
    shortDescription: 'Могущественное королевство света и знаний.',
    src: 'https://images.unsplash.com/photo-1508050919630-b135583b29d9?q=80&w=800&auto=format&fit=crop',
  },
};

export const mockHostileCreature2: HostileCreatures = {
  id: 1,
  type: 'monster',
  name: 'Ноктур — Шрамник Ночи',
  src: 'https://cdna.artstation.com/p/assets/images/images/044/095/320/large/anato-finnstark-web-petit.jpg?1639069326',
  shortDescription:
    'Огромный ночной тварь, вырывающийся из теней; оставляет на телах жертв характерные похожие на шрамы отметины.',
  mdDescription: `**Ноктур, Шрамник Ночи** — древнее создание тёмных лесов и забытых рун. Появляется при полной луне, охотится из укрытия, обездвиживая жертву тонкой сетью ядовитых шрамов, оставляя на коже следы, которые со временем превращаются в светящиеся руны.`,
  status: 'legendary',
  locationIds: [10, 13],
  locations: [
    {
      id: 10,
      name: 'Тьмяный бор',
      shortDescription: 'Густой лес, где деревья кажутся живыми ночью.',
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=123456',
    },
    {
      id: 13,
      name: 'Развилки Луны',
      shortDescription:
        'Заброшенный храм на вершине холма, часто служит логовом для ночных созданий.',
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef',
    },
  ],
  sizeId: 'large',
  mdStatblock: '',
  typeId: 2,
  hp: '168 (16d10 + 80)',
  armorClass: 16,
  speed: '40 ft., climb 20 ft.',
  characteristicIds: [
    { id: 'STR', value: '20' },
    { id: 'DEX', value: '14' },
    { id: 'CON', value: '20' },
    { id: 'INT', value: '10' },
    { id: 'WIS', value: '16' },
    { id: 'CHA', value: '12' },
  ],
  savingThrows: 'STR +10, CON +10, WIS +8',
  skills: 'Stealth +7, Perception +8',
  damageImmunities: [1, 5],
  conditionImmunities: [],
  damageResistance: [3],
  conditionResistance: [],
  senses: 'darkvision 120 ft., passive Perception 18',
  language: '',
  challenge: 10,
  proficiencyBonus: 4,
};
