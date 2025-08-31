import { useNavigate, useParams } from 'react-router-dom';
import { useGetTraitsListQuery } from '@/features/traits/api';
import { arrayIsValid } from '@/helpers/arrayHelpers';
import { TraitCard } from './components/TraitCard';
import { Section } from '@/components/wrappers/sections/section/Section';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { TraitsModal } from './components/TraitsModal';

export const TraitsPage = () => {
  const { data: traitData, isLoading, isError } = useGetTraitsListQuery();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Section paddingY="medium" fixedWidth screen>
      <AnimatedGridList isLoading={isLoading} isError={isError}>
        {arrayIsValid(traitData) &&
          traitData?.map((data) => <TraitCard key={data.id} traitData={data} />)}
      </AnimatedGridList>

      {/* TODO ПЕРЕНЕСТИ В OUTLET */}
      <ModalWindow
        contentClassname="w-full !max-w-[600px]"
        setOpen={() => navigate('/resources/character/traits')}
        open={!!id}>
        <TraitsModal />
      </ModalWindow>
    </Section>
  );
};
