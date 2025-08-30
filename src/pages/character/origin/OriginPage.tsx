import { useNavigate, useParams } from 'react-router-dom';
import { useGetOriginsListQuery } from '@/features/origin/api';
import { arrayIsValid } from '@/helpers/arrayHelpers';
import { OriginCard } from './components/OriginCard';
import { OriginModal } from './components/OriginModal';
import { Section } from '@/components/wrappers/sections/section/Section';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const OriginPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: originData, isLoading, isError } = useGetOriginsListQuery();

  return (
    <Section paddingY="medium" fixedWidth={true} screen={true}>
      <AnimatedGridList isLoading={isLoading} isError={isError}>
        {arrayIsValid(originData) &&
          originData?.map((data) => <OriginCard key={data.id} originData={data} />)}
      </AnimatedGridList>
      <ModalWindow
        contentClassname="w-full !max-w-[600px]"
        setOpen={() => navigate('/game/character/origins')}
        open={!!id}>
        <OriginModal />
      </ModalWindow>
    </Section>
  );
};
