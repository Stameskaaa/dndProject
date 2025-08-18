import { BackgroundImageCard } from '@/components/wrappers/cards/backgroundImageCard/BackgroundImageCard';
import { Section } from '@/components/wrappers/sections/Section';
import { motion } from 'framer-motion';

export const CardList = () => {
  return (
    <Section className="py-10 flex items-center justify-center flex-col h-full min-h-[calc(100vh-52px)] px-4">
      <h1 className="text-center text-3xl bg-gradient-to-br from-blue-600 to-orange-400  bg-clip-text text-transparent mb-16">
        АКТУАЛЬНЫЕ СОБЫТИЯ И ПЛАНЫ
      </h1>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex gap-6 flex-wrap justify-center w-full">
        <BackgroundImageCard
          title="Новости"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://99px.ru/sstorage/53/2013/08/tmb_76816_1460.jpg"
        />
        <BackgroundImageCard
          title="Август 2025"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://images.wallpaperscraft.ru/image/single/les_fentezi_svechenie_164368_1280x720.jpg"
        />
        <BackgroundImageCard
          title="Новости"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://99px.ru/sstorage/53/2022/06/mid_342499_180803.jpg"
        />
        <BackgroundImageCard
          title="Новости"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://99px.ru/sstorage/53/2022/06/mid_342499_180803.jpg"
        />
        <BackgroundImageCard
          title="Новости"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://99px.ru/sstorage/53/2022/06/mid_342499_180803.jpg"
        />
        <BackgroundImageCard
          title="Новости"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://99px.ru/sstorage/53/2022/06/mid_342499_180803.jpg"
        />
        <BackgroundImageCard
          title="Новости"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://99px.ru/sstorage/53/2022/06/mid_342499_180803.jpg"
        />
        <BackgroundImageCard
          title="Новости"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://99px.ru/sstorage/53/2022/06/mid_342499_180803.jpg"
        />
        <BackgroundImageCard
          title="Новости"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!"
          src="https://99px.ru/sstorage/53/2022/06/mid_342499_180803.jpg"
        />
      </motion.div>
    </Section>
  );
};
