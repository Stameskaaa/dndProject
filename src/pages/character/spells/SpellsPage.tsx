import { useNavigate, useParams } from 'react-router-dom';
import { useGetSpellsListQuery } from '@/features/spells/api';
import { arrayIsValid } from '@/helpers/arrayHelpers';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { SpellCard } from '@/pages/character/spells/components/spellCard/SpellCard';
import { SpellModal } from '@/pages/character/spells/components/spellModal/SpellModal';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const SpellsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: spellData, isLoading, isError } = useGetSpellsListQuery();

  return (
    <Section paddingY="large" fixedWidth screen>
      <Text className="my-5" size="4xl">
        Заклинания
      </Text>
      <AnimatedGridList gap={8} minW={280} isLoading={isLoading} isError={isError || !spellData}>
        {arrayIsValid(spellData) &&
          spellData.map((data) => (
            <SpellCard key={data.id} onClick={() => navigate(`${data.id}`)} data={data} />
          ))}
      </AnimatedGridList>
      <ModalWindow
        contentClassname="w-full !max-w-[600px]"
        setOpen={() => navigate('/game/character/spells')}
        open={!!id}>
        <SpellModal />
      </ModalWindow>
    </Section>
  );
};
