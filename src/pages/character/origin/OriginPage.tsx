import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { Section } from '@/components/wrappers/sections/section/Section';
import { useGetOriginsListQuery } from '@/features/origin/api';
import { OriginCard } from './components/OriginCard';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { OriginModal } from './components/OriginModal';
import { useNavigate, useParams } from 'react-router-dom';

export const OriginPage = () => {
  const { data: originData, isLoading } = useGetOriginsListQuery();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Section fixedWidth={true} screen={true}>
      {isLoading ? (
        <CubeLoader />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[20px]">
          {/* TODO проверка на массив вынести рендер таких списков мб типо грид */}
          {originData &&
            originData.length > 0 &&
            originData?.map((data) => <OriginCard key={data.id} originData={data} />)}
        </div>
      )}
      <ModalWindow
        contentClassname="w-full !max-w-[600px]"
        setOpen={() => navigate('/game/character/origins')}
        open={!!id}>
        <OriginModal />
      </ModalWindow>
    </Section>
  );
};
