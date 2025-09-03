import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  spacing?: 'default' | 'equalSmall' | 'equalLarge' | 'empty';
};

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  spacing = 'default',
  ...props
}: SeparatorProps) {
  let marginClass = '';
  if (orientation === 'horizontal') {
    switch (spacing) {
      case 'equalSmall':
        marginClass = '!h-[2px] mt-[12px] mb-[12px]';
        break;
      case 'equalLarge':
        marginClass = '!h-[2px] mt-[22px] mb-[22px]';
        break;
      case 'empty':
        marginClass = '!h-[2px] mt-0 mb-0';
        break;
      default:
        marginClass = '!h-[2px] mt-[22px] mb-[12px]';
    }
  }

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        'bg-brand-100',
        marginClass,
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
