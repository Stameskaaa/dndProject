import { SpellCard } from '@/components/wrappers/cards/spellCard/SpellCard';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { SpellModal } from '@/components/wrappers/modals/spellModal/SpellModal';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';
import { useGetSpellsListQuery } from '@/features/spells/api';
import { useNavigate, useParams } from 'react-router-dom';

export const SpellsPage = () => {
  const { data, isLoading } = useGetSpellsListQuery();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Section fixedWidth screen>
      <Text size="4xl">Заклинания</Text>
      {isLoading ? (
        <CubeLoader />
      ) : (
        <>
          {' '}
          <div className="grid grid-cols-4 gap-4">
            {/* TODO в хелперы вынести проверку массива */}
            {data &&
              data.length > 0 &&
              data.map((data) => (
                <SpellCard key={data.id} onClick={() => navigate(`${data.id}`)} data={data} />
              ))}
          </div>
          {/* TODO ПЕРЕНЕСТИ В OUTLET */}
          <ModalWindow setOpen={() => navigate('/game/character/spells')} open={!!id}>
            <SpellModal />
          </ModalWindow>{' '}
        </>
      )}
    </Section>
  );
};
