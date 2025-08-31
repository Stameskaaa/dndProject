import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import styles from './NavigationMenu.module.css';
import { HEADER_DISABLED_IDS, ROUTES } from '@/routes/routes';
import { Text } from '@/components/wrappers/typography/Text';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const HeaderNavigation = () => {
  const filteredRoutes = ROUTES[0]?.children?.filter(
    ({ id }) => !(id && HEADER_DISABLED_IDS.includes(id)),
  );

  return (
    <NavigationMenu.Root className={classNames(styles.Root, '!justify-end')}>
      <NavigationMenu.List className={classNames(styles.MenuList, 'flex items-center gap-3.5')}>
        {filteredRoutes?.map(({ title, children, src }, i) => (
          <NavigationMenu.Item key={i}>
            <NavigationMenu.Trigger
              className={classNames(
                styles.Trigger,
                'hover:bg-brand-300 rounded-md  shadow-bottom-black  py-[6px] px-4 h-auto cursor-pointer',
              )}>
              <Text>{title}</Text>
              <ChevronDown
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
                {children?.map(({ title, fullPath }, i) => (
                  <NavigationMenu.Link key={i} asChild>
                    <Link
                      to={fullPath}
                      className="py-2 px-3 hover:bg-brand-300 rounded-md transition-color duration-300 cursor-pointer">
                      <Text color="accent-200">{title}</Text>
                      <Text className="text-text-secondary">{title}</Text>
                    </Link>
                  </NavigationMenu.Link>
                ))}
              </div>
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
