import { CardList } from './components/CardList';
import { Carousel } from './components/Carousel';
import { MainButton } from '../../components/wrappers/buttons/mainButton/MainButton';
import { ExpandingCard } from '@/components/wrappers/cards/expandingCard/ExpandingCard';
import { FAQ } from '@/components/wrappers/sections/FAQ/FAQ';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';

export const MainPage = () => {
  return (
    <>
      {/* <StarsBackground className="finisher-header w-full h-[1400px] flex items-center justify-center"></StarsBackground> */}
      <Section screen={true} className="flex justify-center flex-col items-center">
        <Text size="xl">Screen</Text>
        <MainButton />
      </Section>

      <Section fixedWidth={true}>
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
      </Section>
    </>
  );
};
