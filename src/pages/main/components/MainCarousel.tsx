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
        <Swiper
          className="mx-auto w-[1600px]"
          slideToClickedSlide={true}
          modules={[FreeMode]}
          freeMode={{
            enabled: true,
            sticky: false,
          }}
          slidesPerView="auto"
          spaceBetween={10}>
          {slides.map(({ title }, idx) => (
            <SwiperSlide
              key={idx}
              className="cursor-pointer max-w-[400px]"
              onClick={() => setActiveIndex(idx)}>
              <Text
                color={activeIndex === idx ? 'text-primary' : 'text-description'}
                size="2xl"
                className={classNames(
                  'p-6 transition-colors flex justify-center',
                  activeIndex === idx ? 'border-b-2 border-brand-100' : '',
                )}>
                <Text
                  as="span"
                  color={activeIndex === idx ? 'text-primary' : 'text-description'}
                  className={'mr-2 mt-1'}>
                  0{idx + 1}.
                </Text>
                {title}
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className={'w-full max-w-[1600px] m-auto'}
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}>
          <Swiper
            pagination={{ clickable: true }}
            speed={600}
            className={'w-full px-2'}
            spaceBetween={16}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              sticky: false,
            }}
            modules={[FreeMode, Pagination]}>
            {slides?.[activeIndex].content.map(({ title, desc }, i) => (
              <SwiperSlide key={`${activeIndex}${i}`} className="!w-auto">
                <div className="max-w-[400px] min-w-[220px] min-h-[280px] p-6 bg-brand-500 rounded-lg">
                  <Text weight="bold" size="2xl" className="mb-2">
                    {title}
                  </Text>
                  <Text color="text-secondary" size="md">
                    {desc}
                  </Text>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};
