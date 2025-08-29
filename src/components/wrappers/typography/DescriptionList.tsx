import type { ReactNode } from 'react';
import { Text } from './Text';
import classNames from 'classnames';
import type { BaseColor, Size } from './constants';
import type { LucideIcon } from 'lucide-react';

interface DescriptionListProps {
  data: { title: ReactNode; value: ReactNode; icon?: LucideIcon }[];
  options?: {
    background?: boolean;
    className?: string;
    size?: Size;
    secondaryColor?: BaseColor;
  };
}

export const DescriptionList: React.FC<DescriptionListProps> = ({ data, options }) => {
  const { size, secondaryColor } = options || {};

  return (
    <div
      style={{ width: '100%' }}
      className={classNames(
        'flex flex-col w-full',
        options?.background ? 'bg-brand-200 py-3 px-4 rounded-md' : '',
        options?.className,
      )}>
      {data.map(({ title, value, icon: Icon }, i) => {
        return (
          <div key={i} style={{ wordWrap: 'break-word' }} className="flex w-full items-start">
            <Text
              size={size}
              as="span"
              className="inline-flex gap-x-2 flex-1 min-w-0 break-words break-all hyphens-auto items-start"
              color={secondaryColor || 'text-secondary'}>
              <Text
                size={size}
                as="span"
                className="flex-shrink-0 inline-flex gap-x-1 items-center">
                {Icon && <Icon size={14} />} {title}:
              </Text>
              {value}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
