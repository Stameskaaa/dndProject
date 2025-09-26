import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';

type BrandColor = 'brand-50' | 'brand-100' | 'brand-200' | 'brand-300' | 'brand-400' | 'brand-500';

type EdgeSide = 'left' | 'right' | 'both';

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  spacing?: 'default' | 'equalSmall' | 'equalLarge' | 'empty';
  edgeEffect?: 'none' | 'gradient' | 'block';
  edgeColor?: BrandColor;
  edgeSide?: EdgeSide;
};

export function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  spacing = 'default',
  edgeEffect = 'none',
  edgeColor = 'brand-300',
  edgeSide = 'left',
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

  const colorVar = `var(--color-${edgeColor})`;

  const renderGradient = (side: 'left' | 'right') => (
    <div
      className={cn(
        'absolute top-0 h-full w-1/5',
        side === 'left' && 'left-0',
        side === 'right' && 'right-0',
      )}
      style={{
        background:
          side === 'left'
            ? `linear-gradient(to right, ${colorVar}, transparent)`
            : `linear-gradient(to left, ${colorVar}, transparent)`,
      }}
    />
  );

  const renderBlock = (side: 'left' | 'right') => (
    <div
      className={cn(
        'absolute w-3 h-3 rotate-45 border-2 border-current bg-transparent',
        side === 'left' && 'left-0 -translate-x-[calc(50%+1px)] top-1/2 -translate-y-1/2',
        side === 'right' && 'right-0 translate-x-[calc(50%+1px)] top-1/2 -translate-y-1/2',
      )}
      style={{ borderColor: colorVar }}
    />
  );

  const sides: Array<'left' | 'right'> = edgeSide === 'both' ? ['left', 'right'] : [edgeSide];

  return (
    <div className="relative w-full">
      <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(
          'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full',
          'bg-[var(--color-brand-200)]',
          marginClass,
          className,
        )}
        {...props}
      />

      {edgeEffect === 'gradient' &&
        orientation === 'horizontal' &&
        sides.map((side) => renderGradient(side))}
      {edgeEffect === 'block' && sides.map((side) => renderBlock(side))}
    </div>
  );
}
