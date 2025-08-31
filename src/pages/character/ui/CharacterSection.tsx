import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/wrappers/sections/section/Section';

const MotionSection = motion.create(Section);

export const CharacterSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <MotionSection
      className={className}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      paddingY="medium"
      fixedWidth
      screen>
      {children}
    </MotionSection>
  );
};
