import { motion } from 'framer-motion';
import { LocationCard } from './LocationCard';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';

export const LocationsPage = () => {
  const locations = [
    {
      name: 'Новости',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!',
      src: 'https://99px.ru/sstorage/53/2013/08/tmb_76816_1460.jpg',
    },
    {
      name: 'Новости',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!',
      src: 'https://99px.ru/sstorage/53/2013/08/tmb_76816_1460.jpg',
    },
    {
      name: 'Новости',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur deserunt tenetur suscipit, officia magnam delectus voluptate! Quae cum, consectetur nesciunt maxime soluta accusamus tenetur ad amet ipsa alias corrupti!',
      src: 'https://99px.ru/sstorage/53/2013/08/tmb_76816_1460.jpg',
    },
  ];

  return (
    <Section paddingY="medium" className="flex flex-col gap-4" screen fixedWidth>
      <Text className="mx-auto mb-4" size="4xl">
        Локации
      </Text>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}>
            <LocationCard {...loc} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
