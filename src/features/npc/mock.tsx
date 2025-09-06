import type { NPC } from './types';

export const npcData: NPC[] = [
  {
    id: 1,
    name: 'Thoren Blackleaf',
    language: 'Russian',
    src: 'https://img.freepik.com/free-photo/fantasy-group-adventurers_23-2151470674.jpg',
    status: 'Жив',
    fraction: 'Гильдия Теней',
    md_description: `### Биография
Thoren Blackleaf — мастер скрытности и стратегических манёвров. С детства обучался в гильдии воров, где совершенствовал свои навыки: от лазания по крышам до тихого открывания замков. Его способности позволяли ему оставаться незамеченным даже среди хорошо охраняемых замков.

### Характер
Thoren — человек контрастов. С одной стороны, он хладнокровен и расчетлив, с другой — верен своим друзьям и готов помочь невинным. Любит наблюдать за природой и изучать растения, что помогает ему в приготовлении зелий и ядов.

### Навыки и умения
- Искусное владение кинжалами и луком
- Мастерство скрытного передвижения
- Навыки разведки и слежки
- Легкость в обмане и маскировке

### Приключения
Thoren участвовал в многочисленных миссиях гильдии, включая кражи артефактов, проникновения в замки и спасение заложников. Его репутация скрытного и меткого агента делает его ценным союзником для тех, кто ищет тайные пути и обходные манёвры.

### Интересные факты
- Ночью любит играть на флейте в лесу
- Собирает редкие травы и коренья для зелий
- Известен как «Тень северных лесов» среди охотников и стражей
- Любит тихие прогулки под луной и наблюдение за звёздами`,
    md_history:
      'Вырос в скрытом анклаве воров, где освоил искусство скрытности и ловкости. Со временем стал мастером шпионажа и незаметного передвижения, известным даже в соседних королевствах.',
    md_fun_facts: 'Любит собирать редкие травы и играть на флейте ночью у костра.',
    country_ids: [1],
    country_data: [{ id: 1, name: 'Нордланд' }],
    location_ids: [1, 2],
    location_data: [
      { id: 1, name: 'Долина Гурван-Гол' },
      { id: 2, name: 'Горы Морозного Пика' },
    ],
  },
  {
    id: 2,
    name: 'Eldira Sunmist',
    language: 'Russian',
    src: 'https://i.pinimg.com/736x/f1/ad/ef/f1adef87d089ec0e8569259242a0a982.jpg',
    status: 'Deceased',
    fraction: 'Circle of Mages',
    md_description: 'An elf mage who studied the stars.',
    md_history: 'Her knowledge of celestial magic saved her kingdom multiple times.',
    md_fun_facts: 'Had a pet owl named Lumen.',
    country_ids: [2],
    country_data: [{ id: 2, name: 'Elvaria' }],
    location_ids: [3],
    location_data: [{ id: 3, name: 'Crystal Lake' }],
  },
  {
    id: 3,
    name: 'Borin Ironfist',
    language: 'Russian',
    src: 'https://i.pinimg.com/1200x/93/01/33/93013399268cd83136e7fcc20294fae2.jpg',
    status: 'Alive',
    fraction: 'Dwarven Clan Hammerstone',
    md_description: 'A dwarven warrior known for his strength and loyalty.',
    md_history: 'Fought in the Great Battle of Stonehold.',
    md_fun_facts: 'Brews his own ale and enters competitions every year.',
    country_ids: [3],
    country_data: [{ id: 3, name: 'Stonehelm' }],
    location_ids: [4],
    location_data: [{ id: 4, name: 'Stoneforge Keep' }],
  },
  {
    id: 4,
    name: 'Lyria Moonshadow',
    language: 'Russian',
    src: 'https://i.pinimg.com/1200x/55/13/37/551337bc0711b554324d5d51dd9e24da.jpg',
    status: 'Alive',
    fraction: 'Elven Rangers',
    md_description: 'A scout and tracker, protector of the enchanted forests.',
    md_history: 'Served the High Elves as a messenger and spy.',
    md_fun_facts: 'Can communicate with animals.',
    country_ids: [2],
    country_data: [{ id: 2, name: 'Elvaria' }],
    location_ids: [5],
    location_data: [{ id: 5, name: 'Silverleaf Woods' }],
  },
  {
    id: 5,
    name: 'Garrick Stonebreaker',
    language: 'Russian',
    src: 'https://i.pinimg.com/1200x/86/cb/ae/86cbaea2b3bc3ee164c4aea6f099104e.jpg',
    status: 'Alive',
    fraction: 'Mercenaries Guild',
    md_description: 'A brute mercenary who takes on dangerous jobs.',
    md_history: 'Traveled across many lands seeking fortune.',
    md_fun_facts: 'Collects rare weapons from defeated foes.',
    country_ids: [3],
    country_data: [{ id: 3, name: 'Stonehelm' }],
    location_ids: [4, 6],
    location_data: [
      { id: 4, name: 'Stoneforge Keep' },
      { id: 6, name: 'Ironvale Pass' },
    ],
  },
  {
    id: 6,
    name: 'Selene Nightwhisper',
    language: 'Russian',
    src: 'https://i.pinimg.com/736x/b1/77/3d/b1773dbe0055c398ff5d0b33cfd5c8f9.jpg',
    status: 'Alive',
    fraction: "Assassin's Order",
    md_description: 'A stealthy agent of the shadows.',
    md_history: 'Trained in secret since childhood.',
    md_fun_facts: 'Never seen eating in public.',
    country_ids: [1],
    country_data: [{ id: 1, name: 'Nordland' }],
    location_ids: [1, 7],
    location_data: [
      { id: 1, name: 'Gurvan-Gol Valley' },
      { id: 7, name: 'Ravenhill' },
    ],
  },
  {
    id: 7,
    name: 'Orin Deepforge',
    language: 'Russian',
    src: 'https://i.pinimg.com/736x/c0/68/89/c06889cdbd7c3fb8808ec17fb00651b9.jpg',
    status: 'Deceased',
    fraction: 'Dwarven Clan Hammerstone',
    md_description: 'An old smith known for crafting legendary weapons.',
    md_history: 'Created swords for kings and heroes.',
    md_fun_facts: 'Had a pet mechanical sparrow.',
    country_ids: [3],
    country_data: [{ id: 3, name: 'Stonehelm' }],
    location_ids: [4],
    location_data: [{ id: 4, name: 'Stoneforge Keep' }],
  },
  {
    id: 8,
    name: 'Talia Windrunner',
    language: 'Russian',
    src: 'https://i.pinimg.com/736x/d8/95/3a/d8953a85fb0583e00cb118d70f2ad83e.jpg',
    status: 'Alive',
    fraction: 'Airship Pirates',
    md_description: "Captain of the skyship 'Stormhawk'.",
    md_history: 'Raided trade routes in northern seas.',
    md_fun_facts: 'Always carries a compass gifted by her mentor.',
    country_ids: [1],
    country_data: [{ id: 1, name: 'Nordland' }],
    location_ids: [8],
    location_data: [{ id: 8, name: 'Cloudport Harbor' }],
  },
  {
    id: 9,
    name: 'Fendrel Oakheart',
    language: 'Russian',
    src: 'https://i.pinimg.com/736x/a9/47/16/a94716a1fe313371318e7486f1d44fb4.jpg',
    status: 'Alive',
    fraction: 'Forest Druids',
    md_description: 'Protector of the sacred groves.',
    md_history: 'Studied ancient magic and natural balance.',
    md_fun_facts: 'Can make plants grow faster with song.',
    country_ids: [2],
    country_data: [{ id: 2, name: 'Elvaria' }],
    location_ids: [5],
    location_data: [{ id: 5, name: 'Silverleaf Woods' }],
  },
  {
    id: 10,
    name: 'Kara Stormblade',
    language: 'Russian',
    src: 'https://i.pinimg.com/736x/70/0a/10/700a10803243439136d5208316bfebff.jpg',
    status: 'Alive',
    fraction: 'Knight Order of Dawn',
    md_description: 'A valiant knight sworn to protect the realm.',
    md_history: 'Fought in many battles against dark forces.',
    md_fun_facts: 'Never removes her helmet in public.',
    country_ids: [1],
    country_data: [{ id: 1, name: 'Nordland' }],
    location_ids: [1, 8],
    location_data: [
      { id: 1, name: 'Gurvan-Gol Valley' },
      { id: 8, name: 'Cloudport Harbor' },
    ],
  },
];
