import { useForm } from 'react-hook-form';
import { Input } from '@/components/wrappers/forms/input/Input';
import type { God } from '@/features/gods/types';
import { EditWrapper } from '../ui/EditContainer';

export const EditCharacteristic = () => {
  const { control, reset, handleSubmit } = useForm<God>();

  return (
    <EditWrapper
      modalTriggerText="Открыть список характеристик"
      title={'Настройка Характеристик'}
      saveAction={handleSubmit(() => {})}
      cancelAction={reset}>
      <Input
        required
        placeholder="Рассудок"
        message="Название характеристики"
        name="name"
        control={control}
      />
    </EditWrapper>
  );
};
