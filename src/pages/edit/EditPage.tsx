import {
  BookOpen,
  Newspaper,
  Sword,
  ScrollText,
  Sparkles,
  Users,
  Flame,
  Castle,
  Map,
  UserCircle,
  Bug,
  Globe,
  Star,
  BarChart3,
} from 'lucide-react';
import classNames from 'classnames';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigatePath } from '@/hooks/useNavigatePath';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';

const categories = [
  {
    title: 'Общие',
    items: [
      { name: 'Правила', path: 'rules', icon: BookOpen },
      { name: 'Новости', path: 'news', icon: Newspaper },
    ],
  },
  {
    title: 'Персонажи',
    items: [
      { name: 'Классы', path: 'class', icon: Sword },
      { name: 'Происхождения', path: 'origin', icon: ScrollText },
      { name: 'Черты', path: 'trait', icon: Sparkles },
      { name: 'Виды (расы)', path: 'race', icon: Users },
      { name: 'Заклинания', path: 'spell', icon: Flame },
    ],
  },
  {
    title: 'Игровой мир',
    items: [
      { name: 'Миры', path: 'world', icon: Globe },
      { name: 'Локации', path: 'location', icon: Map },
      { name: 'Личности (NPC)', path: 'npc', icon: UserCircle },
      { name: 'Враждебные существа', path: 'hostile-creatures', icon: Bug },
      { name: 'Страны', path: 'country', icon: Castle },
      { name: 'Божества', path: 'god', icon: Star },
    ],
  },
  {
    title: 'Дополнительно',
    items: [
      { name: 'Характеристики', path: 'characteristic', icon: BarChart3 },
      { name: 'Подклассы', path: 'subclass', icon: Sword },
    ],
  },
];

export const EditPage = () => {
  const location = useLocation();
  const { navigatePath } = useNavigatePath();

  return (
    <Section fixedWidth screen className="p-6 space-y-8 h-[full]">
      <div className="flex gap-4 items-start h-[1020px] max-h-[calc(100vh-124px)] min-h-[600px]">
        <div className="w-[200px] border border-brand-300 h-full bg-brand-500  flex flex-col rounded-md overflow-x-hidden overflow-y-auto">
          {categories.map(({ title, items }, i) => {
            return (
              <div key={title}>
                <Text
                  color="text-muted"
                  size="lg"
                  weight="bold"
                  className={classNames(
                    i !== 0 ? 'border-t border-brand-200 ' : '',
                    'py-1 px-4 bg-brand-400',
                  )}>
                  {title}
                </Text>
                {items.map(({ name, icon: Icon, path }) => {
                  const isActive = location.pathname.includes(path);
                  return (
                    <div
                      key={name}
                      onClick={() => navigatePath(`/edit/${path}`)}
                      className={classNames(
                        'border-t cursor-pointer hover:bg-brand-200 active:bg-brand-200/60 duration-300 border-brand-200 flex gap-2 items-center text-brand-100 py-[10px] px-4',
                        isActive ? '!bg-brand-300' : '',
                      )}>
                      <Icon size={18} />
                      <Text color="text-secondary">{name}</Text>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <AnimatePresence mode="wait" key={location.pathname}>
          <motion.div
            className="flex-1 h-full min-h-0"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};
