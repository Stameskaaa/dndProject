import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGetSpellsListQuery } from '@/features/spells/api';
import { arrayIsValid } from '@/helpers/arrayHelpers';
import { Filters } from '../ui/Filters';
import { CharacterSection } from '../ui/CharacterSection';
import { SpellCard } from '@/pages/character/spells/components/spellCard/SpellCard';
import { SpellModal } from '@/pages/character/spells/components/spellModal/SpellModal';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

const spellSelectors = [
  {
    name: 'spellSchool',
    label: 'Школа магии',
    multiple: false,
    options: [
      { id: 'evocation', value: 'Эвокация' },
      { id: 'illusion', value: 'Иллюзия' },
      { id: 'necromancy', value: 'Некромантия' },
    ],
  },
  {
    name: 'spellCircle',
    label: 'Круг',
    multiple: false,
    options: [
      { id: '1', value: 'Первый круг' },
      { id: '2', value: 'Второй круг' },
      { id: '3', value: 'Третий круг' },
    ],
  },
  {
    name: 'spellClass',
    label: 'Класс',
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
  const { data: spellData, isLoading, isError } = useGetSpellsListQuery();

  return (
    <CharacterSection>
      <Filters selectors={spellSelectors} control={control} inputName="name" />
      <AnimatedGridList gap={8} minW={280} isLoading={isLoading} isError={isError || !spellData}>
        {arrayIsValid(spellData) &&
          spellData.map((data) => (
            <SpellCard key={data.id} onClick={() => navigate(`${data.id}`)} data={data} />
          ))}
      </AnimatedGridList>
      <SpellModal />
    </CharacterSection>
  );
};
