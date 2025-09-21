import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';
import { motion } from 'framer-motion';
import React from 'react';

const IMAGES = [
  'https://cdna.artstation.com/p/assets/images/images/081/638/144/large/anato-finnstark-libera.jpg?1730820426',
  'https://cdna.artstation.com/p/assets/images/images/081/638/144/large/anato-finnstark-libera.jpg?1730820426',
  'https://cdna.artstation.com/p/assets/images/images/081/638/144/large/anato-finnstark-libera.jpg?1730820426',
  // добавь ещё если нужно
];

export const CardList = () => {
  return (
    <Section className="py-10 flex items-center justify-center flex-col h-full min-h-[calc(100vh-52px)] px-4">
      <h1 className="text-center text-3xl bg-gradient-to-br from-blue-600 to-orange-400 bg-clip-text text-transparent mb-16">
        АКТУАЛЬНЫЕ СОБЫТИЯ И ПЛАНЫ
      </h1>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full">
        <CardRow />
      </motion.div>
    </Section>
  );
};

function CardRow() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap justify-center items-start">
        {IMAGES.map((src, i) => (
          <article
            key={i}
            className="card-wrapper flex flex-col items-center"
            aria-label={`card-${i}`}>
            <div className="card overflow-hidden">
              <img
                src={src}
                alt={`img-${i}`}
                className="w-full h-full object-cover block"
                style={{
                  clipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)',
                }}
              />
            </div>

            <div className="mt-3 flex items-center gap-3">
              <Text>Короткий текст</Text>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .card {
          width: 500px;
          height: 500px;
        }

        .card-wrapper + .card-wrapper .card {
          margin-left: -85px;
        }

        @media (max-width: 1100px) {
          .card {
            width: 320px;
            height: 320px;
          }
          .card-wrapper + .card-wrapper .card {
            margin-left: -40px;
          }
        }

        @media (max-width: 420px) {
          .card-wrapper + .card-wrapper .card {
            margin-left: 0;
          }
          .card {
            width: 100%;
            max-width: 320px;
            height: auto;
            aspect-ratio: 1 / 1;
          }
        }
      `}</style>
    </div>
  );
}
