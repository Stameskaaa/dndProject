import { useForm } from 'react-hook-form';
import {
  useCreateTraitMutation,
  useDeleteTraitMutation,
  useGetTraitListQuery,
  useUpdateTraitMutation,
} from '@/features/traits/api';
import type { Trait } from '@/features/traits/types';
import { trait_types } from '@/mock/mock';
import { EditList } from '../../ui/EditItem';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditTrait = () => {
  const { control, reset, getValues, handleSubmit } = useForm<Trait>();

  return (
    <EditList
      reset={reset}
      handleSubmit={handleSubmit}
      getValues={getValues}
      queryHook={useGetTraitListQuery}
      createHook={useCreateTraitMutation}
      updateHook={useUpdateTraitMutation}
      removeHook={useDeleteTraitMutation}
      mapData={(data: Trait[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, name }) => ({
          id,
          title: name,
        }));
      }}>
      <div className="flex gap-2 items-start">
        <Input
          className="flex-1"
          required
          placeholder="Посвященный в магию"
          message="Название черты"
          name="name"
          control={control}
        />
        <Selector
          className="flex-1"
          placeholder="Происхождения"
          required
          message="Выберите тип черты"
          label="Черты"
          control={control}
          name="featureTypeId"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
      </div>

      <Selector
        placeholder="Долина Гурван-Гол"
        message="Выберите мир"
        required
        label="Миры"
        multiple
        control={control}
        name="worldIds"
        options={trait_types.map(({ id, name }) => ({ id, value: name }))}
      />

      <Input
        required
        message="Требования"
        placeholder="Значение силы выше 14"
        name="requirements"
        control={control}
      />

      <TextareaMD hasMd required control={control} message="Описание умения" name="mdDescription" />
    </EditList>
  );
};
