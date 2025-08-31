import classNames from 'classnames';
import { CheckCheck, ChevronUp } from 'lucide-react';
import { Controller, type Control } from 'react-hook-form';
import { useState, useMemo, type HTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { useElementWidth } from '@/hooks/useElementWidth';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface Option {
  id: string;
  value: string;
}

interface SelectorProps {
  name: string;
  control: Control<any>;
  options: Option[];
  multiple?: boolean;
  label?: string;
  defaultValue?: string[];
  contentProps?: React.ComponentProps<typeof PopoverContent>;
  triggerProps?: HTMLAttributes<HTMLButtonElement>;
  className?: string;
}

const maxVisible = 4;
const itemHeight = 36;
const paddingY = 8;
const defaultWidth = 300;
const gap = 4;

export const Selector: React.FC<SelectorProps> = ({
  name,
  control,
  options,
  multiple = false,
  label,
  defaultValue = [],
  contentProps,
  triggerProps,
}) => {
  const [open, setOpen] = useState(false);
  const { elementRef, elementWidth } = useElementWidth();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => {
        const selectedIds = value || [];

        const toggleOption = (id: string) => {
          if (multiple) {
            if (selectedIds.includes(id)) {
              onChange(selectedIds.filter((x: string) => x !== id));
            } else {
              onChange([...selectedIds, id]);
            }
          } else {
            onChange(selectedIds[0] === id ? [] : [id]);
            setOpen(false);
          }
        };

        const displayText = useMemo(() => {
          if (!selectedIds.length) return label || 'Выберите';
          const selectedValues = options
            .filter((opt) => selectedIds.includes(opt.id))
            .map((opt) => opt.value);
          return multiple ? selectedValues.join(', ') : selectedValues[0];
        }, [selectedIds, options, label, multiple]);

        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                ref={elementRef}
                variant="default"
                style={{ width: defaultWidth }}
                {...triggerProps}
                className={classNames(
                  'justify-between truncate relative !pr-[30px]',
                  'focus-visible:ring-brand-200/50 focus-visible:ring-[3px] focus-visible:border-brand-300',
                  triggerProps?.className,
                )}>
                <span className="min-w-0 overflow-hidden text-ellipsis">{displayText}</span>
                <ChevronUp
                  className="transition-transform duration-300 absolute right-2"
                  style={open ? { transform: 'rotate(180deg)' } : {}}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-full flex flex-col px-0 py-2 contain-content gap-1"
              style={{
                maxHeight: maxVisible * itemHeight + paddingY * 2 + (gap * options.length - 1),
                overflowY: options.length > maxVisible ? 'auto' : 'visible',
                width: elementWidth || defaultWidth,
              }}
              {...contentProps}>
              {options.map((opt) => {
                const active = selectedIds.includes(opt.id);
                return (
                  <Button
                    key={opt.id}
                    variant="ghost"
                    className={classNames(
                      `h-[${itemHeight}px] justify-start text-text-secondary truncate rounded-none duration-300 gap-0`,
                      active ? 'bg-brand-300 ' : '',
                    )}
                    onClick={() => toggleOption(opt.id)}>
                    {active && <CheckCheck className="mr-2" />}
                    {opt.value}
                  </Button>
                );
              })}
            </PopoverContent>
          </Popover>
        );
      }}
    />
  );
};
