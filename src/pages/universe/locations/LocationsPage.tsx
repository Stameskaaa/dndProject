import { motion } from 'framer-motion';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { PreviewCard } from '@/components/wrappers/cards/PreviewCard/PreviewCard';
import { useNavigatePath } from '@/hooks/useNavigatePath';

export const LocationsPage = () => {
  const { navigatePath } = useNavigatePath();
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
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        {locations.map(({ name, src }, index) => (
          <motion.div
            className="flex-1"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}>
            <PreviewCard
              name={name}
              src={src}
              onClick={() => navigatePath(`/unverse/locations/${index}`)}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
