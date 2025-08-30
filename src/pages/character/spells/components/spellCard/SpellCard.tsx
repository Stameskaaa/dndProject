import classNames from 'classnames';
import { motion } from 'framer-motion';
import type { SpellDataType } from '@/features/spells/types';
import { schoolList } from '@/features/spells/constant';
import styles from './SpellCard.module.css';
import { Badge } from '../../../../../components/wrappers/badge/Badge';
import { Text } from '../../../../../components/wrappers/typography/Text';
import { SpellDescription } from '@/pages/character/spells/components/spellDescription/SpellDescription';
import {
  cardTransition,
  cardVariants,
} from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const SpellCard = ({ data, onClick }: { data: SpellDataType; onClick?: () => void }) => {
  const { name, level, school_id, description, classes } = data;

  const school = schoolList.find(({ id }) => id == school_id);
  const Icon = school?.icon;

  return (
    <motion.div
      variants={cardVariants}
      transition={cardTransition}
      onClick={onClick}
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      className={classNames(
        'flex flex-col w-full rounded-2xl bg-brand-400 p-3 gap-2 cursor-pointer',
        styles.card,
        styles[school_id],
      )}>
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Text as="span" className="leading-5" color="brand-100" size="xl" weight="bold">
            {name}
          </Text>
          <Text size="sm" color="text-secondary" className="leading-5">
            {level === 0 ? 'Кантрип' : `Уровень ${level}`} · {school?.title}
          </Text>
        </div>
        {Icon ? <Icon width={40} height={40} /> : null}
      </header>
      <hr className="border-brand-100" />

      <SpellDescription data={data} />

      <hr className="border-brand-100" />

      <Text color="text-secondary" size="sm" className="leading-5">
        {description}
      </Text>

      <div className="mt-auto flex justify-end flex-row gap-1">
        {classes.map(({ name, id }) => (
          <Badge key={id}>{name}</Badge>
        ))}
      </div>
    </motion.div>
  );
};
