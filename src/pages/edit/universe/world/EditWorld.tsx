import { useForm } from 'react-hook-form';
import {
  useCreateGodMutation,
  useDeleteGodMutation,
  useGetGodListQuery,
  useUpdateGodMutation,
} from '@/features/gods/api';
import { God } from '@/features/gods/types';
import type { World } from '@/features/worlds/types';
import { EditList } from '../../ui/EditItem';
import { trait_types } from '@/mock/mock';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditWorld = () => {
  const methods = useForm<God>();
  const { control } = methods;

  // TODO
  return (
    <EditList
      methods={methods}
      queryHook={useGetGodListQuery}
      createHook={useCreateGodMutation}
      updateHook={useUpdateGodMutation}
      removeHook={useDeleteGodMutation}
      mapData={(data: God[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, name, shortDescription }) => ({
          id,
          title: name,
          description: shortDescription,
        }));
      }}>
      <Input required placeholder="Кайдор" message="Имя бога" name="name" control={control} />
      <Input
        required
        className="flex-1"
        message="Прикрепите фотографию"
        placeholder="https://image.png"
        name="src"
        control={control}
      />
      <div className="flex gap-2 flex-wrap items-end">
        <Selector
          className="w-auto flex-1 min-w-[260px]"
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
          className="w-auto flex-1 min-w-[260px]"
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
    </EditList>
  );
};
