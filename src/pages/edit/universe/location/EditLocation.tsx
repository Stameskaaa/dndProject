import { useForm } from 'react-hook-form';
import type { Spell } from '@/features/spells/types';
import { trait_types } from '@/mock/mock';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditLocation = () => {
  const { control, reset, handleSubmit } = useForm<Spell>();

  return (
    <EditWrapper
      title={'Настройка локаций'}
      saveAction={handleSubmit(() => {})}
      cancelAction={reset}>
      <Input
        required
        placeholder="Деревня лунных орхидей"
        message="Название локации"
        name="name"
        control={control}
      />
      <div className="flex gap-2 items-start">
        <Selector
          className="flex-1"
          placeholder="Долина Гурван-Гол"
          message="Выберите мир"
          required
          label="Миры"
          control={control}
          name="world_id"
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

      <Selector
        className="flex-1"
        placeholder="Страна Сенкриф"
        message="Выберите страну"
        required
        label="Страны"
        control={control}
        name="country_id"
        options={trait_types.map(({ id, name }) => ({ id, value: name }))}
      />

      {/* Добавление монстров рейдбоссов по модалка */}

      <Input
        required
        placeholder="Дивный уголок теократии Сенкриф"
        message="Короткое описание (1-2 предложения)"
        name="short_description"
        control={control}
      />

      <TextareaMD hasMd required control={control} message="Описание" name="md_description" />
    </EditWrapper>
  );
};
