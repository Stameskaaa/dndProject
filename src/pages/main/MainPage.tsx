import { CardNavigation } from './components/CardNavigation';
import { FAQ } from './components/FAQ';
import { MainCarousel } from './components/MainCarousel';
import { CatalogSection } from './components/CatalogSection';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { MainButton } from '../../components/wrappers/buttons/mainButton/MainButton';

export const MainPage = () => {
  return (
    <>
      <Section screen={true} className="flex justify-center flex-col items-center">
        {` `}
        <MainButton />
      </Section>

      <Section paddingX="empty" screen>
        <div className="h-[70vh] flex bg-brand-400/70">
          <div className="m-auto text-center flex flex-col gap-4">
            <Text className="text-lg lg:text-2xl">НАШИ ПРИНЦИПЫ</Text>
            <Text className="!text-4xl lg:text-6xl">
              МЫ ИГРАЕМ <br /> ВДОЛГУЮ
            </Text>
            <Text size="lg" className="max-w-[700px]">
              Прекрасно, когда любовь к играм не угасает. Мы не забываем о своих игроках спустя пару
              недель, а поддерживаем их годами и десятилетиями.
            </Text>
          </div>
        </div>
        <MainCarousel />
        <CardNavigation />
        <CatalogSection />
        <FAQ />
      </Section>
    </>
  );
};
