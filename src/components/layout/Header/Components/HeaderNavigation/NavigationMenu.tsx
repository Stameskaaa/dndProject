import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LucideArrowDown } from 'lucide-react';
import styles from './NavigationMenu.module.css';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Text } from '@/components/shared/Typography/Text';

export const menuItems = [
  {
    title: 'О клубе',
    content: [
      { title: 'Что такое D&D', href: '/docs' },
      { title: 'Уникальность клуба', href: '/docs/installation' },
      { title: 'Мероприятия', href: '/docs/installation' },
      { title: 'Для новых игроков', href: '/docs/installation' },
    ],
    src: 'https://sun9-44.userapi.com/s/v1/ig2/Cmd1CC138WveJUjSujFu0BOd3M8Y6U4BL8X5DoW4PLKEe0cirjt7Y3clUV05VdrHyVeXcl9rYay5FF7YIKbFumLz.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,960x960&from=bu&cs=960x0',
  },
  {
    title: 'Миры',
    content: [{ title: 'Долина Гурван-Гол', href: '/docs/primitives/alert-dialog' }],
    src: 'https://sun9-29.userapi.com/s/v1/ig2/W5VMwVk-5lnf0EG7H-4fMcV2VIWqF-G6Dctu1ADv24pTaWLnSg6UcFCITu-bZQpYcM0aWGbIOWTcbQoIeNxUslVH.jpg?quality=95&as=32x38,48x57,72x86,108x129,160x191,240x287,360x430,480x574,540x645,640x765,720x860,1080x1290,1170x1398&from=bu&cs=1170x0',
  },
  {
    title: 'Всё для игры',
    content: [
      { title: 'Правила клуба', href: '/docs/primitives/alert-dialog' },
      { title: 'Правила D&D', href: '/docs/primitives/alert-dialog' },
      { title: 'Домашние правила', href: '/docs/primitives/alert-dialog' },
      { title: 'Персонаж', href: '/docs/primitives/alert-dialog' },
      { title: 'Избранное', href: '/docs/primitives/alert-dialog' },
    ],
    src: 'https://sun9-70.userapi.com/s/v1/ig2/HWXLgbx1js068DVYzg-7aba0KgTDV_MUiQ33hBuCxtYQARbusnBqv2VII2f-VwV5gk_imTS4f8ZtZsoKQpx85gPC.jpg?quality=95&as=32x46,48x69,72x103,108x155,160x229,240x343,360x515,480x687,540x773,640x916,720x1030,1062x1520&from=bu&cs=1062x0',
  },
  {
    title: 'Для теста',
    content: [{ title: 'Рассы', href: '/races' }],
    src: 'https://sun9-70.userapi.com/s/v1/ig2/HWXLgbx1js068DVYzg-7aba0KgTDV_MUiQ33hBuCxtYQARbusnBqv2VII2f-VwV5gk_imTS4f8ZtZsoKQpx85gPC.jpg?quality=95&as=32x46,48x69,72x103,108x155,160x229,240x343,360x515,480x687,540x773,640x916,720x1030,1062x1520&from=bu&cs=1062x0',
  },
];

export const HeaderNavigation = () => {
  return (
    <NavigationMenu.Root skipDelayDuration={500} className={styles.Root}>
      <NavigationMenu.List className={classNames(styles.MenuList, 'flex items-center gap-3.5')}>
        {menuItems.map(({ title, content, src }, i) => (
          <NavigationMenu.Item key={i}>
            <NavigationMenu.Trigger
              className={classNames(
                styles.Trigger,
                'hover:bg-brand-300 rounded-md  shadow-bottom-black  py-[6px] px-4 h-auto cursor-pointer',
              )}>
              <Text>{title}</Text>
              <LucideArrowDown
                size={14}
                className={classNames(styles.CaretDown, 'text-text-primary')}
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              className={classNames(
                styles.Content,
                'h-full w-full shadow-2xl/50 shadow-black border-none flex gap-2',
              )}>
              <React.Fragment key={src}>
                <div className="relative w-[250px] min-h-full border-none overflow-hidden">
                  <img src={src} alt="" className="w-auto h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to left, #1c2224 0%, transparent 70%)',
                    }}
                  />
                </div>

                <div
                  style={{ overscrollBehavior: 'contain' }}
                  className="flex gap-2 flex-col w-full py-3 pr-3  overflow-auto">
                  {content.map(({ title, href }, i) => (
                    <NavigationMenu.Link key={i} asChild>
                      <Link
                        className="py-2 px-3 hover:bg-brand-300 rounded-md transition-color duration-300"
                        to={href}>
                        <Text color="accent-200">{title}</Text>
                        <Text className="text-text-secondary">{title}</Text>
                      </Link>
                    </NavigationMenu.Link>
                  ))}
                </div>
              </React.Fragment>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}

        <NavigationMenu.Indicator className={styles.Indicator}>
          <div className={classNames(styles.Arrow, 'bg-brand-400')} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport
          className={classNames(
            styles.Viewport,
            'bg-brand-400 rounded-md !min-w-[500px] min-h-[380px] shadow-2xl/50 shadow-black border-none !mt-2.5 flex gap-2 z-10',
          )}
        />
      </div>
    </NavigationMenu.Root>
  );
};
