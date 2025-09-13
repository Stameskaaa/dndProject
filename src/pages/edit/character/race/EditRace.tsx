import { useForm } from 'react-hook-form';
import type { Race } from '@/features/races/types';
import { EditList } from '../../ui/EditItem';
import { creature_sizes, creature_types, trait_types } from '@/mock/mock';
import { Text } from '@/components/wrappers/typography/Text';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import {
  useCreateRaceMutation,
  useDeleteRaceMutation,
  useGetRaceListQuery,
  useUpdateRaceMutation,
} from '@/features/races/api';

export const EditRace = () => {
  const { control, reset, handleSubmit, getValues } = useForm<Race>({
    defaultValues: {
      features: {
        type: 'Humanoid',
        size: 'Medium',
      },
    },
  });

  return (
    <EditList<Race>
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={getValues}
      queryHook={useGetRaceListQuery}
      createHook={useCreateRaceMutation}
      updateHook={useUpdateRaceMutation}
      removeHook={useDeleteRaceMutation}
      mapData={(data: Race[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, name }) => ({ id, title: name }));
      }}
      cancelAction={() => {}}>
      <Input
        required
        placeholder="Эльф"
        message="Название типа вида(расы)"
        name="name"
        control={control}
      />
      <div className="flex gap-2 items-start">
        <Input
          className="flex-1"
          required
          message="Ссылка на фото"
          placeholder="https://example.com/image.png"
          name="src"
          control={control}
        />
        <Selector
          className="flex-1"
          placeholder="Долина Гурван-Гол"
          message="Выберите мир"
          required
          label="Миры"
          multiple
          control={control}
          name="world_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
      </div>
      <TextareaMD hasMd required control={control} message="История" name="md_history" />
      <TextareaMD hasMd required control={control} message="Описание" name="md_description" />
      <div className="flex flex-col gap-2 p-3 border border-brand-200 rounded-md">
        <Text size="lg" className="border-b border-brand-200 pb-1">
          Особенности
        </Text>
        <div className="flex gap-2 items-start">
          <Selector
            className="flex-1"
            required
            message="Тип существа"
            label="Типы"
            placeholder="Гуманоид"
            name="features.type"
            control={control}
            options={creature_types}
          />
          <Selector
            className="flex-1"
            required
            message="Размер"
            label="Размеры"
            placeholder="Средний"
            name="features.size"
            control={control}
            options={creature_sizes}
          />
          <Input
            className="flex-2"
            required
            message="Скорость"
            placeholder="30 футов, лазая 20 футов"
            name="features.speed"
            control={control}
          />
        </div>

        <TextareaMD
          hasMd
          required
          control={control}
          placeholder="Чувство вибрации, с учетом подвидов"
          message="Оосбенные умения"
          name="features.md_content"
        />
      </div>
    </EditList>
  );
};
