import { CarouselCompoent } from '@/components/shared/Carousel/Carousel';
import { Section } from '@/components/shared/Sections/Section';
import { Text } from '@/components/shared/Typography/Text';

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
