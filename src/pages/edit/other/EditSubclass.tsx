import { useForm } from 'react-hook-form';
import { Input } from '@/components/wrappers/forms/input/Input';
import { EditWrapper } from '../ui/EditContainer';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import type { ClassSkills } from '@/features/classes/types';

export const EditSubclass = () => {
  const { control, reset, handleSubmit } = useForm<ClassSkills>();

  return (
    <EditWrapper
      title={'Настройка Подклассов'}
      modalTriggerText="Открыть список подклассов"
      saveAction={handleSubmit(() => {})}
      cancelAction={reset}>
      <Input
        required
        placeholder="Пивной рыцарь"
        message="Название подкласса"
        name="name"
        control={control}
      />
      <TextareaMD
        hasMd
        required
        control={control}
        message="Описание умений и способностей"
        name="md_description"
      />
    </EditWrapper>
  );
};
