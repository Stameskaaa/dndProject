import { Wand } from 'lucide-react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import type { SpellCardType } from '@/features/spells/types';
import { Text } from '../../typography/Text';
import styles from './SpellCard.module.css';

export const SpellCard = ({ data, onClick }: { data: SpellCardType; onClick?: () => void }) => {
  const {
    name,
    level,
    school,
    casting_time,
    range,
    components,
    concentration,
    ritual,
    short_desc,
    classes,
  } = data;

  return (
    <motion.div
      onClick={onClick}
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      className={classNames(
        'flex flex-col max-w-[320px] rounded-2xl bg-brand-400 p-3 gap-2 cursor-pointer',
        styles.card,
        styles[school?.toLowerCase()],
      )}>
      <header className="flex items-center justify-between">
        <div className="flex flex-col">
          <Text className="leading-8" color="brand-100" size="xl" weight="bold">
            {name}
          </Text>
          <Text size="sm" color="text-secondary" className="uppercase leading-5">
            {level === 0 ? 'Cantrip' : `Level ${level}`} · {school}
          </Text>
        </div>
        <Wand color="white" />
      </header>

      <hr className="border-brand-100" />

      <div className="flex flex-col gap-1 text-sm">
        <Text color="text-primary" size="sm" className="leading-5">
          Время:{' '}
          <Text as="span" color="text-muted">
            {casting_time}
          </Text>
        </Text>
        <Text color="text-primary" size="sm" className="leading-5">
          Дистанция:{' '}
          <Text as="span" color="text-muted">
            {range}
          </Text>
        </Text>
        <Text color="text-primary" size="sm" className="leading-5">
          Компоненты:{' '}
          <Text as="span" color="text-muted">
            {components &&
              Object.entries(components)
                ?.map(([key, value]) => (value ? key : '-'))
                .join(', ')}
          </Text>
        </Text>
        {concentration && (
          <Text color="text-secondary" size="sm" className="mr-2 leading-5">
            🌀 Концентрация
          </Text>
        )}
        {ritual && (
          <Text color="text-secondary" size="sm" className="leading-5">
            📜 Ритуал
          </Text>
        )}
      </div>

      <hr className="border-brand-100" />

      <Text color="text-secondary" size="sm" className="leading-5">
        {short_desc}
      </Text>

      <div className="mt-auto text-right">
        <Text color="text-muted" size="sm" className="leading-5">
          {classes?.join(', ')}
        </Text>
      </div>
    </motion.div>
  );
};
