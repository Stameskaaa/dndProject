import { motion } from 'framer-motion';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import { useNavigatePath } from '@/hooks/useNavigatePath';

const IMAGES = [
  {
    src: 'https://cdna.artstation.com/p/assets/images/images/081/638/144/large/anato-finnstark-libera.jpg?1730820426',
    path: '/',
    text: 'Новости',
    description: 'Какое то описание',
  },
  {
    src: 'https://cdna.artstation.com/p/assets/images/images/085/023/762/large/anato-finnstark-img-20230809-152145w34.jpg?1739801345',
    path: '/',
    text: 'Как начать игру',
    description: 'Какое то описание',
  },
  {
    src: 'https://cdna.artstation.com/p/assets/images/images/083/778/198/large/anato-finnstark-eb.jpg?1736781617',
    path: '/universe/worlds',
    text: 'Вселенная',
    description: 'Какое то описание',
  },
  {
    src: 'https://cdnb.artstation.com/p/assets/images/images/066/387/197/large/anato-finnstark-f.jpg?1692782563',
    path: '/rules',
    text: 'Правила',
    description: 'Какое то описание',
  },
];

export const CardNavigation = () => {
  const { navigatePath } = useNavigatePath();
  return (
    <Section fixedWidth screen className="mx-auto flex items-center justify-center flex-col ">
      <Text className="mb-14" size="3xl">
        АКТУАЛЬНЫЕ СОБЫТИЯ И ПЛАНЫ
      </Text>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full flex justify-center">
        <Carousel
          opts={{
            dragFree: true,
            containScroll: 'trimSnaps',
            align: 'center',
          }}
          className="w-full">
          <CarouselContent style={{ margin: 0 }} className="flex items-center gap-6 justify-start">
            {IMAGES.map(({ src, text, path }, i) => (
              <CarouselItem
                onClick={() => navigatePath(path)}
                key={i}
                style={{ padding: 0 }}
                className="flex-shrink-0 cursor-pointer group max-w-[440px] h-[440px] min-w-[400px] min-h-[400px] flex first:ml-0 ml-[-95px]">
                <article className="flex flex-col w-full h-full overflow-hidden gap-2">
                  <div
                    className="w-full h-[calc(100%_-_64px)] relative overflow-hidden group"
                    style={{
                      WebkitClipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)',
                      clipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)',
                    }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                      <Text size="xl" color="brand-100">
                        Какое то описание
                      </Text>
                    </div>
                    <img
                      src={src}
                      alt={`img-${i}`}
                      className="w-full h-full object-cover block"
                      draggable={false}
                    />
                  </div>

                  <div className="pl-[20%] h-16 flex flex-col justify-center">
                    <Text className="leading-6" size="xl">
                      {text}
                    </Text>
                    <Text color="brand-100" className="underline" size="md">
                      Узнать больше
                    </Text>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </Section>
  );
};
