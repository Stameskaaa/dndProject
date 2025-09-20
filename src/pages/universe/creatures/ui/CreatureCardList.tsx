import React from 'react';
import { motion } from 'framer-motion';
import type { NPC } from '@/features/npc/types';
import type { God } from '@/features/gods/types';
import type { HostileCreatures } from '@/features/hostileCreatures/types';
import { CreatureCard } from './CreatureCard';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';

interface CreationCardListProps {
  creatureData: (HostileCreatures | God | NPC)[];
  title?: string;
}

export const CreationCardList: React.FC<CreationCardListProps> = ({ creatureData, title }) => {
  return (
    <Section paddingY="medium" fixedWidth screen className="flex flex-col">
      {title && (
        <Text as="span" className="mx-auto mb-4" size="3xl">
          {title}
        </Text>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {creatureData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}>
            <CreatureCard creatureData={data} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
