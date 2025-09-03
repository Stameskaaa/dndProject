import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ROUTES } from '@/routes/routes';
import { getNavigationRoutes } from '@/routes/helpers';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';

const characterDescriptions = [
  { id: 'classes', description: 'Роли персонажей, определяют их умения и стиль игры.' },
  { id: 'races', description: 'Расы и существа, задают особенности тела и мировоззрения.' },
  { id: 'origins', description: 'История персонажа до начала игры, его корни и прошлое.' },
  { id: 'traits', description: 'Особые навыки и характеристики, которые выделяют героя.' },
  { id: 'spells', description: 'Магические умения, доступные персонажу.' },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 120, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      y: { type: 'tween', stiffness: 500, damping: 30 },
      scale: { type: 'tween', stiffness: 500, damping: 25 },
      opacity: { duration: 1, delay: i * 0.15 },
    },
  }),
};

export const CharacterPage = () => {
  const navigate = useNavigate();
  const routes = getNavigationRoutes(ROUTES, 'character');

  return (
    <Section paddingY="medium" fixedWidth screen className="items-center flex flex-col">
      <Text className="mx-auto mb-6" size="4xl">
        Персонаж
      </Text>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 w-full max-w-[700px]">
        {routes.map(({ title, src, fullPath, path }, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            onClick={() => navigate(fullPath)}
            className="relative h-[200px] flex cursor-pointer rounded-xl overflow-hidden border-2 border-brand-300 p-4 hover:border-brand-100 active:border-brand-300">
            {/* фон */}
            <div
              style={{ backgroundImage: `url(${src})` }}
              className="absolute inset-0 -z-0 w-full h-full bg-cover bg-center filter blur-[2px] hover:blur-none transition-all duration-300"
            />

            {/* текст */}
            <div className="relative pointer-events-none m-auto p-4 rounded-xl bg-black/70 border-brand-300 text-center flex flex-col gap-2 max-w-[400px]">
              <Text color="brand-100" size="3xl">
                {title}
              </Text>
              <Text color="text-secondary" size="lg">
                {characterDescriptions.find(({ id }) => id === path)?.description || ''}
              </Text>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
