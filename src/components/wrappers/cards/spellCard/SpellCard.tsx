import { motion } from 'framer-motion';
import { Wand } from 'lucide-react';
import { Text } from '../../typography/Text';
import styles from './SpellCard.module.css';
import classNames from 'classnames';

export interface SpellCard {
  id: string; // "acid_splash_001"
  name: string; // "Acid Splash"
  level: number; // 0
  school: string; // "Conjuration"
  classes: string[]; // ["Wizard", "Sorcerer"]
  casting_time: string; // "1 Action"
  range: string; // "60 feet"
  components: string[]; // ["V","S"]
  concentration: boolean; // false
  ritual: boolean; // false
  short_desc: string; // "Hurl a bubble of acid..."
  icon: string; // "icons/acid_splash.svg"
  levelColorKey: string; // "cantrip"
}

const schoolColors: Record<string, string> = {
  Abjuration: '#5A9BD5', // голубой — защита
  Conjuration: '#7DA86F', // зелёный — призыв
  Divination: '#D4B72B', // золотой — видение
  Enchantment: '#A166B9', // фиолетовый — очарование
  Evocation: '#E06B4C', // оранжево-красный — атака
  Illusion: '#874C9C', // тёмно-фиолетовый — иллюзия
  Necromancy: '#546E7A', // серо-синий — смерть
  Transmutation: '#E68B3C', // оранжевый — превращения
};

export const SpellCard = ({ data, onClick }: { data: SpellCard; onClick?: () => void }) => {
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
            {components?.join(', ')}
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
