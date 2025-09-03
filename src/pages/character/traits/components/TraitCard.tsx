import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Trait } from '@/features/traits/types';
import { Text } from '@/components/wrappers/typography/Text';
import {
  cardTransition,
  cardVariants,
} from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import classNames from 'classnames';
import { CharacterIcon } from '../../ui/CharacterIcon';
import { trait_types } from '@/mock/mock';
export const TraitCard = ({ traitData }: { traitData: Trait }) => {
  const navigate = useNavigate();
  const active = false;
  const Icon = trait_types.find(({ id }) => id === traitData.trait_type_id)?.icon;

  return (
    <motion.div
      className={classNames(
        active ? '!border-brand-100 border-2' : '',
        'cursor-pointer w-full border border-transparent active:bg-brand-300/60  transition-colors duration-300 bg-brand-400 hover:bg-brand-300 shadow-xl shadow-black rounded-lg',
      )}
      variants={cardVariants}
      transition={cardTransition}
      onClick={() => navigate(`${traitData.id}`)}>
      <div className="px-5 py-3 h-full flex justify-between gap-1">
        <div className="flex flex-col gap-2">
          <Text style={{ lineHeight: 1 }} color="brand-100" size="lg">
            {traitData.name}
          </Text>
          <ul className="list-disc pl-5 space-y-1 text-brand-100 text-md">
            {traitData?.worlds_data?.map(({ name }, i) => {
              return (
                <li key={i}>
                  <Text size="sm" color="text-secondary">
                    {name}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>
        {Icon && (
          <CharacterIcon>
            <Icon />
          </CharacterIcon>
        )}
      </div>
    </motion.div>
  );
};
