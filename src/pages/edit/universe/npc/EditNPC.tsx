import { useForm } from 'react-hook-form';
import type { NPC } from '@/features/npc/types';
import { trait_types } from '@/mock/mock';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditNPC = () => {
  const { control, reset, handleSubmit } = useForm<NPC>();

  return (
    <EditWrapper
      title={'Настройка Личностей(NPC)'}
      saveAction={handleSubmit(() => {})}
      cancelAction={reset}>
      <Input
        required
        placeholder="Галакхад Вишар"
        message="Имя личности"
        name="name"
        control={control}
      />
      <div className="flex gap-2 items-start">
        <Selector
          className="flex-1"
          placeholder="Долина Гурван-Гол"
          message="Выберите миры"
          required
          label="Миры"
          control={control}
          name="world_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Selector
          className="flex-1"
          placeholder="Страна Сенкриф"
          message="Выберите страну"
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
      <Input
        required
        className="flex-1"
        message="Прикрепите фотографию"
        placeholder="https://image.png"
        name="src"
        control={control}
      />

      <Input
        required
        className="flex-1"
        message="Статус"
        placeholder="Главный юстициал"
        name="status"
        control={control}
      />
      <Input
        required
        className="flex-1"
        message="Фракция"
        placeholder="Судебная дихтонгия"
        name="fraction"
        control={control}
      />
      <Input
        required
        placeholder="Глава судебной власти, дипломат"
        message="Короткое описание (1-2 предложения)"
        name="short_description"
        control={control}
      />

      <TextareaMD hasMd required control={control} message="Описание" name="md_description" />
      <TextareaMD hasMd required control={control} message="История" name="md_history" />
      <TextareaMD hasMd required control={control} message="Фан факты" name="md_fun_facts" />
    </EditWrapper>
  );
};
