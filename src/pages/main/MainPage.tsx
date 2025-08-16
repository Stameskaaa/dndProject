import { CardList } from './components/CardList';
import { Carousel } from './components/Carousel';
import { MainButton } from '../../components/shared/Buttons/MainButton';
import { Section } from '@/components/shared/Sections/Section';
import { ExpandingCard } from '@/components/shared/Cards/ExpandingCard/ExpandingCard';
import { FixedWidthSection } from '@/components/shared/Sections/FixedWidthSection';
import { FAQ } from '@/components/shared/FAQ/FAQ';
import { Text } from '@/components/shared/Typography/Text';
import { StarsBackground } from '@/components/shared/Background/StarsBackground';

export const MainPage = () => {
  return (
    <>
      {/* <StarsBackground className="finisher-header w-full h-[1400px] flex items-center justify-center"></StarsBackground> */}
      <Section screen={true} className="flex justify-center flex-col items-center">
        <Text size="xl">Screen</Text>
        <MainButton />
      </Section>

      <FixedWidthSection>
        <Carousel />

        <Section
          screen={true}
          className="flex items-center justify-center flex-col h-full min-h-[calc(100vh-52px)]">
          <Text size="3xl" gradient="blue-orange" className="text-center">
            О нас
          </Text>
          <ExpandingCard />
        </Section>

        <CardList />

        <Section className="grid place-items-center" screen={true}>
          <Text className="text-center mb-8" size="3xl" gradient="blue-orange">
            Часто задаваемые вопросы
          </Text>
          <FAQ />
        </Section>
      </FixedWidthSection>
    </>
  );
};
