import type { World } from '@/features/worlds/types';
import { useForm } from 'react-hook-form';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { trait_types } from '@/mock/mock';

export const EditWorld = () => {
  const { control, reset, handleSubmit } = useForm<World>();

  return (
    <EditWrapper title={'Настройка Миров'} saveAction={handleSubmit(() => {})} cancelAction={reset}>
      <Input required placeholder="Кайдор" message="Имя бога" name="name" control={control} />
      <Input
        required
        className="flex-1"
        message="Прикрепите фотографию"
        placeholder="https://image.png"
        name="src"
        control={control}
      />
      <div className="flex gap-2 items-start">
        <Selector
          className="flex-1"
          placeholder="Страна Сенкриф"
          message="Выберите страны"
          required
          multiple
          label="Страны"
          control={control}
          name="country_id"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />

        <Selector
          className="flex-1"
          placeholder="Долина лунных орхидей"
          message="Выберите локации"
          required
          multiple
          label="Локации"
          control={control}
          name="location_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
      </div>
      <div>
        <Selector
          className="flex-1"
          placeholder="Страна Сенкриф"
          message="Выберите расы"
          required
          multiple
          label="Страны"
          control={control}
          name="country_id"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Selector
          className="flex-1"
          placeholder="Долина лунных орхидей"
          message="Выберите классы"
          required
          multiple
          label="Локации"
          control={control}
          name="location_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Selector
          className="flex-1"
          placeholder="Долина лунных орхидей"
          message="Выберите происхождения"
          required
          multiple
          label="Локации"
          control={control}
          name="location_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Selector
          className="flex-1"
          placeholder="Долина лунных орхидей"
          message="Выберите богов"
          required
          multiple
          label="Локации"
          control={control}
          name="location_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Selector
          className="flex-1"
          placeholder="Долина лунных орхидей"
          message="Выберите черты"
          required
          multiple
          label="Локации"
          control={control}
          name="location_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
      </div>

      <Input
        required
        placeholder="Глава судебной власти, дипломат"
        message="Короткое описание (1-2 предложения)"
        name="short_description"
        control={control}
      />
      <TextareaMD hasMd required control={control} message="История" name="md_history" />
      <TextareaMD hasMd required control={control} message="Описание" name="md_description" />
    </EditWrapper>
  );
};
