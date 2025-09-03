import classNames from 'classnames';
import { CheckCheck, ChevronDown } from 'lucide-react';
import { Controller, type Control } from 'react-hook-form';
import { useState, useMemo, type HTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { useElementWidth } from '@/hooks/useElementWidth';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Text } from '../../typography/Text';

interface Option {
  id: string;
  value: string;
}

interface SelectorProps {
  name: string;
  control: Control<any>;
  options: Option[];
  multiple?: boolean;
  placeholder?: string;
  label?: string;
  defaultValue?: string[];
  contentProps?: React.ComponentProps<typeof PopoverContent>;
  triggerProps?: HTMLAttributes<HTMLButtonElement>;
  className?: string;
}

const maxVisible = 4;
const itemHeight = 36;
const paddingY = 8;
const paddingTop = 28;
const defaultWidth = 300;
const gap = 4;

export const Selector: React.FC<SelectorProps> = ({
  name,
  control,
  options,
  multiple = false,
  placeholder,
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
          if (!selectedIds.length) return '';
          const selectedValues = options
            .filter((opt) => selectedIds.includes(opt.id))
            .map((opt) => opt.value);
          return multiple ? selectedValues.join(', ') : selectedValues[0];
        }, [selectedIds, options, multiple]);

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
                  triggerProps?.className,
                )}>
                <Text
                  as="span"
                  color={displayText ? 'text-secondary' : 'text-muted'}
                  className="min-w-0 overflow-hidden duration-300 text-ellipsis">
                  {displayText || placeholder}
                </Text>
                <ChevronDown
                  className="transition-transform duration-300 absolute right-2"
                  style={open ? { transform: 'rotate(180deg)' } : {}}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-full flex flex-col px-0 py-2 pt-0 contain-content gap-1"
              style={{
                maxHeight:
                  maxVisible * itemHeight + paddingY + paddingTop + (gap * options.length - 1),
                overflowY: options.length > maxVisible ? 'auto' : 'visible',
                width: elementWidth || defaultWidth,
              }}
              {...contentProps}>
              <Text color="text-muted" className="px-[18px] pt-2 select-none" size="sm">
                {label || 'Выберите значение'}
              </Text>

              {options.map((opt) => {
                const active = selectedIds.includes(opt.id);
                return (
                  <Button
                    key={opt.id}
                    variant="ghost"
                    className={classNames(
                      `h-[${itemHeight}px] justify-start border-l-2 border-transparent text-text-secondary truncate rounded-none duration-300 gap-0`,
                      active ? 'bg-brand-300 border-brand-100' : '',
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
