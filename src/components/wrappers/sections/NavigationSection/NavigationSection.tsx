import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';

type NavItem = {
  id: string;
  title: string;
  src?: string;
  description?: string;
  path: string;
};

interface NavigationSectionProps {
  pageTitle?: string;
  items: NavItem[];
  maxWidth?: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { opacity: { duration: 0.4 }, y: { type: 'tween' }, delay: i * 0.06 },
  }),
};

export const NavigationSection = ({
  pageTitle = 'Путеводитель',
  items,
  maxWidth = 'max-w-[900px]',
}: NavigationSectionProps) => {
  const navigate = useNavigate();

  return (
    <Section paddingY="medium" fixedWidth screen className="items-center flex flex-col">
      <Text className="mx-auto mb-6" size="4xl">
        {pageTitle}
      </Text>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={`flex flex-col gap-6 w-full ${maxWidth}`}>
        {items.map((it, i) => (
          <motion.div
            key={it.id}
            custom={i}
            variants={itemVariants}
            onClick={() => navigate(it.path)}
            tabIndex={0}
            className="relative h-[280px] flex cursor-pointer rounded-xl group overflow-hidden border-2 duration-500 border-brand-300 p-4 hover:border-brand-100 active:border-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-200">
            {it.src && (
              <div
                style={{ backgroundImage: `url(${it.src})` }}
                className="absolute inset-0 z-0 w-full h-full bg-cover bg-center filter transition-transform duration-500 group-hover:scale-105"
              />
            )}

            <div className="relative z-10 pointer-events-none m-auto p-4 rounded-xl bg-black/72 border-brand-300 text-center flex flex-col gap-2 max-w-[640px]">
              <Text color="brand-100" size="3xl">
                {it.title}
              </Text>
              <Text color="text-secondary" size="lg">
                {it.description || ''}
              </Text>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
