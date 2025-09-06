import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Filters } from '../ui/Filters';
import { CharacterSection } from '../ui/CharacterSection';
import { SpellCard } from '@/pages/character/spells/components/spellCard/SpellCard';
import { SpellModal } from '@/pages/character/spells/components/spellModal/SpellModal';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { spellMock } from '@/features/spells/mock';

const spellSelectors = [
  {
    name: 'spellSchool',
    placeholder: 'Выберите школу',
    label: 'Школы магии',
    multiple: false,
    options: [
      { id: 'evocation', value: 'Эвокация' },
      { id: 'illusion', value: 'Иллюзия' },
      { id: 'necromancy', value: 'Некромантия' },
    ],
  },
  {
    name: 'spellCircle',
    placeholder: 'Выберите круг',
    label: 'Круги',
    multiple: false,
    options: [
      { id: '1', value: 'Первый круг' },
      { id: '2', value: 'Второй круг' },
      { id: '3', value: 'Третий круг' },
    ],
  },
  {
    name: 'spellClass',
    label: 'Классы',
    placeholder: 'Выберите класс',
    multiple: false,
    options: [
      { id: 'wizard', value: 'Волшебник' },
      { id: 'cleric', value: 'Жрец' },
      { id: 'druid', value: 'Друид' },
    ],
  },
];

export const SpellsPage = () => {
  const navigate = useNavigate();
  const { control } = useForm();
  // const { data: spellData, isLoading, isError } = useGetSpellsListQuery();

  return (
    <CharacterSection>
      <Filters selectors={spellSelectors} control={control} inputName="name" />
      <AnimatedGridList gap={8} minW={280} isLoading={false} isError={false}>
        {
          // arrayIsValid(spellData) &&
          Array.from({ length: 20 }).map((_, i) => (
            <SpellCard key={i} onClick={() => navigate(`${i}`)} data={spellMock} />
          ))
        }
      </AnimatedGridList>
      <SpellModal />
    </CharacterSection>
  );
};
