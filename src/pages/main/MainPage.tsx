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
      <Section screen={true} className="flex justify-center flex-col items-center">
        <img
          className="w-full filter blur-[1px] shadow-[inset_0_0_30px_rgba(0,0,0,0.7)]"
          src="https://i.pinimg.com/1200x/8a/0d/00/8a0d00c87c9c15a60f83d69215f9e8c6.jpg"
        />
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
