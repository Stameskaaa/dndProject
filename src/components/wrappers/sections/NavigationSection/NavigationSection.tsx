import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { LucideArrowRight } from 'lucide-react';

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
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const NavigationSection = ({
  pageTitle = 'Путеводитель',
  items,
  maxWidth = 'max-w-[1300px]',
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
        animate="visible"
        className={`flex flex-col gap-6 w-full ${maxWidth}`}>
        {items.map((it, i) => (
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            key={it.id}
            custom={i}
            variants={cardVariants}
            transition={{ delay: i * 0.05 }}
            onClick={() => navigate(it.path)}
            tabIndex={0}
            className="relative h-[430px] rounded-md bg-brand-500 flex items-center cursor-pointer group overflow-hidden border border-brand-200 lg:p-6 hover:border-brand-100 active:border-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-200">
            {it.src && (
              <div
                style={{ backgroundImage: `url(${it.src})` }}
                className="inset-0 z-0 w-full rounded-md lg:w-[60%] h-full bg-cover bg-center filter"
              />
            )}

            <div
              className="z-10 pointer-events-none 
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      flex flex-col items-center justify-center 
      w-[90%] max-w-[90%] mx-auto 
      max-h-max
      rounded-md
      bg-black/72 lg:bg-transparent 
      border-brand-300 
      text-left
      p-6 lg:px-10 xl:px-20 gap-4 
      lg:static lg:inset-auto lg:w-[40%] lg:translate-x-0 lg:translate-y-0">
              <Text className="lg:text-3xl mr-auto" color="brand-100" size="2xl">
                {it.title}
              </Text>
              <Text color="text-description" size="lg">
                {it.description || ''}
              </Text>
            </div>

            <motion.div className="absolute right-0 bottom-0 p-4 flex items-center gap-2 opacity-0 group-hover:opacity-100">
              <Text as="span" color="text-secondary" className="flex items-center gap-2" size="lg">
                Подробнее
                <motion.div
                  animate={{ x: [0, 4, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    ease: 'linear',
                  }}>
                  <LucideArrowRight size={16} />
                </motion.div>
              </Text>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
