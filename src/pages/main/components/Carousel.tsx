import { CarouselCompoent } from '@/components/wrappers/media/carousel/Carousel';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';

export const Carousel = () => {
  return (
    <Section className="flex items-center justify-center flex-col h-full min-h-[calc(100vh-52px)] ">
      <Text size="3xl" gradient="blue-orange" className="text-center">
        Главные мероприятия клуба
      </Text>
      <CarouselCompoent />
    </Section>
  );
};
