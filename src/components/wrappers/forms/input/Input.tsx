import { useState } from 'react';
import { motion } from 'framer-motion';
import { Controller, type Control } from 'react-hook-form';
import { UIInput, type InputUIPropsType } from '@/components/ui/input';
import { Text } from '../../typography/Text';
import classNames from 'classnames';

interface FormInputProps extends InputUIPropsType {
  control: Control<any>;
  name: string;
  inputClassName?: string;
}

export const Input = ({
  control,
  name,
  className,
  style,
  placeholder,
  onFocus,
  onBlur,
  inputClassName,
  ...props
}: FormInputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={classNames(className, 'relative')} style={style}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          const isActive = focus || field?.value;

          return (
            <>
              <UIInput
                {...field}
                onBlur={(e) => {
                  onBlur?.(e);
                  setFocus(false);
                }}
                onFocus={(e) => {
                  onFocus?.(e);
                  setFocus(true);
                }}
                {...props}
                className={inputClassName}
              />
              {placeholder && (
                <motion.label
                  initial={'rest'}
                  className={'absolute left-[12px] leading-[16px] pointer-events-none'}
                  animate={isActive ? 'active' : 'rest'}
                  variants={{
                    rest: { y: -30 },
                    active: { y: -57, x: 5 },
                  }}>
                  <Text
                    className="duration-300"
                    color={isActive ? 'brand-100' : 'text-muted'}
                    as="span">
                    {placeholder}
                  </Text>
                </motion.label>
              )}
            </>
          );
        }}
      />
    </div>
  );
};
