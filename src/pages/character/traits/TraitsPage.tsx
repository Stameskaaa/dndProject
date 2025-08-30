import { useNavigate, useParams } from 'react-router-dom';
import { useGetTraitsListQuery } from '@/features/traits/api';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { TraitCard } from './components/TraitCard';

export const TraitsPage = () => {
  const { data: traitData, isLoading } = useGetTraitsListQuery();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Section fixedWidth screen>
      <Text size="4xl">Черты</Text>
      {isLoading ? (
        <CubeLoader />
      ) : (
        <>
          {' '}
          <div className="grid grid-cols-4 gap-4">
            {/* TODO в хелперы вынести проверку массива */}
            {traitData &&
              traitData.length > 0 &&
              traitData.map((data) => (
                <TraitCard key={data.id} traitData={data} />
                // <SpellCard key={data.id} onClick={() => navigate(`${data.id}`)} data={data} />
              ))}
          </div>
          {/* TODO ПЕРЕНЕСТИ В OUTLET */}
          <ModalWindow
            contentClassname="w-full !max-w-[600px]"
            setOpen={() => navigate('/game/character/spells')}
            open={!!id}></ModalWindow>
        </>
      )}
    </Section>
  );
};
