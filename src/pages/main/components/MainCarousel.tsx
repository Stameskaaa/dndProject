import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { useState } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const slides = [
  {
    title: 'Игроки важнее всего',
    content: Array.from({ length: 5 }).map((_, i) => ({
      title: `В чем идея ${i + 1}?`,
      desc: 'Представьте: ваше сегодняшнее сражение с рейдовым боссом, спасенная деревня или даже разрушенный замок...',
    })),
  },
  {
    title: 'Команда важнее всего',
    content: Array.from({ length: 5 }).map((_, i) => ({
      title: `Идея команды ${i + 1}`,
      desc: 'Здесь рассказываем про командные задачи и стратегию взаимодействия игроков.',
    })),
  },
  {
    title: 'Развитие персонажей',
    content: Array.from({ length: 5 }).map((_, i) => ({
      title: `Навык ${i + 1}`,
      desc: 'Описание навыка или возможности персонажа в игре.',
    })),
  },
  {
    title: 'Мир игры',
    content: Array.from({ length: 5 }).map((_, i) => ({
      title: `Локация ${i + 1}`,
      desc: 'Краткое описание локации и событий в ней.',
    })),
  },
  {
    title: 'События',
    content: Array.from({ length: 5 }).map((_, i) => ({
      title: `Событие ${i + 1}`,
      desc: 'Описание текущих игровых событий и их влияние на мир.',
    })),
  },
];

export const MainCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section paddingX="empty" className="flex-1">
      <div className="bg-brand-300/70 flex">
        <Carousel
          opts={{
            dragFree: true,
            containScroll: 'trimSnaps',
          }}
          className="mx-auto w-[1600px]">
          <CarouselContent className="flex gap-2">
            {slides.map(({ title }, idx) => (
              <CarouselItem
                key={idx}
                className="cursor-pointer max-w-[400px] flex-shrink-0"
                onClick={() => setActiveIndex(idx)}>
                <Text
                  color={activeIndex === idx ? 'text-primary' : 'text-description'}
                  size="2xl"
                  className={classNames(
                    'p-6 transition-colors flex justify-center duration-400 border-b-2 border-transparent',
                    activeIndex === idx ? '!border-brand-100' : '',
                  )}>
                  <Text
                    as="span"
                    color={activeIndex === idx ? 'text-primary' : 'text-description'}
                    className={'mr-2 mt-1 transition-colors duration-400'}>
                    0{idx + 1}.
                  </Text>
                  {title}
                </Text>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="w-full max-w-[1600px] m-auto"
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}>
          <Carousel
            opts={{
              dragFree: true,
              containScroll: 'trimSnaps',
            }}
            className="w-full px-2">
            <CarouselContent className="flex gap-4">
              {slides?.[activeIndex].content.map(({ title, desc }, i) => (
                <CarouselItem
                  key={`${activeIndex}-${i}`}
                  className="flex-shrink-0 max-w-[400px] min-w-[220px] min-h-[280px]">
                  <div className="p-6 bg-brand-500 rounded-lg flex flex-col">
                    <Text weight="bold" size="2xl" className="mb-2">
                      {title}
                    </Text>
                    <Text color="text-secondary" size="md">
                      {desc}
                    </Text>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};
