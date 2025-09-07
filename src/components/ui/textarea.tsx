import { Controller, type Control } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { FormMessage } from '../wrappers/forms/formMessage/FormMessage';
import { Button } from './button';
import { MarkDownText } from '../wrappers/typography/MarkDownText';
import { Eye, EyeOff, Heart, MessageCircleQuestionMark } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ModalWindow } from '../wrappers/modals/modalWindow/ModalWindow';
import cat from '../../assets/cat.webp';
import { MotionText, Text } from '../wrappers/typography/Text';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  control: Control<any>;
  name: string;
  message?: string;
  placeholder?: string;
  hasMd?: boolean;
  required?: boolean;
  errorMessage?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  control,
  name,
  message,
  placeholder,
  className,
  hasMd,
  required,
  errorMessage,
  ...props
}) => {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <Controller
      name={name}
      rules={{ required: errorMessage || required }}
      control={control}
      defaultValue=""
      render={({ field, fieldState }) => {
        const { value, onChange, onBlur } = field;
        const { error } = fieldState;

        return (
          <div className="flex flex-col w-full gap-1 relative">
            {message && <FormMessage as="label">{message}</FormMessage>}
            {hasMd && (
              <div className="flex gap-1 absolute right-0 top-[-6px] p-4">
                <>
                  <Button onClick={() => onChange(value + '\n# Заголвооку')} variant="secondary">
                    <Text>Вставить заголвоок</Text> {isShowed ? <Eye /> : <EyeOff />}
                  </Button>
                  <Button onClick={() => setIsShowed((prev) => !prev)} variant="secondary">
                    <Text>Предпросмотр</Text> {isShowed ? <Eye /> : <EyeOff />}
                  </Button>
                  <Button variant="secondary">
                    <MessageCircleQuestionMark />
                  </Button>
                  <ModalWindow
                    contentClassname="h-[fit-content] overflow-hidden"
                    buttonTrigger={
                      <Button>
                        <Heart />
                      </Button>
                    }>
                    <motion.img
                      animate={{ y: [400, 0], opacity: [0, 1], rotate: [0, 0, 360] }}
                      transition={{ duration: 2, times: [0, 0.8, 1] }}
                      src={cat}
                    />
                    <MotionText
                      size="xl"
                      className="absolute bottom-0 left-[180px]"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: -200 }}
                      transition={{ type: 'spring', duration: 0.6, delay: 2.2 }}>
                      Ты лох
                    </MotionText>

                    <MotionText
                      size="sm"
                      className="absolute bottom-0 left-[30px]"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: -160 }}
                      transition={{ type: 'spring', duration: 0.6, delay: 3 }}>
                      А Сюда не смотри
                    </MotionText>
                  </ModalWindow>
                </>
              </div>
            )}
            <textarea
              {...props}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              data-slot="textarea"
              className={cn(
                'border-brand-300 !bg-brand-400 text-text-secondary placeholder:text-text-muted focus-visible:ring-brand-200/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
                'aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-md shadow-xs transition-[color,box-shadow]',
                'outline-none overscroll-contain focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                error && '!border-error ring-destructive/20',
                className,
              )}
            />
            {error?.message && <FormMessage type="error">{error?.message}</FormMessage>}
            <AnimatePresence mode="wait">
              {hasMd && isShowed && (
                <motion.div
                  className="overflow-y-auto overscroll-contain border-1 rounded-md p-2 border-brand-200"
                  layout
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}>
                  <MarkDownText className="min-h-[300px] max-h-[500px]">{field.value}</MarkDownText>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    />
  );
};
