import { useForm } from 'react-hook-form';
import { trait_types } from '@/mock/mock';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import type { God } from '@/features/gods/types';

export const EditGods = () => {
  const { control, reset, handleSubmit } = useForm<God>();

  return (
    <EditWrapper title={'Настройка богов'} saveAction={handleSubmit(() => {})} cancelAction={reset}>
      <Input required placeholder="Кайдор" message="Имя бога" name="name" control={control} />
      <div className="flex gap-2 items-start">
        <Selector
          className="flex-1"
          placeholder="Долина Гурван-Гол"
          message="Выберите миры"
          required
          multiple
          label="Миры"
          control={control}
          name="world_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Input
          required
          className="flex-1"
          message="Прикрепите фотографию"
          placeholder="https://image.png"
          name="src"
          control={control}
        />
      </div>

      <Input
        required
        placeholder="Бог простых ремесел и честного труда"
        message="Короткое описание (1-2 предложения)"
        name="short_description"
        control={control}
      />

      <TextareaMD hasMd required control={control} message="Описание" name="md_description" />
    </EditWrapper>
  );
};
