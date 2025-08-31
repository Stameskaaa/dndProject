import { Controller, type Control } from 'react-hook-form';
import { UIInput, type InputUIPropsType } from '@/components/ui/input';

interface FormInputProps extends InputUIPropsType {
  control: Control<any>;
  name: string;
}

export const Input = ({ control, name, ...props }: FormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <UIInput {...field} {...props} />}
    />
  );
};
